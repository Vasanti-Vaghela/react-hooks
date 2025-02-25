import { createContext } from "react";
import Parent from "./components/Parent";
import ThemeProvider from "./context/themeContext";
import useLocalStorage from "./customHooks/useLocalStorage";

export const ThemeContext = createContext();

function App() {
  const [input, setInput] = useLocalStorage("FirstName", "");
  return (
    <ThemeProvider>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <Parent />
    </ThemeProvider>
  );
}

export default App;
