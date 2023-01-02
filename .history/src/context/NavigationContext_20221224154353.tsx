import { createContext } from "react";

const NavigationContext = createContext({});

const Props = {
  children: any,
};

function NavigationProvider({ children }: typeof Props) {
  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationContext;
export { NavigationProvider };
