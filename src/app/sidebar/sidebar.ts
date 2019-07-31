import { Mountable } from "../interfaces/Mountable";
import { getData } from "../../ts/data";
import sidebarTmpl from "./sidebar.html";
import moduleTmpl from "../card/module.html";

//don't forget includ utils directory from TS

let baseURI: string = "http://localhost:8080/";
let path: string = "cards2.json";

function createFragmentFromString(str){
  var template = document.createElement("template");
  template.innerHTML = str;
  return template.content;
}
function getHtmlNodeFromString(templateHhtmlString: string) {
  const serviceElement: HTMLElement = document.createElement("div");
  serviceElement.innerHTML = templateHhtmlString;
  const chunkOfHtmlElements = serviceElement.firstElementChild.cloneNode(true);
  return chunkOfHtmlElements;
}

export class Sidebar implements Mountable {
  private sidebarTmplTag: HTMLElement;
  private sidebar: HTMLElement;
  private sidebarTmplNode: Node;
  private moduleContTmpl: Node;
  private moduleSingleTmpl: Node;
  private closeButton: HTMLElement;
  private isOpen: boolean;
  private oldSb: Element;
  private sbTmplTag: HTMLElement;

  constructor() {
    // this.sidebarTmplTag = document.getElementById("tmpl-sidebar").content.cloneNode(true);//
    //sidebar has to be empty template of html for cloning everytime it needs to be filled
    this.isOpen = false;
    this.oldSb = null;
    this.sbTmplTag = document.getElementById("tmpl-sidebar");

    this.sidebarTmplNode = getHtmlNodeFromString(sidebarTmpl);
    this.moduleContTmpl = getHtmlNodeFromString(moduleTmpl);
    this.moduleSingleTmpl = this.moduleContTmpl.firstChild;
    this.sidebar = document.getElementById("sidebar");
    // this.sidebarTmplNode = this.sidebar.cloneNode(true);
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
    // debugger;
    if (target.closest(".card")) {
      // debugger;
      const idCard = target.closest(".card").id;
      const cardName = target.closest(".card").querySelector("h4").innerText; //will be deleted
      this.render(cardName, idCard); //will be idCard - param
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

  private render(name: string, id?: number) {
    debugger;
    const t1 = `                <div class="sidebar__header">
                                  <h3 class="sidebar__h3">Courses</h3>
                                  <span class="sidebar__closebtn">&times</span>
                                </div>
                                <div class="module__container">`;
    const t2 = `<div class="module">
                                          <p><em class="module_status"></em></p>
                                      </div>`;
    const t3 = `</div>`;
    const total = t1+t2+t2+t2+t3;
    const tmplFirstPart = `${t1}`;
    const tmplModuleAndStatusPart = `${t2}`;
    const tmplLastPart = `${t3}`;

    let fragment = createFragmentFromString(total);
    // fragment.appendChild(createFragmentFromString(moduleTmpl));

    this.sidebar.appendChild(fragment);
debugger;
    let templateNewTag = document.createElement("template");
    templateNewTag.id = "tmpl-sidebar";

    templateNewTag.insertAdjacentHTML("beforeend", total);

    /*templateNewTag.insertAdjacentHTML("beforeend", tmplFirstPart);
    templateNewTag.insertAdjacentHTML("beforeend", tmplModuleAndStatusPart);
    templateNewTag.insertAdjacentHTML("beforeend", tmplModuleAndStatusPart);
    templateNewTag.insertAdjacentHTML("beforeend", tmplModuleAndStatusPart);
    templateNewTag.insertAdjacentHTML("beforeend", tmplLastPart);*/

    this.sidebar.appendChild(templateNewTag);

    let newFilledTmpl = document.querySelector("#tmpl-sidebar");
    let modStat = newFilledTmpl.querySelectorAll("em");
    modStat[0].textContent = "something1";
    modStat[1].textContent = "something2";
    modStat[2].textContent = "something3";
    newFilledTmpl.querySelector(".module__container").appendChild(modStat[0]);

    let newCloneTmpl = document.importNode(newFilledTmpl.content, true);
    // this.sidebar.innerHTML = "";
    // this.sidebar.appendChild(newCloneTmpl);

    this.sidebar.appendChild(newFilledTmpl.content);

    // let newCloneTmpl = newFilledTmpl.content.cloneNode(true);
    // this.sidebar.insertBefore(newCloneTmpl, this.sidebar.lastElementChild);


   /* let headingSb = this.sbTmplTag.content.querySelector("h3");
    headingSb.textContent = name;
    /!*let newModule = this.sbTmplTag.content.querySelector(".module__container");
    newModule.appendChild(headingSb);*!/

    let cloneSbTmplTag = this.sbTmplTag.content.cloneNode( true);

    //to remove previous insertion, but not first
    if(this.oldSb){
      this.oldSb = this.sidebar.removeChild(this.sidebar.lastElementChild);
    }
    this.sidebar.appendChild(cloneSbTmplTag);
    this.oldSb = this.sidebar.lastElementChild;*/

    // this.findCard(name);

    this.sidebar.classList.remove("sidebar--hidden");
    this.isOpen = true;
  }

  private findCard(cardName: string, id?: number) {
    //should be id
    let fullData = getData(baseURI, path);
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
