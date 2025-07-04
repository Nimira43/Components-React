import React from 'react'
import { useState } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
import Panel from './Panel'

function Dropdown({
  options,
  value,
  onChange
}) {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const handleOptionClick = (option) => {
    setIsOpen(false)
    onChange(option)
  }
  const renderedOptions = options.map((option) => {
    return (
      <div
        className='hover:bg-[#eee] rounded cursor-pointer p-1'
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    )
  })
  return (
    <div className='w-48 relative'>
      <Panel
        className='flex justify-between items-center cursor-pointer'
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <AiOutlineCaretDown />
      </Panel>
      {isOpen &&
        <Panel 
          className='absolute top-full'
        >
          {renderedOptions}
        </Panel>
      }
    </div>
  )
}

export default Dropdown
