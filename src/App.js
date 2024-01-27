import React, { useContext } from "react";
import "./App.css";
import Hello from "./Components/Hello";
import StyleContext from "./context/styleContext";

function App() {
  const { theme, darkTheme, lightTheme } = useContext(StyleContext);

  return (
    <div
      style={{
        color: theme.color,
        backgroundColor: theme.backgroundColor,
        border: theme.border,
      }}>
      <Hello></Hello>
    </div>
  );
}

export default App;
