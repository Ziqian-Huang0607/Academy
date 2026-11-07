import type { CourseLevel } from './types'
export type PacketStatus =
  | 'queued'
  | 'indexing'
  | 'reviewing'
  | 'ready'
  | 'published'
  | 'rejected'
  | 'needs-review'
  | 'failed'
  | 'cancelled'
export interface AgentAssessment {
  decision: 'approve' | 'reject' | 'uncertain'
  rationale: string
  evidence: string
  completeness: number
  penalty: number
  incorrect: boolean
  penalties: Array<{ packetId: string; points: number; evidence: string }>
}
export interface NotePacket extends Record<string, unknown> {
  kind: 'note-packet'
  id: string
  courseId: string
  level?: CourseLevel
  noteId: string
  code: string
  title: string
  submittedBy: string
  submittedAt: string
  fileName: string
  source: string
  mode: 'upload' | 'addition' | 'report'
  quote?: string
  status: PacketStatus
  stage: string
  before: string
  after?: string
  fromRevision: number
  toRevision?: number
  assessment?: AgentAssessment
  verified?: boolean
  model?: string
  error?: string
  attempt?: string
  publishedAt?: string
  // Append-only entries attached to the recipient packet. A unique event key
  // makes retries and repeated publication idempotent.
  ledger: Array<{ id: string; points: number; reason: string; at: string }>
}
