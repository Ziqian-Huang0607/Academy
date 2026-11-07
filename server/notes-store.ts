import fs from 'node:fs'
import path from 'node:path'
import { randomUUID } from 'node:crypto'
import type { NotePacket } from '../src/database/contribution-types'
import type { UnitNote } from '../src/database/types'
export interface Contributor {
  id: string
  name: string
  avatarUrl?: string
  initials: string
}
export interface StoredImage {
  id: string
  owner: string
  mime: string
  name: string
  createdAt: string
}
export interface NotesState {
  version: 1
  notes: UnitNote[]
  packets: NotePacket[]
  contributors: Contributor[]
  images: StoredImage[]
}
/** One writer in the existing Academy runtime. Atomic rename + fsync protect
 * committed revisions. The process lock prevents two runtimes losing writes. */
export class NotesStore {
  private closed = false
  private state: NotesState
  private readonly file: string
  private readonly lockFile: string
  readonly directory: string
  constructor(directory: string) {
    this.directory = directory
    fs.mkdirSync(directory, { recursive: true, mode: 0o700 })
    fs.mkdirSync(path.join(directory, 'images'), {
      recursive: true,
      mode: 0o700,
    })
    this.file = path.join(directory, 'notes.json')
    this.lockFile = path.join(directory, 'notes.lock')
    if (fs.existsSync(this.lockFile)) {
      const pid = Number(fs.readFileSync(this.lockFile, 'utf8'))
      if (!Number.isInteger(pid) || pid <= 0)
        throw new Error(
          'Invalid notes process lock; inspect it before starting.',
        )
      try {
        process.kill(pid, 0)
        throw new Error('The notes database already has a running writer.')
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code !== 'ESRCH') throw error
        fs.unlinkSync(this.lockFile)
      }
    }
    fs.writeFileSync(this.lockFile, String(process.pid), {
      flag: 'wx',
      mode: 0o600,
    })
    try {
      this.state = fs.existsSync(this.file)
        ? JSON.parse(fs.readFileSync(this.file, 'utf8'))
        : { version: 1, notes: [], packets: [], contributors: [], images: [] }
      if (
        this.state.version !== 1 ||
        !Array.isArray(this.state.packets) ||
        !Array.isArray(this.state.notes)
      )
        throw new Error('Notes data is incompatible; refusing to overwrite it.')
    } catch (error) {
      this.close()
      throw error
    }
  }
  read(): NotesState {
    return structuredClone(this.state)
  }
  write(mutate: (draft: NotesState) => void): void {
    if (this.closed) throw new Error('The notes store has been closed.')
    const draft = this.read()
    mutate(draft)
    const temporary = `${this.file}.${randomUUID()}.tmp`
    const fd = fs.openSync(temporary, 'wx', 0o600)
    try {
      fs.writeFileSync(fd, JSON.stringify(draft))
      fs.fsyncSync(fd)
    } finally {
      fs.closeSync(fd)
    }
    try {
      fs.renameSync(temporary, this.file)
    } catch (error) {
      fs.rmSync(temporary, { force: true })
      throw error
    }
    this.state = draft
  }
  close() {
    if (this.closed) return
    this.closed = true
    fs.rmSync(this.lockFile, { force: true })
  }
}
