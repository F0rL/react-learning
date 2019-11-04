import React, { useState } from 'react'

function Counter() {
  const [count, setcount] = useState(0)
  return (
    <div className="Counter">
      <p>You Click {count} Times</p>
      <button onClick={() => setcount(count + 1)}>Click me</button>
    </div>
  )
}

export default Counter
