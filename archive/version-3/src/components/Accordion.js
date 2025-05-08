import React from 'react'
import { useState } from 'react'
import { AiOutlineCaretLeft, AiOutlineCaretDown } from 'react-icons/ai'

function Accordion({ items }) { 
  const [expandedIndex, setExpandedIndex] = useState(-1)

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1
      } else {
        return nextIndex
      }
    })
  }
  
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex

    const icon =
      <span
        className='text-xl'
      >
        {isExpanded ?
          <AiOutlineCaretDown />
          :
          <AiOutlineCaretLeft />
        }
      </span>

    return (
      <div key={item.id}>
        <div
          onClick={() => handleClick(index)}
          className='flex justify-between p-3 bg-light border-b items-center cursor-pointer'
        >
          {item.label}
          {icon}
        </div>
        {
          isExpanded
          &&
          <div
            className='border-b p-5'
          >
            {item.content}
          </div>
        }
      </div>
    )
  })
  return (
    <div
      className='border-x border-t rounded'
    >
      {renderedItems}
    </div>
  )
}

export default Accordion