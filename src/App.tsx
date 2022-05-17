import React from "react";

function App() {
  type Age = number;
  type Name = string;

  type Player = {
    name: Name;
    age?: Age;
  };

  const playerMaker = (name: string, age?: number): Player => {
    return {
      name,
      age,
    };
  };

  const nico = playerMaker("nico", 12);

  console.log(nico.age);
  return <div className="App"></div>;
}

export default App;
