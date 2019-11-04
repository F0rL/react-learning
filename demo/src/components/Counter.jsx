import React, { useState, useEffect } from 'react'

function Counter() {
  const [count, setcount] = useState(0)
  useEffect(() => {
    console.log('effect');
    document.title = `you clicked ${count} times`
  })
  return (
    <div className="Counter">
      <header>State Hook</header>
      <p>You Click {count} Times</p>
      <button onClick={() => setcount(count + 1)}>Click me</button>
    </div>
  )
}

export default Counter
