import { useContext } from 'react'
import NavigationContext from '../context/navigation'

function Link({ to, children }) {
  const handleClick = (event) => {
    event.preventDefault()


  }

  return (
    <a
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

export default Link