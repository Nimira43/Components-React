import React from 'react'
import { useState } from 'react'
import { AiOutlineCaretLeft, AiOutlineCaretDown } from 'react-icons/ai'

function Accordion({ items }) { 
  const [expandedIndex, setExpandedIndex] = useState(0)

  const handleClick = (nextIndex) => {
    setExpandedIndex(nextIndex)
  }
  
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex

    const icon =
      <span>
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
          className='flex p-3 bg-light border-b items-center cursor-pointer'
        >
          {icon}
          {item.label}
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