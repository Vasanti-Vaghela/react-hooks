import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
const Parent = () => {
  const value = useContext(ThemeContext);
  console.log("Cotext Value", value);
  return (
    <>
      <div>Parent</div>
      <button onClick={value.changeTheme}>Change the theme</button>
      <div style={value.themeStyles}>Hello</div>
    </>
  );
};

export default Parent;
