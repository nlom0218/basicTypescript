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

  const greet = (person: string, data: string) => {
    console.log(`Hello${person}, today is ${data}`);
  };
  // greet("Brendan");
  // Expected 2 arguments, but got 1.

  return null;
};

export default TheBasics;
