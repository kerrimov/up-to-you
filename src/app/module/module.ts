import { Mountable } from "../interfaces/Mountable";
import module from "./module.html";

export class Module {
  mount(data) {
    data.then(response => {
      response.map((item, i) => {
        item.modules.map((element, index) => {
          const moduleContainer = document.getElementsByClassName(
            "module__container"
          )[i];
          moduleContainer.innerHTML += `<div class="module" id="module">
                                        <p>${element.moduleTitle}</p></div>`;
        });
      });
    });
  }
}
