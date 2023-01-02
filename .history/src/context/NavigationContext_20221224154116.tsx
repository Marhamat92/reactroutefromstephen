import { createContext } from "react";

const NavigationContext = createContext({});

const props = {
  children: {},
};

function NavigationProvider({ children }) {
  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationContext;
export { NavigationProvider };
