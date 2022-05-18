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

  const hd: Player = {
    nickname: "hd",
    team: "devloper",
    health: 3,
  };

  interface User {
    name: string;
  }
  interface User {
    lastName: string;
  }
  interface User {
    health: number;
  }
  interface MyUser extends User {}

  const nico: MyUser = {
    name: "nico",
    lastName: "las",
    health: 10,
  };

  return null;
}

export default App;
