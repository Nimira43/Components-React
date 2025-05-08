import React from 'react'
import { items } from './constants/planets'
import Accordion from './components/Accordion'

function App() { 

  return (
    <div>
      <Accordion items={items}/>
    </div>
  )
}

export default App
