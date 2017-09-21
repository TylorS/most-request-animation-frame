import { Stream, Time } from '@most/types'

import { RequestAnimationFrame } from './RequestAnimationFrame'
import { multicast } from '@most/core'

/**
 * Creates a Stream containing the timestamps on each call to requestAnimationFrame.
 * @name requestAnimationFrames(): Stream<Time>
 */
export function requestAnimationFrames(): Stream<Time> {
  return multicast(new RequestAnimationFrame())
}
