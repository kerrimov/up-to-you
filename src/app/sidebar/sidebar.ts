import { Mountable } from "../interfaces/Mountable";
// import sidebarTemplate from "./sidebar.html";

export class Sidebar implements Mountable {
  private sidebar: HTMLElement;
  private sidebarTemplate: Node;
  private closeButton: HTMLElement;
  private openFlag: boolean;

  constructor() {
    //sidebar has to be empty template of html for cloning everytime it needs to be filled
    this.openFlag = false;
    this.sidebar = document.getElementById("sidebar");
    this.sidebarTemplate = this.sidebar.cloneNode(true);
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
    document.body.addEventListener("click", evt => this.open(evt));
  }

  private open(evt) {
    let target = evt.target;

    if (target.closest(".card")) {
      const cardName = target.closest(".card").querySelector("h4").innerText;
      this.showCard(cardName);
    } else if (!this.openFlag) {
      return;
    } else this.close(evt);
  }

  private close(evt) {
    let target = evt.target;

    if (
      //checking different options to ignore
      (target.closest(".sidebar") && !target.matches(".sidebar__closebtn")) ||
      target.matches(".card__container")
    ) {
      return;
    } else {
      this.sidebar.classList.add("sidebar--hidden");
      this.openFlag = false;
    }
  }

  private showCard(name: string) {
    this.findCard(name);

    this.sidebar.classList.remove("sidebar--hidden");
    this.openFlag = true;
  }

  private findCard(cardName: string) {
    alert(cardName);
  }
}
