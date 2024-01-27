import React, { useContext } from "react";
import CricketContext from "../context/CricketContext";

const Hello = () => {
  const obj = useContext(CricketContext);
  const { cricketer, setCricketer } = obj;
  const { name, age, country, role, retire } = cricketer;

  //   console.log(name, age, country, role, retire);

  return (
    <div>
      <h1>Hello {cricketer.name}</h1>
      {/* {show each value inside crickter inside a p tag} */}
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <p>Role: {role}</p>
      <p>Retire: {retire ? "Yes" : "No"}</p>

      {/* create a button to update age by 1 */}
      <button onClick={() => setCricketer({ ...cricketer, age: age + 1 })}>
        Update age
      </button>

      <hr />
    </div>
  );
};

export default Hello;
