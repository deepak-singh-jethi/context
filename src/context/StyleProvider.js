import React, { useState } from "react";
import styleContext from "./styleContext";

const StyleProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    color: "black",
    backgroundColor: "white",
    border: "2px solid black",
  });

  return (
    <styleContext.Provider
      value={{
        theme: theme,
        darkTheme: () =>
          setTheme({
            ...theme,
            color: "white",
            backgroundColor: "black",
            border: "2px solid cyan",
          }),
        lightTheme: () =>
          setTheme({
            ...theme,
            color: "black",
            backgroundColor: "white",
            border: "2px solid black",
          }),
      }}>
      {children}
    </styleContext.Provider>
  );
};

export default StyleProvider;
