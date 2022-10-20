import { useCallback, useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(count => count + 1), [setCount])
  const decrement = useCallback(() => setCount(count => count - 1), [setCount])
  return (
    <div>
      <p>Count is: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

    </div>
  )
}