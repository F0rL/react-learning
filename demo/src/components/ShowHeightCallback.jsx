import React, { useState, useCallback } from 'react'

/* 
React 支持一个特殊的、可以附加到任何组件上的 ref 属性。
此属性可以是一个由 React.createRef() 函数创建的对象、或者
一个回调函数、或者一个字符串（遗留 API）。当 ref 属性是一个回调函数时，
此函数会（根据元素的类型）接收底层 DOM 元素或 class 实例作为其参数。
这能够让你直接访问 DOM 元素或组件实例。
*/
/*
useMemo和useCallback都会在组件第一次渲染的时候执行，之后会在其依赖的变量
发生改变时再次执行；并且这两个hooks都返回缓存的值，useMemo返回缓存的变量，
useCallback返回缓存的函数。
*/
function useClientRect() {
  const [rect, setRect] = useState(null)
  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect())
    }
  }, [])
  return [rect, ref]
}

function ShowHeightCallback() {
  const [rect, ref] = useClientRect()
  console.log(rect, ref);
  return (
    <>
      <header>useCallback</header>
      <h1 ref={ref}>h1 element</h1>
      {rect !== null && <p>the header is {Math.round(rect.height)} px tail</p>}
    </>
  )
}

export default ShowHeightCallback
