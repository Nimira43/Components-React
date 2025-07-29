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
    <div className='flex'>
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelect}
      />
      {/* <Dropdown
        options={options}
        value={selection}
        onChange={handleSelect}
      /> */}
    </div>
  )
}

export default App
