import React, { useState } from "react";

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
    <TypePlaceholder, T>(arr: TypePlaceholder[], b: T): TypePlaceholder;
  };

  const superPrint: SuperPrint = (arr, b) => arr[0];

  const e = superPrint([1, 2, 3, 4], "X");
  const f = superPrint([true, false, true], 1);
  const g = superPrint(["a", "b", "c"], true);
  const h = superPrint([1, 2, true, false, "a"], [1, 2, 3]);

  function basicPrint<V>(a: V[]) {
    return a[0];
  }

  const i = basicPrint<number>([1, 2, 3]);
  const j = basicPrint<boolean>([true, false]);

  type Player<E> = {
    name: string;
    extraInfo: E;
  };

  type NicoExtra = {
    favFood: string;
  };
  type NicoPlayer = Player<NicoExtra>;

  const nico: NicoPlayer = {
    name: "nico",
    extraInfo: {
      favFood: "김치",
    },
  };

  const lynn: Player<null> = {
    name: "lynn",
    extraInfo: null,
  };

  type arrNumbers = Array<number>;

  let k: arrNumbers = [1, 2, 3, 4];

  function printAllNumbers(arr: Array<number>) {
    return arr[0];
  }

  const [val, setVal] = useState<number>(5);

  return null;
}

export default App;
