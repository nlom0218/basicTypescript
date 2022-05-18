import React, { useState } from "react";
import { threadId } from "worker_threads";

function App() {
  type Words = {
    [key: string]: string;
  };

  class Dict {
    private words: Words;
    constructor() {
      this.words = {};
    }
    add(word: Word) {
      if (this.words[word.term] === undefined) {
        this.words[word.term] = word.def;
      }
    }
    def(term: string) {
      return this.words[term];
    }
    static hello() {
      return "hello";
    }
  }

  class Word {
    constructor(public readonly term: string, public readonly def: string) {}
  }

  const kimchi = new Word("kimchi", "한국의 음식");

  const dic = new Dict();
  dic.add(kimchi);
  dic.def("kimchi");

  console.log(dic.def("kimchi"));

  console.log(Dict.hello());

  return null;
}

export default App;
