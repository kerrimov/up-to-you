import { Module } from "./module/module";
import { Card } from "./card/card";
import { fetchAsync } from "../ts/data";
const data = fetchAsync();

export class Scroll {
  scrolling(){
    let listElem = document.getElementById('card__container')
    listElem.addEventListener('scroll', function() {
      if (listElem.scrollTop + listElem.clientHeight >= listElem.scrollHeight) {
        console.log("tut");
        const card = new Card();
        card.mount(data);
        const module = new Module();
        module.mount(data);
      }
    });
  }
}
