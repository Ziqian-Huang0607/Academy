import { useState } from 'react'
import {
  ChevronDown,
  FileText,
  Trophy,
  Loader2,
  Square,
  RotateCcw,
  ShieldCheck,
} from 'lucide-react'
import {
  ACTIVE_STATUSES,
  contributionActorId,
  contributorsForCourse,
  cancelPacket,
  packetScore,
  publishPacket,
  retryPacket,
} from '@/database/contributions'
import { diffMarkdown } from '@/database/notes-markdown'
import type { NotePacket } from '@/database/contribution-types'
import MarkdownText from './MarkdownText'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function PacketDetail({ packet }: { packet: NotePacket }) {
  const [view, setView] = useState<'diff' | 'compare'>('diff')
  const changes =
    packet.after === undefined ? [] : diffMarkdown(packet.before, packet.after)
  return (
    <div className="space-y-5 border-t border-rule px-5 py-5">
      {packet.assessment && (
        <section className="rounded-control border border-board/20 bg-board-tint/40 p-4 text-sm">
          <div className="flex items-center gap-2 font-medium">
            <ShieldCheck size={16} /> Agent assessment{' '}
            {packet.status === 'ready' && (
              <span className="ml-auto font-mono">
                +{packet.assessment.completeness} proposed
              </span>
            )}
          </div>
          <p className="mt-2 leading-relaxed">{packet.assessment.rationale}</p>
          <p className="mt-2 text-xs leading-relaxed text-ink-muted">
            {packet.assessment.evidence}
          </p>
          {packet.assessment.penalties.map((penalty) => (
            <p key={penalty.packetId} className="mt-2 text-xs text-red-700">
              Proposed correction penalty: −{penalty.points}. {penalty.evidence}
            </p>
          ))}
          <p className="mt-3 font-mono text-[10px] text-ink-muted">
            Reviewed by {packet.model} · revision {packet.fromRevision}
            {packet.toRevision ? ` → ${packet.toRevision}` : ''}
          </p>
        </section>
      )}
      {packet.quote && (
        <blockquote className="border-l-2 border-board pl-3 text-sm text-ink-muted">
          {packet.quote}
        </blockquote>
      )}
      {packet.after !== undefined && (
        <section>
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <h4 className="text-sm font-medium">
              {packet.status === 'published'
                ? 'Published guide changes'
                : 'Proposed guide changes'}
            </h4>
            <div className="flex rounded-control border border-rule p-0.5">
              {(['diff', 'compare'] as const).map((mode) => (
                <button
                  key={mode}
                  aria-pressed={view === mode}
                  onClick={() => setView(mode)}
                  className={`rounded-control px-3 py-1 text-xs ${view === mode ? 'bg-board text-paper' : ''}`}
                >
                  {mode === 'diff' ? 'Changes' : 'Before / After'}
                </button>
              ))}
            </div>
          </div>
          {view === 'diff' ? (
            <div className="max-h-[420px] overflow-auto rounded-control border border-rule font-mono text-xs">
              {changes.length ? (
                changes.map((line, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 whitespace-pre-wrap break-words px-3 py-1.5 ${line.kind === 'added' ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}
                  >
                    <span aria-label={line.kind}>
                      {line.kind === 'added' ? '+' : '−'}
                    </span>
                    <span className="min-w-0">{line.text || ' '}</span>
                  </div>
                ))
              ) : (
                <p className="p-4 text-ink-muted">No guide changes.</p>
              )}
            </div>
          ) : (
            <div className="grid gap-4 lg:grid-cols-2">
              {[
                { title: 'Original guide', text: packet.before },
                {
                  title:
                    packet.status === 'published'
                      ? 'After publication'
                      : 'Proposed guide',
                  text: packet.after,
                },
              ].map((side) => (
                <div
                  key={side.title}
                  className="min-w-0 rounded-control border border-rule"
                >
                  <div className="border-b border-rule bg-paper px-4 py-2 text-xs font-medium">
                    {side.title}
                  </div>
                  <div className="max-h-[480px] overflow-auto p-4">
                    {side.text ? (
                      <MarkdownText>{side.text}</MarkdownText>
                    ) : (
                      <p className="text-xs text-ink-muted">
                        No guide existed yet.
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
      {packet.source && (
        <details className="text-sm">
          <summary className="cursor-pointer text-ink-muted">
            Original packet · {packet.fileName}
          </summary>
          <div className="mt-3 max-h-72 overflow-auto rounded-control border border-rule p-4">
            <MarkdownText>{packet.source}</MarkdownText>
          </div>
        </details>
      )}
      {packet.ledger.length > 0 && (
        <div>
          <h4 className="mb-2 text-sm font-medium">
            Contribution score history
          </h4>
          {packet.ledger.map((entry) => (
            <div
              key={entry.id}
              className="flex items-start gap-3 border-t border-rule py-2 text-xs"
            >
              <span
                className={`min-w-10 font-mono ${entry.points < 0 ? 'text-red-700' : 'text-board'}`}
              >
                {entry.points > 0 ? '+' : ''}
                {entry.points}
              </span>
              <div>
                <p>{entry.reason}</p>
                <time className="mt-1 block text-ink-muted">
                  {new Date(entry.at).toLocaleString()}
                </time>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
function QueueCard({ packet }: { packet: NotePacket }) {
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const mine = packet.submittedBy === contributionActorId()
  const active = ACTIVE_STATUSES.includes(packet.status)
  async function action(operation: () => void | Promise<void>) {
    setBusy(true)
    setError('')
    try {
      await operation()
    } catch (reason) {
      setError((reason as Error).message)
    } finally {
      setBusy(false)
    }
  }
  return (
    <article className="overflow-hidden rounded-card border border-rule bg-surface">
      <details>
        <summary className="flex cursor-pointer list-none items-center gap-4 p-5">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-control ${active ? 'bg-board-tint text-board' : 'bg-paper text-ink-muted'}`}
          >
            {active ? (
              <Loader2
                size={18}
                className={packet.status === 'queued' ? '' : 'animate-spin'}
              />
            ) : (
              <FileText size={18} />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium">
              {packet.fileName}
            </div>
            <div className="mt-1 text-xs text-ink-muted">
              {packet.title} · {new Date(packet.submittedAt).toLocaleString()}
            </div>
            <div className="mt-2 text-xs text-board" role="status">
              {packet.stage}
            </div>
          </div>
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] ${packet.status === 'published' || packet.status === 'ready' ? 'bg-board-tint text-board' : 'bg-paper text-ink-muted'}`}
          >
            {packet.status.replaceAll('-', ' ')}
          </span>
          <ChevronDown size={15} className="shrink-0 text-ink-muted" />
        </summary>
        <PacketDetail packet={packet} />
      </details>
      {packet.error && (
        <p role="alert" className="px-5 pb-3 text-xs text-red-700">
          {packet.error}
        </p>
      )}
      {mine &&
        (active ||
          packet.status === 'ready' ||
          ['failed', 'needs-review'].includes(packet.status)) && (
          <div className="flex flex-wrap items-center justify-end gap-2 border-t border-rule bg-paper/50 px-5 py-3">
            {packet.status === 'ready' && (
              <button
                disabled={busy}
                onClick={() => void action(() => publishPacket(packet.id))}
                className="rounded-control bg-board px-3 py-2 text-xs text-paper disabled:opacity-40"
              >
                {busy
                  ? 'Publishing…'
                  : `Publish · +${packet.assessment?.completeness ?? 0} points`}
              </button>
            )}
            {(active || packet.status === 'ready') && (
              <button
                disabled={busy}
                onClick={() => void action(() => cancelPacket(packet.id))}
                className="flex items-center gap-1.5 rounded-control border border-rule px-3 py-2 text-xs"
              >
                <Square size={12} />
                {packet.status === 'ready' ? 'Discard' : 'Stop indexing'}
              </button>
            )}
            {['failed', 'needs-review'].includes(packet.status) && (
              <button
                disabled={busy}
                onClick={() => void action(() => retryPacket(packet.id))}
                className="flex items-center gap-1.5 rounded-control border border-rule px-3 py-2 text-xs"
              >
                <RotateCcw size={13} /> Retry agent review
              </button>
            )}
          </div>
        )}
      {error && (
        <p role="alert" className="px-5 py-3 text-xs text-red-700">
          {error}
        </p>
      )}
    </article>
  )
}
export function ProcessingQueue({ packets }: { packets: NotePacket[] }) {
  const [mine, setMine] = useState(true)
  const visible = packets.filter(
    (packet) => !mine || packet.submittedBy === contributionActorId(),
  )
  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 p-5 md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="font-serif text-3xl">Processing queue</h2>
          <p className="mt-2 text-sm text-ink-muted">
            From your notes to a better guide. Follow every step.
          </p>
        </div>
        <label className="flex items-center gap-2 text-xs">
          <input
            type="checkbox"
            checked={mine}
            onChange={(e) => setMine(e.target.checked)}
          />{' '}
          My submissions
        </label>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          {
            label: 'In progress',
            count: visible.filter((packet) =>
              ACTIVE_STATUSES.includes(packet.status),
            ).length,
          },
          {
            label: 'Ready to publish',
            count: visible.filter((packet) => packet.status === 'ready').length,
          },
          {
            label: 'Published',
            count: visible.filter((packet) => packet.status === 'published')
              .length,
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-card border border-rule bg-surface p-4"
          >
            <p className="font-serif text-2xl">{stat.count}</p>
            <p className="mt-1 text-xs text-ink-muted">{stat.label}</p>
          </div>
        ))}
      </div>
      <p className="text-xs leading-relaxed text-ink-muted">
        The agent continues working on the server when you leave this page. You
        can stop active packets or retry interrupted reviews. Each upload is
        reviewed before publication.
      </p>
      <div className="space-y-3">
        {visible.map((packet) => (
          <QueueCard key={packet.id} packet={packet} />
        ))}
        {!visible.length && (
          <div className="rounded-card border border-dashed border-rule p-12 text-center">
            <FileText className="mx-auto text-ink-muted" size={24} />
            <h3 className="mt-4 font-serif text-xl">
              Your next contribution starts here
            </h3>
            <p className="mt-2 text-sm text-ink-muted">
              Upload notes or suggest an addition from a highlighted passage.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
export function ContributionsLeaderboard({
  packets,
}: {
  packets: NotePacket[]
}) {
  const users = contributorsForCourse(packets[0]?.courseId ?? '')
  const ids = [
    ...new Set(
      packets
        .filter(
          (packet) => packet.status === 'published' || packet.ledger.length > 0,
        )
        .map((packet) => packet.submittedBy),
    ),
  ]
  const leaders = ids
    .map((id) => {
      const contributions = packets.filter(
        (packet) =>
          packet.submittedBy === id &&
          (packet.status === 'published' || packet.ledger.length > 0),
      )
      return {
        id,
        user: users.find((user) => user.id === id),
        contributions,
        score: contributions.reduce(
          (sum, packet) => sum + packetScore(packet),
          0,
        ),
      }
    })
    .sort(
      (a, b) =>
        b.score - a.score ||
        (a.user?.name ?? a.id).localeCompare(b.user?.name ?? b.id),
    )
  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 p-5 md:p-8">
      <div className="flex items-center gap-3 text-board">
        <Trophy size={25} />
        <span className="font-mono text-xs uppercase tracking-widest">
          Built by the class
        </span>
      </div>
      <div>
        <h2 className="font-serif text-3xl">Contributions</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Recognition for making the guide more complete. Expand a contributor
          to see their changes, agent assessments and score history.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          'Useful new coverage earns 0–100 points per published packet.',
          'Duplicates earn no points. Uncertain material stays unpublished.',
          'Confirmed errors can deduct points, with an agent’s recorded evidence.',
        ].map((text) => (
          <p
            key={text}
            className="rounded-card border border-rule bg-surface p-4 text-xs leading-relaxed text-ink-muted"
          >
            {text}
          </p>
        ))}
      </div>
      <div className="space-y-3">
        {leaders.map((leader, index) => (
          <details
            key={leader.id}
            className="group overflow-hidden rounded-card border border-rule bg-surface"
          >
            <summary className="flex cursor-pointer list-none items-center gap-4 p-5">
              <span className="w-7 font-mono text-sm text-ink-muted">
                {index > 0 && leaders[index - 1].score === leader.score
                  ? leaders.findIndex((row) => row.score === leader.score) + 1
                  : index + 1}
              </span>
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={
                    leader.user?.avatarUrl?.startsWith('https://')
                      ? leader.user.avatarUrl
                      : undefined
                  }
                  alt=""
                  referrerPolicy="no-referrer"
                />
                <AvatarFallback className="bg-board-tint text-sm text-board">
                  {leader.user?.initials ?? '?'}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">
                  {leader.user?.name || 'Former contributor'}
                  {leader.id === contributionActorId() ? ' · You' : ''}
                </p>
                <p className="mt-1 text-xs text-ink-muted">
                  {
                    leader.contributions.filter(
                      (packet) => packet.status === 'published',
                    ).length
                  }{' '}
                  published packets
                </p>
              </div>
              <div className="text-right">
                <p className="font-serif text-2xl text-board">{leader.score}</p>
                <p className="text-[10px] uppercase tracking-wider text-ink-muted">
                  points
                </p>
              </div>
              <ChevronDown
                className="text-ink-muted group-open:rotate-180"
                size={16}
              />
            </summary>
            <div className="space-y-3 border-t border-rule bg-paper/50 p-4">
              {leader.contributions.map((packet) => (
                <QueueCard key={packet.id} packet={packet} />
              ))}
            </div>
          </details>
        ))}
        {!leaders.length && (
          <div className="rounded-card border border-dashed border-rule p-12 text-center">
            <Trophy className="mx-auto text-board" size={28} />
            <h3 className="mt-4 font-serif text-xl">
              Be the first to improve this guide
            </h3>
            <p className="mt-2 text-sm text-ink-muted">
              Reviewed contributions appear here after publication.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
