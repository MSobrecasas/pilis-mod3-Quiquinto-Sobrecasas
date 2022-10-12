import { createContext, useState } from "react";

export const FiltersContext = createContext({
  filters: {},
  setFilters: () => {}
})

export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    filter: ''
  });
  const value = { filters, setFilters };
  return <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>;
}