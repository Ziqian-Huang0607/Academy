export const IMAGE_PATTERN = /!\[([^\]\n]*)\]\(([^\s)]+)(?:\s+"[^"\n]*")?\)/g
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
