import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { createServer } from 'node:http'
import { NotesService } from '../server/notes-service'
import { NotesStore } from '../server/notes-store'
import { reconcileAssessments } from '../server/review'
import { diffMarkdown } from '../src/database/notes-markdown'
import {
  safeImageSource,
  imageSources,
} from '../src/database/note-image-markdown'
import { renderToStaticMarkup } from 'react-dom/server'
import { createElement } from 'react'
import MarkdownText from '../src/components/MarkdownText'
import NoteDocument from '../src/components/NoteDocument'
import { notesRequest, requestNoteImage } from '../src/lib/notes-api'
import type { AgentAssessment } from '../src/database/contribution-types'
import type { ModelCall } from '../server/review'

const root = process.cwd()
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'academy-notes-test-'))
const seed = JSON.parse(
  fs.readFileSync(
    path.join(root, 'src/database/synonance.database.json'),
    'utf8',
  ),
)
const courseId = 'math-aa-hl'
const before =
  '# Limits\n\nA guide to limits.\n\n## Definition\nA limit describes nearby behavior.'
const after = `${before}\n\n## Worked example\nFor f(x) = x + 1, the limit as x tends to 2 is 3.`
const assessment: AgentAssessment = {
  decision: 'approve',
  rationale: 'Adds a correct worked example to a missing section.',
  evidence: 'Substituting x = 2 into x + 1 gives 3 by continuity.',
  completeness: 25,
  incorrect: false,
  penalty: 0,
  penalties: [],
}
let responses: unknown[] = []
let slow: ((signal: AbortSignal) => Promise<string>) | null = null
const model: ModelCall = async (_messages, signal) => {
  if (slow) return await slow(signal)
  assert.ok(responses.length, 'Test must provide a model response')
  return JSON.stringify(responses.shift())
}
const options = {
  root,
  dataDirectory: path.join(temporary, 'data'),
  institution: seed.institution.id,
  model: 'test-agent',
  authenticate: async (bearer: string) =>
    bearer === 'Bearer invalid'
      ? null
      : {
          sub: bearer.slice(7),
          name: bearer.slice(7),
          org:
            bearer === 'Bearer outsider' ? 'other-school' : seed.institution.id,
          verified: true,
        },
  modelCall: model,
}
const service = new NotesService(options)
service.store.write((state) =>
  state.notes.push({
    id: 'fixture',
    courseId,
    code: '1',
    title: 'Limits',
    summary: 'A guide to limits.',
    sections: [],
    revision: 1,
    updated: 'now',
    markdown: before,
  }),
)
const server = createServer((req, res) => {
  void service.handle(req, res)
})
// Match the deployed Launchpad boundary: platform credentials never reach apps.
const proxy = createServer((req, res) => {
  delete req.headers.authorization
  void service.handle(req, res)
})
await new Promise<void>((resolve) => proxy.listen(0, '127.0.0.1', resolve))
const proxyPort = (proxy.address() as { port: number }).port
await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve))
const port = (server.address() as { port: number }).port
async function api(
  route: string,
  data?: unknown,
  who = 'alice',
  method = data === undefined ? 'GET' : 'POST',
) {
  const response = await fetch(
    `http://127.0.0.1:${port}/__academy/notes${route}`,
    {
      method,
      headers: {
        Authorization: `Bearer ${who}`,
        'Content-Type': 'application/json',
      },
      ...(data !== undefined ? { body: JSON.stringify(data) } : {}),
    },
  )
  return { status: response.status, data: await response.json() }
}
const input = {
  courseId,
  noteId: 'fixture',
  title: 'Limits',
  source: 'For f(x) = x + 1, the limit as x tends to 2 is 3.',
  fileName: 'limits.md',
  mode: 'upload',
}
function row(id: string) {
  return service.store.read().packets.find((packet) => packet.id === id)!
}
async function settled(id: string) {
  for (let i = 0; i < 300; i++) {
    const packet = row(id)
    if (!['queued', 'indexing', 'reviewing'].includes(packet.status))
      return packet
    await new Promise((resolve) => setTimeout(resolve, 10))
  }
  throw new Error(`Packet ${id} did not settle`)
}
try {
  const nativeFetch = globalThis.fetch
  const originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window')
  Object.defineProperty(globalThis, 'window', {
    configurable: true,
    value: { LaunchpadAuth: { state: { accessToken: 'alice' } } },
  })
  globalThis.fetch = (input, init) =>
    nativeFetch(
      typeof input === 'string' && input.startsWith('/__academy/notes')
        ? `http://127.0.0.1:${proxyPort}${input}`
        : input,
      init,
    )
  try {
    const state = await notesRequest<{ notes: Array<{ id: string }> }>(
      `/state?courseId=${courseId}`,
    )
    assert.ok(state.notes.some((note) => note.id === 'fixture'))
    window.LaunchpadAuth!.state!.accessToken = 'invalid'
    await assert.rejects(notesRequest(`/state?courseId=${courseId}`), /expired/)
    window.LaunchpadAuth!.state!.accessToken = 'outsider'
    await assert.rejects(notesRequest(`/state?courseId=${courseId}`), /membership/)
    window.LaunchpadAuth!.state!.accessToken = 'alice'
    const png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aX1kAAAAASUVORK5CYII='
    const uploaded = await notesRequest<{ source: string }>('/images', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'image/png', 'X-File-Name': 'proxy-test.png' }),
      body: new Blob([Buffer.from(png, 'base64')], { type: 'image/png' }),
    })
    const image = await requestNoteImage(uploaded.source)
    assert.deepEqual(Buffer.from(await image.arrayBuffer()), Buffer.from(png, 'base64'))
    const stripped = await nativeFetch(
      `http://127.0.0.1:${proxyPort}/__academy/notes/state?courseId=${courseId}`,
      { headers: { Authorization: 'Bearer alice' } },
    )
    assert.equal(stripped.status, 401)
    console.log('PASS: browser notes and images authenticate through the Launchpad stripping proxy')
  } finally {
    globalThis.fetch = nativeFetch
    if (originalWindow) Object.defineProperty(globalThis, 'window', originalWindow)
    else Reflect.deleteProperty(globalThis, 'window')
    await new Promise<void>((resolve) => proxy.close(() => resolve()))
  }
  assert.equal(
    (await api('/state?courseId=math-aa-hl', undefined, 'invalid')).status,
    401,
  )
  assert.equal(
    (await api('/state?courseId=math-aa-hl', undefined, 'outsider')).status,
    403,
  )
  assert.equal(
    (
      await api('/packets', {
        ...input,
        submittedBy: 'admin',
        ledger: [{ points: 100 }],
      })
    ).status,
    400,
  )
  assert.equal(
    (await api('/packets', { ...input, source: '![bad](javascript:alert)' }))
      .status,
    400,
  )
  assert.equal(
    (
      await api('/packets', {
        ...input,
        source: '![unreviewed](https://example.com/image.png)',
      })
    ).status,
    400,
  )
  assert.equal(
    (await api('/packets', { ...input, courseId: '../secret' })).status,
    400,
  )
  console.log(
    'PASS: session, institution, ownership inputs, path and image validation',
  )

  responses = [{ ...assessment, markdown: after }, assessment]
  const uploaded = await api('/packets', input)
  assert.equal(uploaded.status, 201, JSON.stringify(uploaded.data))
  const id = uploaded.data.id
  const ready = await settled(id)
  assert.equal(ready.status, 'ready')
  assert.equal(ready.ledger.length, 0)
  assert.equal(
    service.store.read().notes.find((note) => note.id === 'fixture')!.markdown,
    before,
  )
  assert.equal((await api(`/packets/${id}/publish`, {}, 'bob')).status, 403)
  const bobBefore = await api(`/state?courseId=${courseId}`, undefined, 'bob')
  assert.equal(bobBefore.data.packets.length, 0, 'Pending sources stay private')
  assert.equal((await api(`/packets/${id}/publish`, {})).status, 200)
  assert.equal(row(id).ledger[0].points, 25)
  assert.equal((await api(`/packets/${id}/publish`, {})).status, 200)
  assert.equal(row(id).ledger.length, 1, 'Retries cannot double-credit')
  assert.equal(
    (await api('/packets', input)).status,
    409,
    'Duplicate submissions refused',
  )
  const shared = await api(`/state?courseId=${courseId}`, undefined, 'bob')
  assert.equal(
    shared.data.notes.find((note: { id: string }) => note.id === 'fixture')
      .markdown,
    after,
  )
  assert.equal(shared.data.packets[0].submittedBy, 'launchpad-alice')
  assert.equal(shared.data.contributors[0].name, 'alice')
  console.log(
    'PASS: two agent passes, staged diff, publication, shared visibility and idempotent credit',
  )

  // A late model response must never resurrect cancelled work.
  let release!: (value: string) => void
  slow = () =>
    new Promise((resolve) => {
      release = resolve
    })
  const cancelled = await api(
    '/packets',
    { ...input, source: 'A second, cancellable packet.' },
    'cancel-user',
  )
  assert.equal(
    (await api(`/packets/${cancelled.data.id}/cancel`, {}, 'bob')).status,
    403,
  )
  assert.equal(
    (await api(`/packets/${cancelled.data.id}/cancel`, {}, 'cancel-user'))
      .status,
    200,
  )
  release(
    JSON.stringify({ ...assessment, markdown: after + '\nCancelled content.' }),
  )
  await new Promise((resolve) => setTimeout(resolve, 30))
  assert.equal(row(cancelled.data.id).status, 'cancelled')
  assert.equal(row(cancelled.data.id).ledger.length, 0)
  slow = null
  console.log('PASS: cancellation aborts late publication and scoring')

  responses = [
    { ...assessment, markdown: after + '\n\nStale proposal.' },
    assessment,
  ]
  const stale = await api(
    '/packets',
    { ...input, source: 'A useful extra continuity explanation.' },
    'stale-user',
  )
  await settled(stale.data.id)
  service.store.write((state) => {
    const note = state.notes.find((note) => note.id === 'fixture')!
    note.revision++
    note.markdown += '\nTeacher added a clarification.'
  })
  slow = (signal) =>
    new Promise((_resolve, reject) =>
      signal.addEventListener('abort', () => reject(new Error('Stopped'))),
    )
  assert.equal(
    (await api(`/packets/${stale.data.id}/publish`, {}, 'stale-user')).status,
    200,
  )
  assert.ok(['queued', 'indexing'].includes(row(stale.data.id).status))
  assert.equal(row(stale.data.id).ledger.length, 0)
  await api(`/packets/${stale.data.id}/cancel`, {}, 'stale-user')
  slow = null
  // release an abort-aware test call so subsequent jobs can drain.
  await new Promise((resolve) => setTimeout(resolve, 30))
  console.log('PASS: stale revision cannot overwrite intervening changes')
  // Confirmed errors are attributed to a published packet and capped at its
  // remaining credit; publication applies the correction and penalty together.
  const badLine = 'The derivative of x squared is x.'
  const badGuide = before + '\n\n## Derivative\n' + badLine
  service.store.write((state) => {
    const target = state.packets.find((packet) => packet.id === id)!
    target.before = before
    target.after = badGuide
    const note = state.notes.find((note) => note.id === 'fixture')!
    note.markdown = badGuide
    note.revision++
  })
  const corrected = badGuide.replace(
    badLine,
    'The derivative of x squared is 2x.',
  )
  const reportAssessment = {
    ...assessment,
    completeness: 8,
    penalties: [
      {
        packetId: id,
        points: 80,
        evidence: `${badLine} This is incorrect: the power rule gives 2x.`,
      },
    ],
  }
  responses = [{ ...reportAssessment, markdown: corrected }, reportAssessment]
  const report = await api(
    '/packets',
    {
      ...input,
      mode: 'report',
      source: 'The derivative of x squared is 2x, by the power rule.',
      quote: badLine,
    },
    'reporter',
  )
  assert.equal(report.status, 201, JSON.stringify(report.data))
  await settled(report.data.id)
  assert.equal(row(id).ledger.length, 1, 'Reports alone never deduct points')
  assert.equal(
    (await api(`/packets/${report.data.id}/publish`, {}, 'reporter')).status,
    200,
  )
  assert.equal(row(id).ledger.length, 2)
  assert.equal(
    row(id).ledger[1].points,
    -25,
    'Penalty cannot exceed remaining awarded points',
  )
  await api(`/packets/${report.data.id}/publish`, {}, 'reporter')
  assert.equal(
    row(id).ledger.length,
    2,
    'A published report cannot deduct twice',
  )
  assert.match(
    service.store.read().notes.find((note) => note.id === 'fixture')!.markdown!,
    /is 2x/,
  )
  console.log(
    'PASS: evidence-attributed correction, capped penalty and idempotent report publication',
  )

  const rejectedAssessment = {
    ...assessment,
    decision: 'reject',
    incorrect: true,
    penalty: 9,
    completeness: 0,
    rationale: 'The proposed derivative is demonstrably incorrect.',
    evidence: 'The power rule gives d(x squared)/dx = 2x, rather than 17.',
  }
  responses = [
    { ...rejectedAssessment, markdown: corrected },
    rejectedAssessment,
  ]
  const rejected = await api(
    '/packets',
    { ...input, source: 'The derivative of x squared is 17.' },
    'incorrect-author',
  )
  assert.equal((await settled(rejected.data.id)).status, 'rejected')
  assert.equal(row(rejected.data.id).ledger[0].points, -9)
  assert.equal(
    (await api(`/packets/${rejected.data.id}/publish`, {}, 'incorrect-author'))
      .status,
    409,
  )
  responses = [
    { ...assessment, markdown: corrected + '\nMaybe this conjecture is true.' },
    { ...assessment, decision: 'uncertain', completeness: 0 },
  ]
  const uncertain = await api(
    '/packets',
    { ...input, source: 'A conjecture that needs more evidence.' },
    'uncertain-author',
  )
  assert.equal((await settled(uncertain.data.id)).status, 'needs-review')
  assert.equal(row(uncertain.data.id).ledger.length, 0)
  assert.equal(
    (await api(`/packets/${uncertain.data.id}/publish`, {}, 'uncertain-author'))
      .status,
    409,
  )
  responses = [{ ...assessment, completeness: 1000, markdown: corrected }]
  const malformed = await api(
    '/packets',
    { ...input, source: 'An agent response with an invalid score.' },
    'malformed-author',
  )
  assert.equal((await settled(malformed.data.id)).status, 'failed')
  assert.equal(row(malformed.data.id).ledger.length, 0)
  console.log(
    'PASS: incorrect-source penalty, uncertain review quarantine and malformed model response refusal',
  )

  const png = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aKs8AAAAASUVORK5CYII=',
    'base64',
  )
  const uploadImage = await fetch(
    `http://127.0.0.1:${port}/__academy/notes/images`,
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer image-author',
        'Content-Type': 'image/png',
      },
      body: png,
    },
  )
  assert.equal(uploadImage.status, 201)
  const image = (await uploadImage.json()) as { source: string }
  const imageId = image.source.replace('note-asset:', '')
  assert.equal(
    (
      await fetch(
        `http://127.0.0.1:${port}/__academy/notes/images/${imageId}`,
        { headers: { Authorization: 'Bearer bob' } },
      )
    ).status,
    404,
  )
  const imageGuide = corrected + `\n\n![Reviewed diagram](${image.source})`
  responses = [{ ...assessment, markdown: imageGuide }, assessment]
  const imagePacket = await api(
    '/packets',
    {
      ...input,
      source: `A diagram for the limit explanation.\n\n![Reviewed diagram](${image.source})`,
    },
    'image-author',
  )
  assert.equal((await settled(imagePacket.data.id)).status, 'ready')
  await api(`/packets/${imagePacket.data.id}/publish`, {}, 'image-author')
  const retrieved = await fetch(
    `http://127.0.0.1:${port}/__academy/notes/images/${imageId}`,
    { headers: { Authorization: 'Bearer bob' } },
  )
  assert.equal(retrieved.status, 200)
  assert.deepEqual(Buffer.from(await retrieved.arrayBuffer()), png)
  assert.equal(
    (
      await fetch(`http://127.0.0.1:${port}/__academy/notes/images`, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer image-author',
          'Content-Type': 'image/png',
        },
        body: '<script>invalid</script>',
      })
    ).status,
    400,
  )
  console.log(
    'PASS: durable image bytes, private pending attachments, shared published images and MIME validation',
  )
  responses = [
    {
      ...assessment,
      markdown:
        '# C1 Sequences\n\nArithmetic sequences use a common difference.\n\n## Example\nThe sequence 2, 5, 8 has common difference 3.',
    },
    assessment,
  ]
  const firstGuide = await api(
    '/packets',
    {
      courseId,
      title: 'Sequences',
      fileName: 'sequences.md',
      source: 'The sequence 2, 5, 8 has common difference 3.',
    },
    'new-guide-author',
  )
  assert.equal(firstGuide.status, 201, JSON.stringify(firstGuide.data))
  await settled(firstGuide.data.id)
  assert.equal(row(firstGuide.data.id).before, '')
  await api(`/packets/${firstGuide.data.id}/publish`, {}, 'new-guide-author')
  const newGuide = service.store
    .read()
    .notes.find((note) => note.id === row(firstGuide.data.id).noteId)!
  assert.equal(newGuide.revision, 1)
  assert.equal(newGuide.code, 'C1')
  assert.equal(newGuide.title, 'Sequences')
  service.store.write((state) =>
    state.notes.push(
      { ...newGuide, id: 'scope-standard', level: 'S' },
      { ...newGuide, id: 'scope-honors', level: 'H' },
    ),
  )
  assert.equal(
    (
      await api(
        '/packets',
        { ...input, noteId: 'scope-standard', level: 'H' },
        'scope-author',
      )
    ).status,
    404,
  )
  const honors = await api(
    `/state?courseId=${courseId}&level=H`,
    undefined,
    'scope-author',
  )
  assert.ok(
    honors.data.notes.some(
      (note: { id: string }) => note.id === 'scope-honors',
    ),
  )
  assert.ok(
    !honors.data.notes.some(
      (note: { id: string }) => note.id === 'scope-standard',
    ),
  )
  console.log(
    'PASS: first guide publication, readable community codes and level isolation',
  )
} finally {
  service.close()
  server.closeAllConnections()
  await new Promise<void>((resolve) => server.close(() => resolve()))
}

