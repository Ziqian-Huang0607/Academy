import { useState } from 'react'
import { FileUp, Plus, Loader2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { enqueuePacket } from '@/database/contributions'
import { notesForCourse } from '@/database/notes-tools'
import { readNoteUpload } from '@/lib/note-upload'

export function ContributeNotesButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-control bg-board px-3.5 py-2 text-[13px] text-paper hover:bg-board-deep"
    >
      <Plus size={15} /> Contribute notes
    </button>
  )
}
export default function ContributeNotes({
  onClose,
  onQueued,
  courseId,
  courseCode,
}: {
  onClose: () => void
  onQueued?: () => void
  courseId: string
  courseCode: string
}) {
  const notes = notesForCourse(courseId).filter(
    (note) => note.courseId === courseId,
  )
  const [target, setTarget] = useState(notes[0]?.id ?? '')
  const [title, setTitle] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [dragging, setDragging] = useState(false)
  async function submit() {
    if (busy) return
    setBusy(true)
    setError('')
    try {
      const upload = await readNoteUpload(files)
      const note = notes.find((item) => item.id === target)
      await enqueuePacket({
        courseId,
        note,
        title: note?.title ?? title,
        ...upload,
      })
      onQueued?.()
      onClose()
    } catch (reason) {
      setError((reason as Error).message)
    } finally {
      setBusy(false)
    }
  }
  return (
    <Dialog
      open
      onOpenChange={(open) => {
        if (!open && !busy) onClose()
      }}
    >
      <DialogContent className="max-h-[90dvh] overflow-y-auto border-rule bg-surface sm:max-w-[580px]">
        <DialogHeader>
          <div className="font-mono text-[11px] uppercase tracking-widest text-board">
            {courseCode} · Shared knowledge
          </div>
          <DialogTitle className="font-serif text-2xl">
            Make the guide more complete
          </DialogTitle>
          <DialogDescription>
            Upload a packet of notes and images. The agent checks the material
            and shows exactly what it would change.
          </DialogDescription>
        </DialogHeader>
        <label className="text-sm">
          Guide to improve
          <select
            aria-label="Guide to improve"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="mt-2 w-full rounded-control border border-rule bg-paper p-2.5"
          >
            <option value="">Start a new guide</option>
            {notes.map((note) => (
              <option key={note.id} value={note.id}>
                {note.code} · {note.title}
              </option>
            ))}
          </select>
        </label>
        {!target && (
          <label className="text-sm">
            New guide title
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 w-full rounded-control border border-rule bg-paper p-2.5"
              placeholder="For example, integration by substitution"
            />
          </label>
        )}
        <label
          onDragOver={(e) => {
            e.preventDefault()
            setDragging(true)
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault()
            setDragging(false)
            if (!busy) setFiles(Array.from(e.dataTransfer.files))
          }}
          className={`flex cursor-pointer flex-col items-center rounded-card border-2 border-dashed p-8 text-center ${dragging ? 'border-board bg-board-tint' : 'border-rule bg-paper'}`}
        >
          <FileUp size={28} className="text-board" />
          <span className="mt-3 text-sm font-medium">
            Drop your notes and images here
          </span>
          <span className="mt-2 text-xs text-ink-muted">
            Markdown, text, PDF or images · up to 8 images
          </span>
          <span className="mt-4 rounded-control border border-rule bg-surface px-3 py-2 text-sm">
            Choose files
          </span>
          <input
            disabled={busy}
            aria-label="Upload notes and images"
            type="file"
            multiple
            accept=".md,.txt,.pdf,.png,.jpg,.jpeg,.webp,.gif"
            className="sr-only"
            onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
          />
        </label>
        {files.length > 0 && (
          <ul className="max-h-32 overflow-y-auto rounded-control border border-rule p-3 text-sm">
            {files.map((file, index) => (
              <li
                key={`${file.name}-${index}`}
                className="flex justify-between gap-3 py-1"
              >
                <span className="truncate">{file.name}</span>
                <span className="shrink-0 text-ink-muted">
                  {(file.size / 1024).toFixed(0)} KB
                </span>
              </li>
            ))}
          </ul>
        )}
        <p className="text-xs leading-relaxed text-ink-muted">
          Include images alongside your Markdown file to preserve its image
          links. PDF imports currently read text; attach diagrams separately.
          Uploaded content is stored in Academy’s shared database and sent to
          the model for review. Nothing changes in the guide until review passes
          and you publish it.
        </p>
        {error && (
          <p role="alert" className="text-sm text-red-700">
            {error}
          </p>
        )}
        <button
          disabled={busy || files.length === 0 || (!target && !title.trim())}
          onClick={() => void submit()}
          className="flex items-center justify-center gap-2 rounded-control bg-board px-4 py-2.5 text-sm text-paper disabled:opacity-40"
        >
          {busy ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Reading files…
            </>
          ) : (
            'Send to processing queue'
          )}
        </button>
      </DialogContent>
    </Dialog>
  )
}
