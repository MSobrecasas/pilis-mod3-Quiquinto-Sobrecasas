import { createContext, useState } from "react";

export const LocationContext = createContext({
  tarjeta: [], 
  setTarjeta: () => {}
})

export const LocationProvider = ({ children}) => {
  const [tarjeta, setTarjeta] = useState ([]);
  const value = { tarjeta, setTarjeta };
  
  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>;
} 