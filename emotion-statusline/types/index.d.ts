export type TurnArc = {
  trail: boolean[]
  tools: number
  errors: number
  errorsInARow: number
}

export type Mood = {
  emotion: string
  intensity?: number
  evidence: string
  timestamp: number
}

declare module 'claude-code' {
  interface PluginState {
    'emotion-statusline': { arc: TurnArc; moods: Mood[] }
  }
}
