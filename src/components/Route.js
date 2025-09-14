import React from 'react'
import { useContext } from 'react'
import NavigationContext from '../context/navigation'

function Route({ path, children }) {
  const { currentPath } = useContext(NavigationContext)
}

export default Route