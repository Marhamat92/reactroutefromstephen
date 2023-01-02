import { createContext, useState } from "react";

const NavigationContext = createContext();



function NavigationProvider({ children }) {

  const [currentPath, setCurrentPath] = useState(window.location.pathname);



  return (
    <NavigationContext.Provider value={{}}>
      {pathName}
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationContext;
export { NavigationProvider };
