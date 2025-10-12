import useNavigation from '../hooks/use-navigation'
import classNames from 'classnames'

function Link({ to, children }) {
  const { navigate } = useNavigation()

  const classes = classNames('uppercase font-medium')

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
    >
      {children}
    </a>
  )
}

export default Link