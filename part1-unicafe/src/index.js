import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const DisplayTitle = ({text}) => (
  <h1>{text}</h1>
)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const DisplayStatistics = ({text, val}) => (
  <div>{text} {val ? val : 0} { text === 'positive' ? '%' : '' }</div>
)

const Statistics = ({good, neutral, bad}) => {
  let all = good + neutral + bad
  
  if (all) {
    return (
      <>
        <DisplayTitle text='statistics' />
        <DisplayStatistics text='good' val={good} />
        <DisplayStatistics text='neutral' val={neutral} />
        <DisplayStatistics text='bad' val={bad} />
        <DisplayStatistics text='all' val={all} />
        <DisplayStatistics text='average' val={(good-bad)/all} />
        <DisplayStatistics text='positive' val={(good/all)*100} />
      </>
    )
  } else {
    return (
      <>
        <DisplayTitle text='statistics' />
        <DisplayStatistics text='No feedback given' val=' ' />
      </>
    )
  }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <DisplayTitle text='give feedback' />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)