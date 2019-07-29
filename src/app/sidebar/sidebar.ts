import { Mountable } from "../interfaces/Mountable";
// import sidebarTemplate from "./sidebar.html";
import moduleTpl from "../card/module.html";

export class Sidebar implements Mountable {
  private sidebar: HTMLElement;
  private sidebarTemplateLiveNode: Node;
  private moduleTemplateString: string;
  private closeButton: HTMLElement;
  private isOpen: boolean;

  constructor() {
    //sidebar has to be empty template of html for cloning everytime it needs to be filled
    this.isOpen = false;
    this.moduleTemplateString = moduleTpl;
    this.sidebar = document.getElementById("sidebar");
    this.sidebarTemplateLiveNode = this.sidebar.cloneNode(true);
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
    } else if (!this.isOpen) {
      return;
    } else this.close(evt);
  }

  private close(evt) {
    let target = evt.target;

    if (
      //checking different options to ignore closing sidebar
      (target.closest(".sidebar") && !target.matches(".sidebar__closebtn")) ||
      target.matches(".card__container")
    ) {
      return;
    } else {
      this.sidebar.classList.add("sidebar--hidden");
      this.isOpen = false;
    }
  }

  private showCard(name: string) {
    this.sidebarTemplateLiveNode.
    this.findCard(name);

    this.sidebar.classList.remove("sidebar--hidden");
    this.isOpen = true;
  }

  private findCard(cardName: string) {
    alert(cardName);
  }
}
