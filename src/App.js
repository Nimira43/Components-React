import React from 'react'
import Dropdown from './components/Dropdown'
import { useState } from 'react'
import { options } from './constants/colours'

function App() { 
  const [selection, setSelection] = useState(null)

  const handleSelect = (option) => {
    setSelection(option)
  }

  return (
    <Dropdown
      options={options}
      selection={selection}
      onSelect={handleSelect}
    />
  )
}

export default App
