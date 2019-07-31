import header from "header/header.html";
import { Mountable } from "interfaces/Mountable";
import wrapper from "wrapper/wrapper.html";
export class App implements Mountable {
  mount() {
    const body = document.getElementById("body");
    body.innerHTML = header + wrapper;
  }
}
