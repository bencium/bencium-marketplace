import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

import type { Mood, TurnArc } from '../types'

// Starting guesses, to be tuned against ~/.claude/cache/emotion-history.jsonl.
const ERRORS_IN_A_ROW_FOR_LOOP = 3
// Same 10-minute expiry the status line applies to the cache.
const MOOD_SHELF_LIFE_MS = 600_000
// classify-emotion.sh runs async after the turn and calls Haiku through
// `claude --print`, so its verdict lands seconds later. A few one-shot reads
// catch it without a standing poll.
const MOOD_CHECKS_AFTER_TURN_MS = [10_000, 30_000, 60_000]
const MOODS_KEPT = 10
const TRAIL_KEPT = 60

// Theme keys, not raw colours: each theme (light, dark, ANSI, daltonized)
// defines its own value for them, so the band reads on every background.
const INK = {
  text: 'text',
  quiet: 'inactive',
  steady: 'success',
  engaged: 'suggestion',
  wary: 'warning',
  alarm: 'error',
}

const MOOD_FAMILY: Record<string, string> = {
  calm: INK.steady,
  satisfied: INK.steady,
  confident: INK.steady,
  relieved: INK.steady,
  focused: INK.engaged,
  curious: INK.engaged,
  determined: INK.engaged,
  enthusiastic: INK.engaged,
  amused: INK.engaged,
  contemplative: INK.engaged,
  cautious: INK.wary,
  uncertain: INK.wary,
  concerned: INK.wary,
  desperate: INK.alarm,
}

const SPARK_STEPS = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█']

const QUIET_ARC: TurnArc = { trail: [], tools: 0, errors: 0, errorsInARow: 0 }

const arc = atom({ plugin: 'emotion-statusline', key: 'arc' } as const, QUIET_ARC)
const moods = atom({ plugin: 'emotion-statusline', key: 'moods' } as const, [])

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await refreshMoods($)
    return next(e)
  })

  on('turn.start', async ($, e, next) => {
    await update($, arc, () => QUIET_ARC)
    return next(e)
  })

  on('tool.call', async ($, e, next) => {
    const ran = await next(e)
    await recordOutcome($, ran.isError === true)
    return ran
  })

  on('turn.complete', async ($, e, next) => {
    const answered = await next(e)
    scheduleMoodChecks($)
    return answered
  })

  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    if (e.props.hasSurvey) return next(e)

    const segments = e.props.isWorking
      ? liveSegments(await read($, arc), e.props.bodyColumns)
      : await moodSegments($)
    if (segments === null) return next(e)

    const { Box, Text } = $.ui.resolve(e)
    return (
      <Box>
        {segments.map((segment, i) => (
          <Text key={`s${i}`} color={segment.color} bold={segment.isBold} wrap="truncate-end">
            {segment.text}
          </Text>
        ))}
      </Box>
    )
  })
}

type Segment = { text: string; color: string; isBold?: boolean }

async function recordOutcome($: EngineInterface, hasFailed: boolean) {
  const after = await update($, arc, current => ({
    trail: [...current.trail, !hasFailed].slice(-TRAIL_KEPT),
    tools: current.tools + 1,
    errors: current.errors + (hasFailed ? 1 : 0),
    errorsInARow: hasFailed ? current.errorsInARow + 1 : 0,
  }))

  const justEnteredLoop = hasFailed && after.errorsInARow === ERRORS_IN_A_ROW_FOR_LOOP
  if (justEnteredLoop) {
    $.ui.toast(`${ERRORS_IN_A_ROW_FOR_LOOP} failed tool calls in a row: check the next "fix" before trusting it`)
  }
}

