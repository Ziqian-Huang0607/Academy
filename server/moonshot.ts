import type { ModelCall } from './review'

/**
 * The review agent's model call (Moonshot's OpenAI-compatible API).
 *
 * The completion is STREAMED. A non-streaming request sends no response
 * headers until the whole answer is ready, and Node's fetch (undici) gives up
 * on headers after 300 s: a verifier that reasoned for more than five minutes
 * died with "fetch failed" whatever deadline the caller set. Streaming
 * returns headers at once, and the reasoning and content deltas keep the
 * connection busy until the answer is complete.
 */
export function createMoonshotCall(
  env: Record<string, string | undefined>,
  fetchImpl: typeof fetch = fetch,
): ModelCall {
  return async (messages, signal, { maxTokens, reasoning }) => {
    if (!env.MOONSHOT_API_KEY)
      throw new Error(
        'The indexing agent is not configured on the server. No guide changes were made.',
      )
    const base = env.MOONSHOT_BASE_URL || 'https://api.moonshot.ai/v1'
    const model = env.VITE_LLM_MODEL || 'kimi-k3'
    const response = await fetchImpl(
      `${base.replace(/\/$/, '')}/chat/completions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${env.MOONSHOT_API_KEY}`,
        },
        body: JSON.stringify({
          model,
          messages,
          stream: true,
          response_format: { type: 'json_object' },
          max_tokens: maxTokens,
          // kimi-k3 reasons by default and counts that toward max_tokens: a
          // long guide used to exhaust the budget before writing a word.
          // With thinking disabled it accepts only temperature 0.6.
          ...(!reasoning && /^kimi-k3/.test(model)
            ? { thinking: { type: 'disabled' }, temperature: 0.6 }
            : { temperature: 1 }),
        }),
        signal,
      },
    )
    if (!response.ok || !response.body)
      throw new Error(
        `The review model returned ${response.status}. Retry later; nothing was published.`,
      )
    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ''
    let content = ''
    let finish = ''
    const take = (line: string) => {
      if (!line.startsWith('data:')) return
      const data = line.slice(5).trim()
      if (!data || data === '[DONE]') return
      let chunk: {
        error?: { message?: string }
        choices?: Array<{
          finish_reason?: string | null
          delta?: { content?: string | null }
        }>
      }
      try {
        chunk = JSON.parse(data)
      } catch {
        return
      }
      if (chunk.error)
        throw new Error(
          `The review model failed: ${chunk.error.message ?? 'unknown error'}. Retry later; nothing was published.`,
        )
      const choice = chunk.choices?.[0]
      if (choice?.delta?.content) content += choice.delta.content
      if (choice?.finish_reason) finish = choice.finish_reason
    }
    for (;;) {
      const { done, value } = await reader.read()
      if (done) break
      buffer += decoder.decode(value, { stream: true })
      let end: number
      while ((end = buffer.indexOf('\n')) >= 0) {
        take(buffer.slice(0, end).trim())
        buffer = buffer.slice(end + 1)
      }
    }
    take((buffer + decoder.decode()).trim())
    if (finish === 'length')
      throw new Error(
        'The agent ran out of room before finishing its answer. Retry this packet; if it fails again, split it into smaller notes.',
      )
    if (!finish)
      throw new Error(
        'The review model stopped mid-answer. Retry later; nothing was published.',
      )
    return content
  }
}
