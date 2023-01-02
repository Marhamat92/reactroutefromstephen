import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();



function NavigationProvider({ children }) {

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handler)
    return () => window.removeEventListener('popstate', handler)
  }, [])

  const navigate = (path) => {
    window.history.pushState("", "", path)
    setCurrentPath(path)
  }


  return (
    <NavigationContext.Provider value={currentPath,}>
      {currentPath}
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationContext;
export { NavigationProvider };
