import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // 函数调用将 state 添加到组件，并将其值用 0 进行初始化
  // 该函数返回一个包含两个元素的数组
  // 通过解构赋值语法将元素分配给变量 counter 和 setCounter 
  const [ counter, setCounter ] = useState(0)
  //counter 变量被赋予的初始值state 为零
  // 变量 setCounter 被分配给一个函数，该函数将用于修改 state

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log('rendering...', counter)

  return (
    <div>{counter}</div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)