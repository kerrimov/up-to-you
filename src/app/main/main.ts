import main from "./main.html";
import aside from "../sidebar/sidebar.html";
import { Mountable } from "../interfaces/Mountable";

export class Main implements Mountable {
  mount() {
    const wrapper = body.querySelector(".wrapper");
    wrapper.innerHTML = main + aside;
  }
}
