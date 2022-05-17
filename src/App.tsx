import React from "react";

function App() {
  let a: unknown;

  if (typeof a === "number") {
    let b = a + 1;
  }
  if (typeof a === "string") {
    let b = a.toUpperCase();
  }

  const hello = () => {
    console.log("hello");
    return "hello";
  };
  hello().toUpperCase();

  const bye = (name: string | number) => {
    if (typeof name === "string") {
      console.log(typeof name);
    } else if (typeof name === "number") {
      console.log(typeof name);
    } else {
      console.log(typeof name);
    }
  };

  bye(3);

  return null;
}

export default App;
