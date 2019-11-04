import React, { useRef} from 'react'

function FocusButton() {
  const inputEl = useRef(null)
  function  onButtonFocusInput() {
    inputEl.current.focus()
  }
  return (
    <>
     <header>useRef</header>
     <input type="text" ref={inputEl} />
     <button onClick={onButtonFocusInput}>Focus the input</button>
    </>
  )
}

export default FocusButton