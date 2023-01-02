import React from 'react'

function Route({ path, children }) {
  const { currentPath } = React.useContext(NavigationContext)

  if (currentPath === path) {
    return children
  } else {
    return null
  }
}

export default Route