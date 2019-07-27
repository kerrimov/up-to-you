import { Mountable } from "../interfaces/Mountable";

export class Sidebar implements Mountable {
  private sidebar: HTMLElement;
  private closeButton: HTMLElement;
  constructor(){
    this.sidebar = document.getElementById("sidebar");
    this.closeButton = document.getElementById("sidebar__closebtn");
  }
  mount() {
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", () => this.init());
    } else {
      this.init();
    }
  }
  private init() {
      const statusContainer: HTMLElement = document.querySelector(
      ".status-container"
    );
    statusContainer.addEventListener("click", evt => this.open(evt));
  }
  private open(evt) {
      let target = evt.target;
      //should be card tag to find
      if (target.closest(".module")) {
      this.findCard();
      this.sidebar.classList.remove("sidebar--hidden");

      this.closeButton.addEventListener("click", evt => this.close(evt));
    } else return;
  }
  private close(evt) {
      this.sidebar.classList.add("sidebar--hidden");
  }
  private findCard() {
    // alert("findCard");
  }
}
