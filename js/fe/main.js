import { add } from "./add.js";

function start() {
  const root = document.querySelector("#root");
  root.innerHTML = `2 + 5 = ${add(2, 3)}`;
}

start();
