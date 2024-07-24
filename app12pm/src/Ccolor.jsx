import { createContext, useState } from "react";

const mybgCcontext = createContext();

const Ccolor = ({ children }) => {
  const [color, setColor] = useState("pink");

  return (
    <mybgCcontext.Provider value={{ color, setColor }}>
      {children}
    </mybgCcontext.Provider>
  );
}

export default Ccolor;
export { mybgCcontext };