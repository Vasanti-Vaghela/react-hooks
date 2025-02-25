import React from "react";
import { useTheme } from "../context/themeContext";
const Parent = () => {
  const value = useTheme();
  // console.log("Context Value", value);
  return (
    <>
      <div>Parent</div>
      <button onClick={value.changeTheme}>Change the theme</button>
      <div style={value.themeStyles}>Hello</div>
    </>
  );
};

export default Parent;
