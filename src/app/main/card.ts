import {fetchAsync} from "../../ts/data";
import card from "./card.html";

export class Card {
  async  MountCard(count) {
    const data = await fetchAsync();
    console.log(data,"class")
    const cardContainer = document.createElement("div");
    cardContainer.className = "card__container";
    for (let i = 0; i <count ; i++) {
      cardContainer.innerHTML +=
        `<div class="card">
        <div class="card__header"><h4>${data[i].courseTitle}</h4></div>
        <div class="module__container">
            <div class="module module-1"><p>Z</p></div>
            <div class="module module-1"><p>Z</p></div>
            <div class="module module-1"><p>Z</p></div>
        </div>
       </div>`;
    };
    return cardContainer;
  };
};
