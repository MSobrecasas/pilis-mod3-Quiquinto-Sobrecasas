import { createContext, useState } from "react";

export const LocationContext = createContext({
  locations: [], 
  setTarjeta: () => {}
})

export const LocationProvider = ({ children}) => {
  const [locations, setTarjeta] = useState ([]);
  const value = { locations, setTarjeta };
  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>;
} 