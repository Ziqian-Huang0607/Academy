// Alt text may hold one level of brackets, e.g. "the graph on [0, 2]": a
// caption like that used to end the match early, so the image never rendered
// and never counted as part of a published guide.
export const IMAGE_PATTERN =
  /!\[((?:[^[\]\n]|\[[^[\]\n]*\])*)\]\(([^\s)]+)(?:\s+"[^"\n]*")?\)/g
export const ASSET_PREFIX = 'note-asset:'
export function safeImageSource(source: string): boolean {
  return (
    /^note-asset:[\w-]+$/.test(source) ||
    /^https:\/\//i.test(source) ||
    /^\/(?!\/)[^\\]*$/.test(source)
  )
}
export function imageSources(markdown: string): string[] {
  return [
    ...new Set([...markdown.matchAll(IMAGE_PATTERN)].map((match) => match[2])),
  ]
}
