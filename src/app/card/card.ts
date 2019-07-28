import { Mountable } from "../interfaces/Mountable";
import card from "./card.html";
var count = 0;
export class Card {
  mount(data) {
    data.then((response) => {
      let resLength = count + 1;
      for (let i = count; i < resLength; i++) {
        const cardContainer = document.getElementById("card__container");
        cardContainer.innerHTML += `<div class="card" id="card">
                                    <div class="card__header"><h4>${response[i].courseTitle}</h4></div>
                                    <div class="module__container" id="module__container"></div>
                                    </div>`;
      }
      count++;
    });
  }
}
