import React, { useState } from "react";

function App() {
  abstract class User {
    constructor(
      protected firstName: string,
      protected lastName: string,
      protected nickname: string
    ) {}
    abstract getNickName(): void;
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  class Player extends User {
    getNickName() {
      console.log(this.nickname);
    }
  }

  const nico = new Player("nico", "las", "니꼬");

  console.log(nico.getNickName());

  return null;
}

export default App;
