import React, { useState } from "react";
import { threadId } from "worker_threads";

function App() {
  // 아래의 내용은 interfacefh gkf tn djqtek.
  // type으로 할 수 있는 것이 훨신 많다.
  type Name = string;

  // type 키워드는 interface에 비해 좀 더 활용도가 많다.
  // interface는 오로지 오브젝트의 모양을 타입스크립트에게 설명한다.(아래의 모양으로만 사용가능하다.)
  interface Player2222 {
    nickname: string;
    team: string;
    health: number;
  }

  interface SStorage<T> {
    [key: string]: T;
  }

  class LocalStorage<T> {
    private storage: SStorage<T> = {};
    set(key: string, value: T) {
      this.storage[key] = value;
    }
    remove(key: string) {
      delete this.storage[key];
    }
    get(key: string): T {
      return this.storage[key];
    }
    clear() {
      this.storage = {};
    }
  }

  const stringsStorage = new LocalStorage<string>();
  const booleansStorage = new LocalStorage<boolean>();
  booleansStorage.get("33");
  booleansStorage.set("sdfsd", true);
  stringsStorage.set("sdfsd", "dsfs");
  console.log(stringsStorage, booleansStorage);

  return null;
}

export default App;
