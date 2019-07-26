import { Mountable } from "../interfaces/Mountable";

export class Sidebar implements Mountable {
  mount() {
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", () => this.init());
    } else {
      this.init();
    }
  }
  private init() {
    // alert("init");
    const mainContainer: HTMLElement = document.querySelector(
      ".status-container"
    );
    mainContainer.addEventListener("click", evt => this.open(evt));
  }
  private open(evt) {
    let target = evt.target;
    if (target.closest("h3")) {
      //should be card
      const sidebar = document.getElementById("sidebar");
      const closeButton = document.getElementById("sidebar__closebtn");

      this.findCard();
      sidebar.classList.remove("sidebar--hidden");

      closeButton.addEventListener("click", evt => this.close(evt));
    } else return;
  }
  private close(evt) {
      debugger;
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.add("sidebar--hidden");
  }
  private findCard() {
    alert("findCard");
  }
}
