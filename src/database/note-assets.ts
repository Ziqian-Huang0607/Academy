import { notesRequest, requestNoteImage } from '@/lib/notes-api'
export {
  ASSET_PREFIX,
  IMAGE_PATTERN,
  imageSources,
  safeImageSource,
} from './note-image-markdown'
/** Persist images in the existing Academy backend, once, outside Markdown. */
export async function saveNoteImage(file: File): Promise<string> {
  if (
    !['image/png', 'image/jpeg', 'image/webp', 'image/gif'].includes(file.type)
  )
    throw new Error('Use PNG, JPEG, WebP or GIF images.')
  if (file.size > 5 * 1024 * 1024)
    throw new Error('Each image must be smaller than 5 MB.')
  const bitmap = await createImageBitmap(file)
  const pixels = bitmap.width * bitmap.height
  bitmap.close()
  if (pixels > 24_000_000)
    throw new Error('Images must be smaller than 24 megapixels.')
  const result = await notesRequest<{ source: string }>('/images', {
    method: 'POST',
    headers: {
      'Content-Type': file.type,
      'X-File-Name': encodeURIComponent(file.name),
    },
    body: file,
  })
  return result.source
}
export const readNoteImage = requestNoteImage
