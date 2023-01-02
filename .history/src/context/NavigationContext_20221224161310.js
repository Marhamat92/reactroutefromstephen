import { createContext, useEffect, useState } from "react";

//we create a context to pass the current
const NavigationContext = createContext();



function NavigationProvider({ children }) {

  const [currentPath, setCurrentPath] = useState(window.location.pathname); //initial value of currentPath


  //we create below function to update the currentPath when the user clicks on the back button, forward button or when the user types a new url in the browser
  //we use useEffect to add an event listener to the window object, and we return a function to remove the event listener
  //this is to prevent page from reloading when the user clicks on the back button or forward button
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handler)
    return () => window.removeEventListener('popstate', handler)
  }, [])



  //we create below function to update the currentPath when the user clicks on a link
  const navigate = (path) => {
    window.history.pushState("", "", path)
    setCurrentPath(path)
  }

  //we create a context provider to pass the currentPath and navigate function to the children components
  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationContext;
export { NavigationProvider };
