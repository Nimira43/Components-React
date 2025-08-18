function Link({ to, children }) {

  return (
    <a
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

export default Link