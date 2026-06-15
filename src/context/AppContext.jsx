import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext(null);

export const AppContextProvider = (props) => {
  const value = { doctors };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
