import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  const changeTheme = () => {
    setDark((prevState) => !prevState);
  };

  const themeStyles = {
    width: "100px",
    height: "100px",
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    marginTop: "10px",
    border: "1px solid black",
    textAlign: "center",
  };

  const value = {
    themeStyles,
    changeTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
export default ThemeProvider;
