import main from "./main/main.html";
import header from "./header/header.html";
import aside from "./sidebar/sidebar.html";
import { Mountable } from "./interfaces/Mountable";

export class App implements Mountable {
  mount() {
    const body = document.getElementById("body");
    body.innerHTML = `${header + main}`;
    const mn = body.lastElementChild;
    mn.insertAdjacentHTML("beforeend", aside);
  }
}
