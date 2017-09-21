import { Timer } from './types'

const WINDOW_EXISTS: boolean = typeof window !== 'undefined'
const RAF_EXISTS: boolean =
  WINDOW_EXISTS && typeof window.requestAnimationFrame === 'function'

export function createTimer(): Timer {
  return RAF_EXISTS ? createRequestAnimationTimer() : FALLBACK_TIMER
}

function createRequestAnimationTimer() {
  return {
    setTimer: window.requestAnimationFrame,
    clearTimer: window.cancelAnimationFrame,
  }
}

const FALLBACK_TIMER: Timer = {
  setTimer: (callback: FrameRequestCallback) => setTimeout(callback),
  clearTimer: clearTimeout,
}
