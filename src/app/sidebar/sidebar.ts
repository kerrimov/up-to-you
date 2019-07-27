import { Mountable } from "../interfaces/Mountable";

export class Sidebar implements Mountable {
  private sidebar: HTMLElement;
  private closeButton: HTMLElement;

  constructor() {
    this.sidebar = document.getElementById("sidebar"); //has to be empty template of sidebar
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
    /*const statusContainer: HTMLElement = document.querySelector(
      ".status-container"
    );
    statusContainer.addEventListener("click", evt => this.open(evt));*/
    document.body.addEventListener("click", evt => this.open(evt));
  }

  private open(evt) {
    let target = evt.target;

    if (target.closest(".card")) {
      this.showCard();

      /*const cardContainer = this.closeButton.addEventListener("click", evt =>
        this.close(evt)
      );*/
    } else this.close(evt);
  }

  private close(evt) {
    let target = evt.target;

    if (
      (target.closest(".sidebar") && !target.matches(".sidebar__closebtn")) ||
      target.matches(".card__container")
    ) {
      return;
    } else this.sidebar.classList.add("sidebar--hidden");
  }

  private showCard() {
    this.findCard();

    this.sidebar.classList.remove("sidebar--hidden");
  }

  private findCard() {
    // alert("findCard");
  }
}
