import card from "../app/card/card.html";
import module from "../app/module/module.html";

export class Render {
  init(data,status) {
    data.then(objCourseArr => {
      objCourseArr.forEach(objCourse => {
        objCourse.modules.forEach(objModule => {
          if (objModule.moduleStatus.key == status) {
            let cardContainer = document.getElementById(
              "card__container--" + status
            );
            cardContainer.innerHTML += card;
            const course = cardContainer.querySelector(".card:last-child");
            const courseTitle = course.querySelector(".card__header__value");
            const moduleContainer = course.querySelector(".module__container");
            moduleContainer.innerHTML += module;
            const moduleTitle = moduleContainer.querySelector(".module__value");
            course.setAttribute("id", objCourse.guid);
            courseTitle.textContent = objCourse.courseTitle;
            moduleTitle.textContent = objModule.moduleTitle;
          }
        });
      });
    });
  };
}
