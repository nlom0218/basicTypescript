import { init, exit } from "myPackage";

function BlockChanin() {
  init({ url: "true" });
  exit(1);
  console.log(exit(3), init({ url: "sdfsdf" }));

  return null;
}

export default BlockChanin;
