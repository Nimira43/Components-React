function Link({ to, children }) {
  const handleClick = () => {
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