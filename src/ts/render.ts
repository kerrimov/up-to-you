import card from "../app/card/card.html";
import module from "../app/module/module.html";
import { fetchAsync } from "./data";

const data = fetchAsync();

export function render(status) {
  let count = 0;
  data.then(objCourseArr => {
    objCourseArr.forEach(objCourse => {
      objCourse.modules.forEach(objModule => {
        if (objModule.moduleStatus.key == status) {
          let cardContainer = document.getElementById(
            "card__container--" + status
          );
          cardContainer.innerHTML += card;
          const courseTitle = cardContainer.querySelectorAll(
            ".card__header__value"
          )[count];
          const courseId = cardContainer.querySelectorAll(".card")[count];
          const parser = new DOMParser();
          const parsedCard = parser.parseFromString(card, "text/html");
          const moduleContainer = parsedCard.querySelector(
            ".module__container"
          );
          const parsedModule = parser.parseFromString(module, "text/html");
          moduleContainer.innerHTML += module;
          const moduleTitle = parsedModule.querySelector(".module__value"); //all
          courseId.setAttribute("id", objCourse.guid);
          courseTitle.textContent = objCourse.courseTitle;
          moduleTitle.textContent = objModule.moduleTitle;
          count++;
        }
      });
    });
  });
}
