import { Mountable } from "../interfaces/Mountable";
import card from "./card.html";

export class Card {
  mount(data) {
    data.then(response => {
      response.forEach((item, i) => {
        const [cardContainer] = document.getElementsByClassName(
          "card__container"
        );
        cardContainer.innerHTML += card;
        const cardHeader = document.getElementsByClassName("card__header__h4")[
          i
        ];
        cardHeader.innerHTML += item.courseTitle;
      });
    });
  }
}
