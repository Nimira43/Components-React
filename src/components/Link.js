import React from 'react'
import { useContext } from 'react'
import NavigationContext from '../context/navigation'
// import classNames from 'classnames'

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext)

  // const classes = classNames('text-light bg-main')

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return
    }
     
    event.preventDefault()
    navigate(to)
  }

  return (
    <a
      href={to}
      onClick={handleClick}
      className={classes}
      // classNane='bg-main text-light'
    >
      {children}
    </a>
  )
}

export default Link