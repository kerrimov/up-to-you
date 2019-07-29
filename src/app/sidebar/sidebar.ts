import { Mountable } from "../interfaces/Mountable";
import { getData } from "../../ts/data";
import sidebarTpl from "./sidebar.html";
import moduleTpl from "../card/module.html";

//don't forget includ utils directory from TS

let URL: string = "http://localhost:8080/";
let path: string = "cards2.json";
export function getHtmlNodeFromString(template: string) {
  let element: HTMLElement = document.createElement("div");
  element.innerHTML = template;
  const chunkOfHtmlElements = element.firstElementChild.cloneNode(true);
  return chunkOfHtmlElements;
}

export class Sidebar implements Mountable {
  private sidebar: HTMLElement;
  private sidebarTplNode: Node;
  private moduleContTpl: Node;
  private moduleSingleTpl: Node;
  private closeButton: HTMLElement;
  private isOpen: boolean;

  constructor() {
    //sidebar has to be empty template of html for cloning everytime it needs to be filled
    this.isOpen = false;
    this.sidebarTplNode = getHtmlNodeFromString(sidebarTpl);
    this.moduleContTpl = getHtmlNodeFromString(moduleTpl);
    this.moduleSingleTpl = this.moduleContTpl.firstChild;
    this.sidebar = document.getElementById("sidebar");
    // this.sidebarTplNode = this.sidebar.cloneNode(true);
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
    // console.dir(target);
    debugger;
    if (target.closest(".card")) {
      // debugger;
      const idCard = target.id;
      const cardName = target.closest(".card").querySelector("h4").innerText; //will be deleted
      this.showCard(cardName); //will be idCard - param
    } else if (!this.isOpen) {
      return;
    } else this.close(evt);
  }

  private close(evt) {
    // debugger;

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

  private showCard(name: string, id?: number) {
    this.findCard(name);

    /*let sidebarHeader = this.sidebarTplNode.getRootNode().querySelector("h3");
    console.log(sidebarHeader);
    sidebarHeader.textContent = name;*/

    this.sidebar.replaceWith(this.sidebarTplNode);
    this.sidebar = document.querySelector(".sidebar"); //new sidebar
    this.sidebar.classList.remove("sidebar--hidden");
    this.isOpen = true;
  }

  private findCard(cardName: string, id?: number) {
    //should be id
    let fullData = getData(URL, path);
    let course:{"modules": Array<object>};
    fullData.then(arr => {
        course = arr.find(courseObj => {
          if(courseObj.courseTitle == cardName) //id
            return true;
        });
      });
    let modulesOfCourse:Array<object> = course.modules;
    let modAndStatusObj:{[name:string]:string};
    modulesOfCourse.forEach((modObj:{"moduleTitle":string, "moduleStatus":{"displayName":string}})=>{
      modAndStatusObj["moduleTitle"] = modObj.moduleTitle;
      modAndStatusObj["moduleStatus"] = modObj.moduleStatus.displayName;
    });
    // this.fillCard();
  }

  private fillCard() {}
}
