import React from 'react'
import Dropdown from '../components/Dropdown'
import { useState } from 'react'
import { options } from './coloursInfo/colours'

function DropdownPage() { 
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
    </div>
  )
}

export default DropdownPage
