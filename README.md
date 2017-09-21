# most-request-animation-frame -- 0.0.0

Create streams that emits every requestAnimationFrame

## Get it
```sh
yarn add most-request-animation-frame
# or
npm install --save most-request-animation-frame
```

## API Documentation

All functions are curried!

#### requestAnimationFrames(): Stream\<Time\>

<p>

Creates a Stream containing the timestamps on each call to requestAnimationFrame.

</p>


<details>
<summary>See the code</summary>

```typescript

export function requestAnimationFrames(): Stream<Time> {
  return multicast(new RequestAnimationFrame())
}

```

</details>
<hr />
