import path from 'node:path'
import fs from 'node:fs'
import type { Plugin, ViteDevServer, PreviewServer } from 'vite'
import { NotesService } from './notes-service'
import type { Identity } from './notes-service'

/** Uses Academy's existing Launchpad process and its preserved data directory. */
export function sharedNotesBackend(env: Record<string, string>): Plugin {
  let service: NotesService | undefined
  const attach = (server: ViteDevServer | PreviewServer) => {
    const root = process.cwd()
    const seed = JSON.parse(
      fs.readFileSync(
        path.join(root, 'src/database/synonance.database.json'),
        'utf8',
      ),
    )
    const userinfo =
      env.LAUNCHPAD_USERINFO_URL ||
      'https://academy.standardcas.org/dashboard-api/oauth/userinfo'
    if (!userinfo.startsWith('https://'))
      throw new Error('Launchpad userinfo must use HTTPS.')
    service = new NotesService({
      root,
      dataDirectory: path.resolve(
        root,
        env.ACADEMY_NOTES_DATA_DIR || '.launchpad-data/notes',
      ),
      institution: seed.institution.id,
      model: env.VITE_LLM_MODEL || 'kimi-k3',
      authenticate: async (bearer) => {
        const response = await fetch(userinfo, {
          headers: { Authorization: bearer },
          signal: AbortSignal.timeout(12_000),
          redirect: 'error',
        })
        if (!response.ok) return null
        return (await response.json()) as Identity
      },
      modelCall: async (messages, signal, maxTokens) => {
        if (!env.MOONSHOT_API_KEY)
          throw new Error(
            'The indexing agent is not configured on the server. No guide changes were made.',
          )
        const base = env.MOONSHOT_BASE_URL || 'https://api.moonshot.ai/v1'
        const response = await fetch(
          `${base.replace(/\/$/, '')}/chat/completions`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${env.MOONSHOT_API_KEY}`,
            },
            body: JSON.stringify({
              model: env.VITE_LLM_MODEL || 'kimi-k3',
              messages,
              response_format: { type: 'json_object' },
              temperature: 1,
              max_tokens: maxTokens,
            }),
            signal,
          },
        )
        if (!response.ok)
          throw new Error(
            `The review model returned ${response.status}. Retry later; nothing was published.`,
          )
        const result = (await response.json()) as {
          choices?: Array<{
            finish_reason?: string
            message?: { content?: string }
          }>
        }
        if (result.choices?.[0]?.finish_reason === 'length')
          throw new Error(
            'The agent response was incomplete. Split this packet into smaller notes.',
          )
        return String(result.choices?.[0]?.message?.content ?? '')
      },
    })
    // Never allow Vite's file serving to expose durable notes or image originals.
    server.middlewares.use((req, res, next) => {
      let url: string
      try {
        url = decodeURIComponent((req.url ?? '').split('?')[0])
      } catch {
        res.statusCode = 400
        res.end()
        return
      }
      if (url.includes('.launchpad-data') || url.includes('/server/')) {
        res.statusCode = 404
        res.end()
        return
      }
      next()
    })
    server.middlewares.use('/__academy/notes', (req, res) => {
      void service!.handle(req, res)
    })
    server.httpServer?.once('close', () => {
      service?.close()
      service = undefined
    })
  }
  return {
    name: 'academy-shared-notes',
    configureServer: attach,
    configurePreviewServer: attach,
  }
}
