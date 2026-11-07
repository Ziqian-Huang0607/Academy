const BASE = '/__academy/notes'
export function notesToken() {
  return (
    window.LaunchpadAuth?.state?.accessToken ||
    sessionStorage.getItem('lp_token') ||
    ''
  )
}
export async function notesRequest<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(`${BASE}${path}`, {
    ...init,
    headers: { ...init?.headers, Authorization: `Bearer ${notesToken()}` },
    signal: init?.signal ?? AbortSignal.timeout(20_000),
  })
  if (!response.headers.get('Content-Type')?.includes('application/json'))
    throw new Error(
      'The shared notes service is unavailable. Your guide has not been changed.',
    )
  const value = await response.json()
  if (!response.ok)
    throw new Error(value.error || `Notes request failed (${response.status}).`)
  return value as T
}
export async function requestNoteImage(source: string): Promise<Blob> {
  const id = source.replace(/^note-asset:/, '')
  const response = await fetch(`${BASE}/images/${encodeURIComponent(id)}`, {
    headers: { Authorization: `Bearer ${notesToken()}` },
    signal: AbortSignal.timeout(20_000),
  })
  if (
    !response.ok ||
    !response.headers.get('Content-Type')?.startsWith('image/')
  )
    throw new Error('This image could not be loaded. Sign in and try again.')
  return await response.blob()
}
