import { Test, describe, it } from '@typed/test'
import { runEffects, take, tap } from '@most/core'

import { RequestAnimationFrame } from './RequestAnimationFrame'
import { Stream } from '@most/types'
import { newDefaultScheduler } from '@most/scheduler'

const drain = <A>(stream: Stream<A>) =>
  runEffects(stream, newDefaultScheduler())

export const test: Test = describe(`RequestAnimationFrame`, [
  it(`returns a Stream that emits every requestAnimationFrame`, ({ equal }) => {
    const stream = new RequestAnimationFrame()

    let called = 0

    const expected = 3

    function incrementCallCount() {
      ++called
    }

    return drain(tap(incrementCallCount, take(expected, stream))).then(() =>
      equal(expected, called)
    )
  }),
])
