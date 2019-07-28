import { Mountable } from "../interfaces/Mountable";
import card from "./card.html";

export class Card {
  mount(data) {
    data.then(response => {
      response.map(item => {
        const cardContainer = document.getElementById("card__container");
        cardContainer.innerHTML += `<div class="card" id="card">
                                    <div class="card__header"><h4>${item.courseTitle}</h4></div>
                                    <div class="module__container" id="module__container"></div>
                                    </div>`;
      });
    });
  }
}
