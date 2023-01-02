import React from 'react'
import useNavigation from '../hooks/navigation-hook'


function Route({ path, children }) {
  const { currentPath } = useNavigation()

  if (currentPath === path) {
    return children
  } else {
    return null
  }
}

export default Route