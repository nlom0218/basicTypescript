const TheBasics = () => {
  const message = "hello!";
  message.toLowerCase();
  // message();
  // This expressiont is not callable.
  // Type "String" has no call signatures.

  const user = {
    name: "Daniel",
    age: 26,
  };
  // user.location
  // JS: returns undefined
  // TS: Property 'location' does not exist on type `{name: string; age: number}`

  const flipCoin = () => {
    return Math.random() < 0.5;
  };

  const value = Math.random() < 0.5 ? "a" : "b";
  if (value !== "a") {
    console.log("b");
  }
  //   else if (value === "b") {
  //     console.log("b");
  //   }
  // This condition will always return 'false' since ths types "a" and "b" hoave no overlap.

  const greet = (person: string, data: Date): string => {
    return `Hello${person}, today is ${data.toDateString()}`;
  };
  // greet("Brendan");
  // Expected 2 arguments, but got 1.

  // greet("Maddison", Date()); Argument of type 'string' is not assignable to parameter of type 'Date'.

  greet("Maddison", new Date());

  let msg = "hello there!"; // let msg: string => TypeScript can even just infer the types for us even if we omit them.

  return null;
};

export default TheBasics;
