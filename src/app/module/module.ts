import { Mountable } from "../interfaces/Mountable";
import module from "./module.html";

export class Module {
  mount(data) {
    data.then(response => {
      response.map(item => {
        item.modules.map(element => {
          const moduleContainer = document.getElementById("module__container");
          moduleContainer.innerHTML += `<div class="module" id="module">
                                        <p>${element.moduleTitle}</p></div>`;
        });
      });
    });
  }
}
