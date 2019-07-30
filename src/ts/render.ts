import card from "../app/card/card.html"
import { fetchAsync } from "./data";

const data = fetchAsync();

export function render(status) {
  let count = 0;
  data.then(response => {
    response.forEach((item) => {
      item.modules.forEach((element) => {
        if (element.moduleStatus.key === status) {
          let cardContainer = document.getElementById("card__container--" + status);
          cardContainer.innerHTML += `${card}`;
          let courseTitle = cardContainer.querySelectorAll(".card__header")[count];
          let courseId = cardContainer.querySelectorAll(".card")[count];
          let moduleTitle = cardContainer.querySelectorAll(".module")[count];
          courseId.setAttribute("id", item.guid);
          courseTitle.textContent = item.courseTitle;
          moduleTitle.textContent = element.moduleTitle;
          count++;
        }
      });
    });
  });
}