import { Mountable } from "../interfaces/Mountable";
import card from "./card.html";

export class Card {
  mount(data) {
    data.then(response => {
      response.forEach((item, i) => {
        const parser = new DOMParser();
        const parsedStatus = parser.parseFromString(status, "text/html");
        const cardContainer = parsedStatus.querySelectorAll(".card__container")[
          i
        ];
        console.log(parsedStatus);
        cardContainer.innerHTML += card;
        const cardHeader = cardContainer.querySelector(".card__header__value");
        cardHeader.innerHTML += item.courseTitle;
      });
    });
  }
}
