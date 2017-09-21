import { Disposable, Handle, Scheduler, Sink, Stream, Time } from '@most/types'

import { Timer } from './types'
import { createTimer } from './createTimer'
import { currentTime } from '@most/scheduler'

const { setTimer, clearTimer }: Timer = createTimer()

export class RequestAnimationFrame implements Stream<Time> {
  public run(sink: Sink<Time>, scheduler: Scheduler): Disposable {
    let handle: Handle

    function event() {
      const time: Time = currentTime(scheduler)

      sink.event(time, time)

      handle = setTimer(event)
    }

    handle = setTimer(event)

    const dispose = () => clearTimer(handle)

    return { dispose }
  }
}
