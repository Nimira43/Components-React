import React from 'react'
import Accordion from './components/Accordion'

function App() { 
  const planets = [
    {
      label: 'Jupiter',
      content: '5th planet from the Sun'
    },
    {
      label: 'Venus',
      content: '2nd planet from the Sun'
    },
    {
      label: 'Neptune',
      content: '8th planet from the Sun'
    }
  ]


  return (
    <div>
      <Accordion />
    </div>
  )
}

export default App
