import React from 'react'
import { useState } from 'react'

function Dropdown({
  options,
  selection,
  onSelect
}) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    onSelect(option)
  }

  const renderedOptions = options.map((option) => {
    return (
      <div
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    )
  })

  let content = 'Select...'
  if (selection) {
  content = selection.label
} 


  return (
    <div>
      <div
        onClick={handleClick}
      >
        {content}
      </div>
      {isOpen &&
        <div>
          {renderedOptions}
        </div>
      }
    </div>
  )
}

export default Dropdown
