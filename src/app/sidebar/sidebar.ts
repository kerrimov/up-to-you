import { Mountable } from "../interfaces/Mountable";
import { getData } from "../../ts/data";
import sidebarTmpl from "./sidebar.html";
import moduleTmpl from "../card/module.html";
import { Runtime } from "inspector";
// import AwaitPromiseParameterType = module;

//don't forget include utils directory from TS

let baseURL: string = "http://localhost:8080/";
let path: string = "cards2.json";

function createFragmentFromString(str: string): DocumentFragment {
  const template = document.createElement("template");
  template.innerHTML = str;
  return template.content;
}
/*function getHtmlNodeFromString(templateHhtmlString: string) {
  const serviceElement: HTMLElement = document.createElement("div");
  serviceElement.innerHTML = templateHhtmlString;
  const chunkOfHtmlElements = serviceElement.firstElementChild.cloneNode(true);
  return chunkOfHtmlElements;
}*/

export class Sidebar implements Mountable {
  // private sidebarTmplTag: HTMLElement;
  // private sidebarTmplNode: Node;
  // private moduleContTmpl: Node;
  // private moduleSingleTmpl: Node;
  // private sbTmplTag: HTMLElement;
  private sidebar: HTMLElement;
  private closeButton: HTMLElement;
  private isOpen: boolean;
  private oldSbContent: Element;

  constructor() {
    // this.sidebarTmplTag = document.getElementById("tmpl-sidebar").content.cloneNode(true);//
    //sidebar has to be empty template of html for cloning everytime it needs to be filled
    // this.sbTmplTag = document.getElementById("tmpl-sidebar");
    // this.sidebarTmplNode = getHtmlNodeFromString(sidebarTmpl);
    // this.moduleContTmpl = getHtmlNodeFromString(moduleTmpl);
    // this.moduleSingleTmpl = this.moduleContTmpl.firstChild;
    // this.sidebarTmplNode = this.sidebar.cloneNode(true);

    this.isOpen = false;
    this.oldSbContent = null;
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
    document.body.addEventListener("click", evt => this.open(evt));
  }

  private open(evt) {
    let target = evt.target;

    if (target.closest(".card")) {
      const idCard = target.closest(".card").id;
      const cardName = target.closest(".card").querySelector("h4").innerText; //will be deleted
      this.render(cardName, idCard); //will be only idCard - param
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

  private async render(name: string, id?: number) {
    // debugger;
    //create string template fo rendering
    const sidebarHtmlString: string = `<div class="sidebar">
                                         <div class="sidebar__header">
                                            <h3 class="sidebar__h3">Courses</h3>
                                            <span class="sidebar__closebtn">&times</span>
                                         </div>
                                         <div class="module__container"></div>
                                     </div>`;

    const moduleHtmlString: string = `<div class="module">
                                          <p></p>
                                          <p class="module__status"></p>
                                        </div>`;
    //create needed elements before async
    const sidebarFragment = createFragmentFromString(sidebarHtmlString);
    const cardHeading = sidebarFragment.querySelector("h3");
    const moduleContainerFrag = sidebarFragment.querySelector(
      ".module__container"
    );

    //create types
    type singleModule = {
      guid: string;
      moduleTitle: string;
      moduleStatus: {
        key: string;
        displayName: string;
      };
    };
    type arrayModules = singleModule[];
    type singleCourse = {
      guid: string;
      courseTitle: string;
      modules: arrayModules;
    };
    type data = singleCourse[];

    //create variables
    const allData: Promise<data> = getData(baseURL, path);
    let course: singleCourse;
    let modules: arrayModules;
    let module: singleModule;

    course = await allData.then(arr => {
      return arr.find(courseObj => {
        if (courseObj.guid === id){
          //fill Card Name in sidebarFragment
          cardHeading.textContent = courseObj.courseTitle;
          return true;
        }
      });
    });

    function sortModules(a:singleModule, b: singleModule):number{
      return a.moduleStatus.key.localeCompare(b.moduleStatus.key);
    };
    modules = course.modules;
    modules
      .sort(sortModules)
      .forEach( oneModule => {
      //fill moduleContainer with quantity of modules (everytime will be executed to insert one module)
      const moduleFrag = createFragmentFromString(moduleHtmlString);
      const moduleNameFr = moduleFrag.querySelector("p");
      const moduleStatusFr = moduleFrag.querySelector(".module__status");
        moduleNameFr.textContent = oneModule.moduleTitle;
        moduleStatusFr.textContent = oneModule.moduleStatus.displayName;

        moduleContainerFrag.appendChild(moduleFrag);
    });

    //to remove previous insertion, but not first (first time will be ignored)
    if (this.oldSbContent) {
      this.oldSbContent = this.sidebar.removeChild(this.oldSbContent);
    }
    //show filled sidebar
    this.sidebar.appendChild(sidebarFragment);
    this.oldSbContent = this.sidebar.lastElementChild;

    // this.findCard(name);

    this.sidebar.classList.remove("sidebar--hidden");
    this.isOpen = true;
  }

  private findCard(cardName: string, id?: number) {
    //should be id
    let allData = getData(baseURL, path);
    let course: { modules: Array<object> };
    allData.then(arr => {
      course = arr.find(courseObj => {
        if (courseObj.courseTitle == cardName)
          //id
          return true;
      });
    });
    let modulesOfCourse: Array<object> = course.modules;
    let modAndStatusObj: { [name: string]: string };
    modulesOfCourse.forEach(
      (modObj: {
        moduleTitle: string;
        moduleStatus: { displayName: string };
      }) => {
        modAndStatusObj["moduleTitle"] = modObj.moduleTitle;
        modAndStatusObj["moduleStatus"] = modObj.moduleStatus.displayName;
      }
    );
  }
}
