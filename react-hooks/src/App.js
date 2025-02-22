import { createContext } from "react";
import Parent from "./components/Parent";
import ThemeProvider from "./context/themeContext";

export const ThemeContext = createContext();

function App() {
  return (
    <ThemeProvider>
      <Parent />
    </ThemeProvider>
  );
}

export default App;
