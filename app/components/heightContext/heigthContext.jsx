import { createContext, useContext, useState } from "react";
export const Context = createContext();

export const useHeaderHeigth = () => {
  return useContext(Context);
};

export default function HeightContext({ children }) {
  const [heigthHeader, setHeigthHeader] = useState(71);
  return (
    <Context.Provider
      value={{ heigth: heigthHeader, setHeigth: setHeigthHeader }}
    >
      {children}
    </Context.Provider>
  );
}
