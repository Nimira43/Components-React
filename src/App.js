import React from 'react'
import { planets } from './constants/planets'
import Accordion from './components/Accordion'

function App() { 

  return (
    <div>
      <Accordion items={planets}/>
    </div>
  )
}

export default App
