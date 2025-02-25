import { createContext } from "react";
import Parent from "./components/Parent";
import ThemeProvider from "./context/themeContext";
import useLocalStorage from "./customHooks/useLocalStorage";
import useUpdateLogger from "./customHooks/useUpdateLogger";

export const ThemeContext = createContext();

function App() {
  const [input, setInput] = useLocalStorage("FirstName", ""); // custom hook to persist the value
  useUpdateLogger(input); // custom hook to log the value when it changes
  return (
    <ThemeProvider>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <Parent />
    </ThemeProvider>
  );
}

export default App;