// Store survives process restart and rejects competing writers.
const persisted = new NotesStore(options.dataDirectory)
assert.ok(
  persisted.read().packets.some((packet) => packet.status === 'published'),
)
assert.throws(() => new NotesStore(options.dataDirectory), /running writer/)
const saved = persisted.read()
const rename = fs.renameSync
fs.renameSync = () => {
  throw new Error('disk failure')
}
assert.throws(
  () =>
    persisted.write((state) => {
      state.packets = []
    }),
  /disk failure/,
)
fs.renameSync = rename
assert.deepEqual(
  persisted.read(),
  saved,
  'Failed writes cannot mutate committed state',
)
persisted.close()
console.log(
  'PASS: durable restart, exclusive writer and atomic storage failure',
)

const disagreed = reconcileAssessments(
  { ...assessment, incorrect: true, penalty: 40 },
  { ...assessment, decision: 'uncertain', incorrect: false, penalty: 0 },
)
assert.equal(disagreed.decision, 'uncertain')
assert.equal(disagreed.completeness, 0)
assert.equal(disagreed.penalty, 0)
const conservative = reconcileAssessments(
  { ...assessment, completeness: 90 },
  assessment,
)
assert.equal(conservative.completeness, 25)
assert.equal(
  reconcileAssessments(
    {
      ...assessment,
      penalties: [
        { packetId: 'p', points: 80, evidence: 'Clear factual evidence.' },
      ],
    },
    {
      ...assessment,
      penalties: [
        { packetId: 'p', points: 10, evidence: 'Clear factual evidence.' },
        { packetId: 'q', points: 20, evidence: 'Different factual evidence.' },
      ],
    },
  ).penalties.length,
  1,
)
assert.deepEqual(diffMarkdown('same\nsame', 'same'), [
  { kind: 'removed', text: 'same' },
])
assert.ok(
  diffMarkdown('one\ntwo', 'two\none').some((line) => line.kind === 'removed'),
)
assert.equal(safeImageSource('javascript:alert(1)'), false)
assert.equal(safeImageSource('data:image/svg+xml;base64,evil'), false)
assert.equal(safeImageSource('//evil.test/tracker'), false)
assert.deepEqual(imageSources('![Diagram](note-asset:123 "Caption")'), [
  'note-asset:123',
])
const rendered = renderToStaticMarkup(
  createElement(MarkdownText, {
    children: '![Diagram](/diagrams/plot.png) and **bold**',
  }),
)
assert.match(rendered, /<img/)
assert.match(rendered, /alt="Diagram"/)
assert.match(rendered, /<strong/)
assert.ok(
  !renderToStaticMarkup(
    createElement(MarkdownText, { children: '[bad](javascript:alert)' }),
  ).includes('href='),
)
const note = renderToStaticMarkup(
  createElement(NoteDocument, {
    markdown: '# Image\n\nSummary\n\n## Figure\n![Diagram](/diagrams/plot.png)',
  }),
)
assert.match(note, /<img/)
console.log(
  'PASS: conservative review agreement, ordered repeated-line diffs and safe Markdown images',
)
fs.rmSync(temporary, { recursive: true, force: true })
console.log('All notes tests passed.')
