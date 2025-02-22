import { createContext, useState } from "react";
import Parent from "./components/Parent";

export const ThemeContext = createContext();

function App() {
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
    <ThemeContext.Provider value={value}>
      <Parent />
    </ThemeContext.Provider>
  );
}

export default App;
