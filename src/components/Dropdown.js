import { useState, useEffect, useRef } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
import Panel from './Panel'

function Dropdown({
  options,
  value,
  onChange
}) {
  const [isOpen, setIsOpen] = useState(false)
  const divEl = useRef()

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handler, true)

    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])

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
    <div 
      ref={divEl}
      className='w-48 relative'
    >
      <Panel
        className='flex justify-between items-center cursor-pointer'
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <AiOutlineCaretDown />
      </Panel>
      <Panel
        className={`
          absolute top-full left-0 right-0 overflow-hidden transition-all duration-300
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        {renderedOptions}
      </Panel>

    </div>
  )
}

export default Dropdown
