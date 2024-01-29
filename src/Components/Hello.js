import React, { useContext, useEffect, useState } from "react";
import StyleContext from "../context/styleContext";

export const Hello = (props) => {
  const { theme, darkTheme, lightTheme } = useContext(StyleContext);
  const [isDark, setIsDark] = useState(false);

  //false = light
  //true = dark

  useEffect(() => {
    let currentTheme = localStorage.getItem("isDark");
    if (currentTheme === "true") {
      setIsDark(true);
      darkTheme();
    } else if (currentTheme === "false") {
      setIsDark(false);
      lightTheme();
    }
  }, []);

  const switchTheme = () => {
    if (isDark) {
      lightTheme();
    } else {
      darkTheme();
    }
    let currentTheme = !isDark;
    localStorage.setItem("isDark", currentTheme);
    setIsDark(!isDark);
  };

  return (
    <div>
      <div>
        <h1>Hello</h1>
        <p>
          dbas safkj jsajfnjdasf fsadjfdasf bsdfb dbb asdjfjkdsaf sdfbadsbfkasf
          dfbd jsabdf jabsdfbds jbsdb sbsbjbd sj fsjbfs a abfsbfs fbsjf s jsbfbs
          fsjfbsf qk sbfksf a sfks fsfbksf fwbfbskfksnf sf fsbf cnalsf asfa f
        </p>

        <ul>
          <li>Dummy</li>
          <li>Dummy</li>
          <li>Dummy</li>
          <li>Dummy</li>
        </ul>
      </div>
      <button onClick={switchTheme}>Switch Theme</button>
    </div>
  );
};
export default Hello;
