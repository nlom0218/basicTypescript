import React from "react";

function App() {
  type Age = number;
  type Name = string;

  type Player = {
    readonly name: Name;
    age?: Age;
  };

  const player: [string, number, boolean] = ["nico", 12, true];
  player[0] = "1";
  console.log(player);

  let a = [1, "D", true, undefined];

  const playerMaker = (name: string, age?: number): Player => {
    return {
      name,
      age,
    };
  };

  const nico = playerMaker("nico", 12);

  nico.age = 24;

  console.log(nico.age);
  return <div className="App"></div>;
}

export default App;
