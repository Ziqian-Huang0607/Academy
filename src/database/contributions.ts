import { cacheSharedNotes, clearSharedNotes, getCurrentUser } from './client'
import { getCourseLevel } from './notes-tools'
import { notesRequest } from '@/lib/notes-api'
import type { NotePacket } from './contribution-types'
import type { UnitNote } from './types'
export const ACTIVE_STATUSES = ['queued', 'indexing', 'reviewing']
export interface Contributor {
  id: string
  name: string
  avatarUrl?: string
  initials: string
}
interface SharedSnapshot {
  workerError?: string
  notes: UnitNote[]
  packets: NotePacket[]
  contributors: Contributor[]
}
const snapshots = new Map<string, SharedSnapshot>()
let lastError = ''
let syncing = false
let generation = 0
function sessionKey(courseId: string) {
  return `${courseId}::${getCourseLevel(courseId) ?? ''}`
}
export function contributionActorId() {
  const user = getCurrentUser()
  return user?.launchpadSub
    ? `launchpad-${user.launchpadSub}`
    : (user?.id ?? '')
}
export function packetsForCourse(courseId: string) {
  return snapshots.get(sessionKey(courseId))?.packets ?? []
}
export function contributorsForCourse(courseId: string) {
  return snapshots.get(sessionKey(courseId))?.contributors ?? []
}
export function contributionSyncError() {
  return lastError
}
export function packetScore(packet: NotePacket) {
  return packet.ledger.reduce((sum, entry) => sum + entry.points, 0)
}
export function clearContributionCache() {
  generation++
  snapshots.clear()
  lastError = ''
  clearSharedNotes()
}
export async function syncContributions(courseId: string) {
  if (syncing) return
  syncing = true
  const current = generation,
    actor = contributionActorId(),
    key = sessionKey(courseId)
  try {
    const result = await notesRequest<SharedSnapshot>(
      `/state?courseId=${encodeURIComponent(courseId)}&level=${encodeURIComponent(getCourseLevel(courseId) ?? '')}`,
    )
    if (
      current !== generation ||
      actor !== contributionActorId() ||
      key !== sessionKey(courseId)
    )
      return
    lastError = result.workerError ?? ''
    snapshots.set(key, result)
    cacheSharedNotes(key, result.notes)
  } catch (error) {
    if (current === generation && actor === contributionActorId()) {
      lastError = (error as Error).message
      // Trigger subscribers without persisting a fake local state.
      cacheSharedNotes(key, snapshots.get(key)?.notes ?? [])
    }
  } finally {
    syncing = false
  }
}
export async function enqueuePacket(input: {
  courseId: string
  note?: UnitNote
  title: string
  source: string
  fileName: string
  mode?: NotePacket['mode']
  quote?: string
}): Promise<string> {
  const result = await notesRequest<{ id: string }>('/packets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      courseId: input.courseId,
      level: input.note?.level ?? getCourseLevel(input.courseId),
      noteId: input.note?.id,
      title: input.title,
      source: input.source,
      fileName: input.fileName,
      mode: input.mode ?? 'upload',
      quote: input.quote,
    }),
  })
  await syncContributions(input.courseId)
  return result.id
}
async function action(id: string, operation: string) {
  await notesRequest(`/packets/${encodeURIComponent(id)}/${operation}`, {
    method: 'POST',
  })
  const snapshot = [...snapshots.values()]
    .flatMap((item) => item.packets)
    .find((packet) => packet.id === id)
  if (snapshot) await syncContributions(snapshot.courseId)
}
export function cancelPacket(id: string) {
  return action(id, 'cancel')
}
export function retryPacket(id: string) {
  return action(id, 'retry')
}
export function publishPacket(id: string) {
  return action(id, 'publish')
}
