import React from 'react'
import { useState } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'

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
      <div
        className='flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-[#fffcfa] w-full'
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <AiOutlineCaretDown />
      </div>
      {isOpen &&
        <div 
          className='absolute top-full border rounded p-3 shadow bg-[#fffcfa] w-full'
        >
          {renderedOptions}
        </div>
      }
    </div>
  )
}

export default Dropdown
