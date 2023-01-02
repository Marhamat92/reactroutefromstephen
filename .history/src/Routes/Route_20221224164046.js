import React from 'react'
import { NavigationContext } from './context/NavigationContext'

function Route({ path, children }) {
  const { currentPath } = React.useContext(NavigationContext)

  if (currentPath === path) {
    return children
  } else {
    return null
  }
}

export default Route