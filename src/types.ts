import { Handle } from '@most/types'

export interface Timer {
  setTimer: (f: FrameRequestCallback) => Handle
  clearTimer: (handle: Handle) => void
}
