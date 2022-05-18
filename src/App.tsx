import React, { useState } from "react";
import { threadId } from "worker_threads";

function App() {
  // 아래의 내용은 interfacefh gkf tn djqtek.
  // type으로 할 수 있는 것이 훨신 많다.
  type Name = string;

  // type 키워드는 interface에 비해 좀 더 활용도가 많다.
  // interface는 오로지 오브젝트의 모양을 타입스크립트에게 설명한다.(아래의 모양으로만 사용가능하다.)
  interface Player {
    nickname: string;
    team: string;
    health: number;
  }

  interface User {
    firstName: string;
    lastName: string;
    sayHi(name: string): string;
    fullName(): string;
  }

  interface Human {
    health: number;
  }

  class Player2 implements User, Human {
    constructor(
      public firstName: string,
      public lastName: string,
      public health: number
    ) {}
    fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name: string): string {
      return `Hello! ${this.fullName()}`;
    }
  }

  const makeUser = (user: User) => {
    return "hi";
  };

  makeUser({
    firstName: "nico",
    lastName: "las",
    fullName: () => "string",
    sayHi: (name) => name,
  });

  return null;
}

export default App;
