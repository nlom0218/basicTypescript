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

  type PlayerA = {
    name: string;
  };

  type PlayerAA = PlayerA & {
    lastName: string;
  };

  const player: PlayerAA = {
    name: "nico",
    lastName: "las",
  };

  class UserA implements PlayerA {
    constructor(public name: string) {}
  }

  // interface
  interface PlayerB {
    name: string;
  }

  interface PlayerBB {
    health: number;
  }

  interface PlayerBB extends PlayerB {
    lastName: string;
  }

  const playerB: PlayerBB = {
    name: "nico",
    lastName: "las",
    health: 3,
  };

  class UserB implements PlayerB {
    constructor(public name: string) {}
  }

  return null;
}

export default App;
