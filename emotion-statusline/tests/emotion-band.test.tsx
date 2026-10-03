import { describe, expect, mock, test } from 'claude-code/testing'
import type { Engine } from 'claude-code/testing'
import type { On } from 'claude-code'

const PLUGIN = 'emotion-statusline'
const SURFACES = ['terminal', 'desktop'] as const
const SESSION = 'sess-1'
const START = { cwd: '/home/test', surface: 'terminal', isInteractive: true } as const

function bandProps(isWorking: boolean) {
  return {
    hasSurvey: false,
    isWorking,
    maxRows: 4,
    bodyColumns: 100,
    scroll: { bodyRows: 4, offset: 0 },
    view: {},
  } as never
}

function verdict(emotion: string, intensity: number, timestamp: number, evidence = 'because') {
  return JSON.stringify({ emotion, intensity, evidence, timestamp })
}

// Stands in for the engine beneath the plugin. Every hook is registered
// before the test's first call on `$`, as the test kit requires.
function fakeEngine(on: On) {
  const world = { cache: null as string | null, toasts: [] as string[], toolOutcomes: [] as boolean[] }

  mock.env(on, { HOME: '/home/test' })
  on('session.id', () => ({ value: SESSION }))
  on('session.start', ($, e) => ({ cwd: e.cwd }))
  on('turn.start', ($, e) => ({ turnId: e.turnId }))
  on('turn.complete', ($, e) => ({ text: e.answer }))
  on('ui.toast', ($, e) => {
    world.toasts.push(e.text)
    return { value: undefined }
  })
  on('fs.read', ($, e) => {
    if (world.cache === null || !e.path.endsWith(`claude-emotion-${SESSION}.json`)) throw new Error('ENOENT')
    return { value: world.cache }
  })
  on('tool.call', () => ({ result: 'x', isError: world.toolOutcomes.shift() === true }) as never)
  on('ui.render', { component: 'AbovePrompt' }, ($, e) => {
    const { Text } = $.ui.resolve(e)
    return <Text>engine's own band</Text>
  })

  return world
}

async function runTools($: Engine, world: ReturnType<typeof fakeEngine>, outcomes: boolean[]) {
  for (const isError of outcomes) {
    world.toolOutcomes.push(isError)
    await $.tool.call({ tool: 'Bash', command: 'npm test', description: 'run' } as never)
  }
}

function mountBand($: Engine, surface: (typeof SURFACES)[number], isWorking: boolean) {
  return $.ui.mount({ plugin: PLUGIN, surface, component: 'AbovePrompt', props: bandProps(isWorking) })
}

describe('live trail', () => {
  test('three failures in a row raise one toast, red crosses and the loop warning', async ($, on) => {
    const world = fakeEngine(on)
    await $.turn.start({ text: 'fix it', turnId: 't1' })

    await runTools($, world, [false, true, true, true, true])

    expect(world.toasts.length).toBe(1)
    expect(world.toasts[0]).toContain('3 failed tool calls in a row')

    for (const surface of SURFACES) {
      const band = await mountBand($, surface, true)
      const crosses = await band.findAll({ type: 'Text', text: '✗' })
      expect(crosses.length).toBe(4)
      expect(crosses[0]?.props.color).toBe('error')
      expect(await band.find({ type: 'Text', text: ' · 4 in a row' })).toBeDefined()
      expect(await band.find({ type: 'Text', text: /watch for workarounds/ })).toBeDefined()
    }
  })

  test('a success breaks the streak, so scattered errors stay amber with no toast', async ($, on) => {
    const world = fakeEngine(on)
    await $.turn.start({ text: 'go', turnId: 't1' })

    await runTools($, world, [true, true, false, true, true])

    expect(world.toasts.length).toBe(0)
    const band = await mountBand($, 'terminal', true)
    const errors = await band.find({ type: 'Text', text: ' · 4 errors' })
    expect(errors?.props.color).toBe('warning')
    expect(await band.find({ type: 'Text', text: /in a row/ })).toBeUndefined()
  })
})

describe('mood sparkline', () => {
  test('a fresh desperate verdict shows a tall red bar and the warning', async ($, on) => {
    const clock = mock.clock(on)
    const world = fakeEngine(on)
    world.cache = verdict('desperate', 80, Math.floor(clock.now() / 1000), 'hardcoded value after 3 failures')
    await $.session.start(START)

    const band = await mountBand($, 'terminal', false)
    const bar = await band.find({ type: 'Text', text: '▇' })
    expect(bar?.props.color).toBe('error')
    expect(await band.find({ type: 'Text', text: '  DESPERATE 80' })).toBeDefined()
    expect(await band.find({ type: 'Text', text: /hardcoded value/ })).toBeDefined()
  })

  test('each new verdict after a turn adds one bar', async ($, on) => {
    const clock = mock.clock(on)
    const world = fakeEngine(on)
    const startedAt = Math.floor(clock.now() / 1000)
    world.cache = verdict('calm', 20, startedAt)
    await $.session.start(START)

    world.cache = verdict('cautious', 100, startedAt + 5)
    await $.turn.complete({ answer: 'done', durationMs: 1000, isAborted: false, turnId: 't1', reason: 'answer' } as never)
    await clock.advance(60_000)

    const band = await mountBand($, 'terminal', false)
    expect((await band.find({ type: 'Text', text: '▂' }))?.props.color).toBe('success')
    expect((await band.find({ type: 'Text', text: '█' }))?.props.color).toBe('warning')
    expect(await band.find({ type: 'Text', text: '  cautious 100' })).toBeDefined()
  })

  test('a verdict older than ten minutes leaves the engine its own band', async ($, on) => {
    const clock = mock.clock(on)
    const world = fakeEngine(on)
    world.cache = verdict('calm', 65, Math.floor(clock.now() / 1000) - 660, 'old')
    await $.session.start(START)

    const band = await mountBand($, 'terminal', false)
    expect(await band.find({ type: 'Text', text: /calm/ })).toBeUndefined()
    expect(await band.find({ type: 'Text', text: "engine's own band" })).toBeDefined()
  })
})
