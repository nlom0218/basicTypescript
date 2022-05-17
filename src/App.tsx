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

  // call Signatures
  type Add = {
    // Overloading
    (a: number, b: number): number;
    (a: number, b: number, c: number): number;
  };

  type Config = {
    path: string;
    state: object;
  };
  type Push = {
    (path: string): void;
    (config: Config): void;
  };
  const push: Push = (config) => {
    if (typeof config === "string") console.log(config);
    else {
      console.log(config.path);
    }
  };

  const add: Add = (a, b, c?: number) => {
    if (typeof b === "string") return a;
    return a + b;
  };

  type SuperPrint = {
    // Polymorphism
    <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
  };

  const superPrint: SuperPrint = (arr) => arr[0];

  const e = superPrint([1, 2, 3, 4]);
  const f = superPrint([true, false, true]);
  const g = superPrint(["a", "b", "c"]);
  const h = superPrint([1, 2, true, false, "a"]);
  console.log(e, f, g, h);

  return null;
}

export default App;
