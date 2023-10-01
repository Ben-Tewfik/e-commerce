import { useContext, createContext, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

function AppContext({ children }) {
  const [name, setName] = useState("default");
  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
}
export default AppContext;