// One glyph per tool call, oldest first, so the failure arc is visible as
// it forms. Only the newest calls that fit beside the counts are drawn.
function liveSegments(current: TurnArc, columns: number): Segment[] | null {
  if (current.tools === 0) return null

  const room = Math.max(8, columns - 48)
  const shown = current.trail.slice(-room)
  const isLooping = current.errorsInARow >= ERRORS_IN_A_ROW_FOR_LOOP

  const segments: Segment[] = [{ text: ' live ', color: INK.quiet }]
  for (const [i, ok] of shown.entries()) {
    const isLast = i === shown.length - 1
    segments.push({ text: ok ? '●' : '✗', color: ok ? INK.quiet : INK.alarm, isBold: !ok && isLast })
  }
  segments.push({ text: `  ${plural(current.tools, 'tool')}`, color: INK.text })

  if (isLooping) {
    segments.push({ text: ` · ${current.errorsInARow} in a row`, color: INK.alarm, isBold: true })
    segments.push({ text: '  ▲ watch for workarounds', color: INK.alarm })
  } else if (current.errors > 0) {
    segments.push({ text: ` · ${plural(current.errors, 'error')}`, color: INK.wary })
  }
  return segments
}

async function moodSegments($: EngineInterface): Promise<Segment[] | null> {
  const history = await read($, moods)
  const latest = history.at(-1)
  if (latest === undefined) return null

  const ageMs = (await $.clock.now()) - latest.timestamp * 1000
  if (ageMs > MOOD_SHELF_LIFE_MS) return null

  const segments: Segment[] = [{ text: ' mood ', color: INK.quiet }]
  for (const verdict of history) {
    segments.push({ text: sparkGlyph(verdict.intensity), color: moodInk(verdict.emotion) })
  }

  const strength = latest.intensity === undefined ? '' : ` ${latest.intensity}`
  if (latest.emotion === 'desperate') {
    segments.push({ text: `  DESPERATE${strength}`, color: INK.alarm, isBold: true })
    segments.push({ text: ' · verify output quality', color: INK.alarm })
  } else {
    segments.push({ text: `  ${latest.emotion}${strength}`, color: moodInk(latest.emotion), isBold: true })
  }
  if (latest.evidence !== '') {
    segments.push({ text: ` · ${latest.evidence}`, color: INK.quiet })
  }
  return segments
}

function sparkGlyph(intensity: number | undefined): string {
  if (intensity === undefined) return SPARK_STEPS[0] ?? '▁'
  const step = Math.round((intensity / 100) * (SPARK_STEPS.length - 1))
  return SPARK_STEPS[step] ?? '▁'
}

function moodInk(emotion: string): string {
  return MOOD_FAMILY[emotion] ?? INK.quiet
}

function plural(count: number, noun: string): string {
  return `${count} ${noun}${count === 1 ? '' : 's'}`
}

function scheduleMoodChecks($: EngineInterface) {
  for (const delay of MOOD_CHECKS_AFTER_TURN_MS) {
    $.clock.after(delay, () => refreshMoods($))
  }
}

async function refreshMoods($: EngineInterface) {
  const cached = await readMoodCache($)
  if (cached === null) return

  await update($, moods, history => {
    const newest = history.at(-1)
    const isNew = newest === undefined || cached.timestamp > newest.timestamp
    return isNew ? [...history, cached].slice(-MOODS_KEPT) : history
  })
}

// Same per-session file classify-emotion.sh writes, so parallel sessions
// never show each other's verdict.
async function readMoodCache($: EngineInterface): Promise<Mood | null> {
  const home = await $.env.get('HOME')
  const sessionId = (await $.session.id()).replace(/[^a-zA-Z0-9-]/g, '')
  if (home === undefined || sessionId === '') return null

  try {
    const text = await $.fs.read(`${home}/.claude/cache/claude-emotion-${sessionId}.json`)
    return parseMood(text)
  } catch {
    return null
  }
}

function parseMood(text: string): Mood | null {
  const raw = JSON.parse(text)
  if (typeof raw?.emotion !== 'string' || typeof raw?.timestamp !== 'number') return null

  return {
    emotion: raw.emotion,
    intensity: typeof raw.intensity === 'number' ? raw.intensity : undefined,
    evidence: typeof raw.evidence === 'string' ? raw.evidence : '',
    timestamp: raw.timestamp,
  }
}
