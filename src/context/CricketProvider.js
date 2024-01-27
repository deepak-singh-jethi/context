import React, { useState } from "react";
import CricketContext from "./CricketContext";

const CricketProvider = (props) => {
  const [cricketer, setCricketer] = useState({
    name: "Rohit Sharma",
    age: 35,
    country: "India",
    role: "Batsman",
    retire: false,
  });

  return (
    <CricketContext.Provider
      value={{
        cricketer: cricketer,
        setCricketer: setCricketer,
      }}>
      {props.children}
    </CricketContext.Provider>
  );
};

export default CricketProvider;
