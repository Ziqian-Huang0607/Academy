// guide-edits.ts — how a review changes a guide without rewriting it.
//
// The indexing agent used to return the COMPLETE revised guide. Its output
// therefore grew with the document, and a long upload could not fit: an
// 18-page review PDF made kimi-k3 spend its whole 14,000-token budget on
// reasoning, return nothing, and hit the 180 s abort. Now the agent returns
// section-level edits and this module applies them deterministically, so a
// model's output grows with the change rather than with the guide. Untouched
// sections are carried over byte for byte.
//
// A source is also reviewed in parts (splitSource) so a long upload becomes
// several bounded calls instead of one unbounded one.

export interface GuideEdit {
  action: 'insert' | 'replace' | 'remove'
  /** replace/remove: the exact heading of an existing section. */
  section?: string
  /** insert: the heading to insert after; '' inserts first; omitted appends. */
  after?: string
  /** insert/replace: one or more complete sections, each starting `## …`. */
  markdown?: string
}

export class GuideEditError extends Error {}

const SECTION = /^#{2,4}\s+/
const FENCE = /^\s*```/

interface Split {
  /** Everything before the first section: `# code title` and the summary. */
  head: string
  /** Raw section text, heading line first. */
  sections: Array<{ heading: string; raw: string }>
}

function split(markdown: string): Split {
  const head: string[] = []
  const sections: Array<{ heading: string; lines: string[] }> = []
  let fenced = false
  for (const line of markdown.split('\n')) {
    if (FENCE.test(line)) fenced = !fenced
    if (!fenced && SECTION.test(line))
      sections.push({ heading: line.replace(SECTION, '').trim(), lines: [line] })
    else (sections.length ? sections[sections.length - 1].lines : head).push(line)
  }
  return {
    head: head.join('\n'),
    sections: sections.map(({ heading, lines }) => ({ heading, raw: lines.join('\n') })),
  }
}

/** Headings and a short lead for every section: what an agent edits against. */
export function outlineGuide(markdown: string) {
  return split(markdown).sections.map(({ heading, raw }) => ({
    heading,
    lead: raw
      .split('\n')
      .slice(1)
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 160),
  }))
}

/** Full text of the named sections (for a verifier or a focused proposal). */
export function sectionsByHeading(markdown: string, headings: string[]) {
  const wanted = new Set(headings.map(normal))
  return split(markdown)
    .sections.filter((section) => wanted.has(normal(section.heading)))
    .map((section) => section.raw.trim())
}

/** Models often quote a heading with its markers ("### 2.1 Limits"). */
function normal(heading: string) {
  return heading.replace(/^\s*#+\s*/, '').replace(/\s+/g, ' ').trim().toLowerCase()
}

function block(markdown: string | undefined) {
  const text = (markdown ?? '').trim()
  if (!SECTION.test(text))
    throw new GuideEditError('Each inserted or replacing block must start with a ## section heading.')
  // A stray `# …` line would be read as the note's title; demote it to prose.
  let fenced = false
  return text
    .split('\n')
    .map((line) => {
      if (FENCE.test(line)) fenced = !fenced
      return !fenced && /^#\s/.test(line) ? line.replace(/^#\s+/, '') : line
    })
    .join('\n')
}

/**
 * Apply edits in order. A brand-new guide (empty base) is headed with
 * `# <code> <title>` and the summary. An unknown replace/remove target is an error, never a
 * guess: the caller treats the part as not reviewed.
 */
export function applyGuideEdits(
  base: string,
  change: { code: string; title: string; summary?: string; edits: GuideEdit[] },
): string {
  const parsed = base.trim()
    ? split(base)
    : {
        head: `# ${change.code} ${change.title.trim()}\n${change.summary?.trim() ? `\n${change.summary.trim()}\n` : ''}`,
        sections: [] as Split['sections'],
      }
  const sections = [...parsed.sections]
  const find = (heading: string | undefined) => {
    const index = sections.findIndex((section) => normal(section.heading) === normal(heading ?? ''))
    if (index < 0) throw new GuideEditError(`The guide has no section "${heading}".`)
    return index
  }
  const parts = (markdown: string | undefined) =>
    split(block(markdown)).sections.map((section) => ({ ...section, raw: section.raw.trimEnd() }))
  for (const edit of change.edits) {
    if (edit.action === 'remove') sections.splice(find(edit.section), 1)
    else if (edit.action === 'replace') sections.splice(find(edit.section), 1, ...parts(edit.markdown))
    else {
      // An unknown anchor appends: inserting cannot lose anything, and a
      // part's anchor may name a section an earlier part failed to add.
      const anchor = edit.after === undefined || edit.after === '' ? -1 : sections.findIndex(
        (section) => normal(section.heading) === normal(edit.after!),
      )
      const at = edit.after === '' ? 0 : anchor < 0 ? sections.length : anchor + 1
      sections.splice(at, 0, ...parts(edit.markdown))
    }
  }
  // Untouched text is kept exactly; only the joins between parts are normalised.
  const pieces = [parsed.head.trimEnd(), ...sections.map((section) => section.raw.trimEnd())].filter(Boolean)
  return pieces.join('\n\n')
}

/**
 * Cut a source into parts of at most `max` characters, on paragraph (and page)
 * boundaries where possible, then sentences, then hard. Display math and code
 * fences are never split across parts when a boundary outside them exists.
 */
export function splitSource(source: string, max: number): string[] {
  const text = source.trim()
  if (text.length <= max) return text ? [text] : []
  const paragraphs: string[] = []
  let buffer: string[] = []
  let open = false
  for (const line of text.split('\n')) {
    if (FENCE.test(line)) open = !open
    if ((line.match(/\$\$/g) ?? []).length % 2) open = !open
    if (!open && !line.trim()) {
      if (buffer.length) paragraphs.push(buffer.join('\n'))
      buffer = []
    } else buffer.push(line)
  }
  if (buffer.length) paragraphs.push(buffer.join('\n'))
  const pieces = paragraphs.flatMap((paragraph) => {
    if (paragraph.length <= max) return [paragraph]
    const found = paragraph.match(/[^.!?]*[.!?]+(?:\s+|$)|[^.!?]+$/g) ?? []
    // Splitting must never lose text; anything odd falls back to hard cuts.
    const sentences = found.join('') === paragraph ? found : [paragraph]
    const out: string[] = []
    let current = ''
    for (const sentence of sentences) {
      if (current && current.length + sentence.length > max) {
        out.push(current.trim())
        current = ''
      }
      current += sentence
      while (current.length > max) {
        out.push(current.slice(0, max))
        current = current.slice(max)
      }
    }
    if (current.trim()) out.push(current.trim())
    return out
  })
  const parts: string[] = []
  let current = ''
  for (const piece of pieces) {
    if (current && current.length + 2 + piece.length > max) {
      parts.push(current)
      current = piece
    } else current = current ? `${current}\n\n${piece}` : piece
  }
  if (current) parts.push(current)
  return parts
}
