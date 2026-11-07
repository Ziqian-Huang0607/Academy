import { useEffect, useState } from 'react'
import {
  ASSET_PREFIX,
  readNoteImage,
  safeImageSource,
} from '@/database/note-assets'
export default function NoteImage({
  source,
  alt,
}: {
  source: string
  alt: string
}) {
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')
  useEffect(() => {
    let alive = true
    let objectUrl = ''
    if (source.startsWith(ASSET_PREFIX)) {
      void readNoteImage(source)
        .then((blob) => {
          if (!alive) return
          objectUrl = URL.createObjectURL(blob)
          setUrl(objectUrl)
        })
        .catch((reason) => {
          if (alive) setError((reason as Error).message)
        })
    }
    return () => {
      alive = false
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [source])
  if (!safeImageSource(source))
    return <span className="text-ink-muted">[Unsupported image: {alt}]</span>
  if (error)
    return (
      <span role="status" className="text-ink-muted">
        {alt}: {error}
      </span>
    )
  const src = source.startsWith(ASSET_PREFIX) ? url : source
  return src ? (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      className="my-3 inline-block max-h-[540px] max-w-full rounded-card border border-rule object-contain"
      onError={() => setError('Image could not be loaded')}
    />
  ) : (
    <span role="status">Loading image…</span>
  )
}
