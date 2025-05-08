import React from 'react'
import Dropdown from './components/Dropdown'
import { useState } from 'react'
import { options } from './constants/colours'

function App() { 
  const [selection, setSelection] = useState(null)


  return (
      <Dropdown options={options}/>
  )
}

export default App
