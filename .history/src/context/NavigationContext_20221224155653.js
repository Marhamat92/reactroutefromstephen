import { createContext, useState } from "react";

const NavigationContext = createContext();



function NavigationProvider({ children }) {

  const [currentPath, setCurrentPath] = useState(window.location.pathname);



  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationContext;
export { NavigationProvider };
