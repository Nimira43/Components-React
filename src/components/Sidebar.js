import Link from './Link'

function Sidebar({ className = '' }) {
  const links =[
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
    { label: 'Modal', path: '/modal' },
    { label: 'Table', path: '/table' }
  ]

  const renderedLinks = links.map((link) => {
    return (
      <Link 
        key={link.label}
        to={link.path}
        className='md:mb-3 md:mr-0 mr-4'
        activeClassName='font-bold text-prime'
      >
        {link.label}
      </Link> 
    )
  })

  return (
    <div className={`${className} flex flex-row md:flex-col items-start md:sticky md:top-0 `}>
      {renderedLinks}
    </div>
  )
}

export default Sidebar