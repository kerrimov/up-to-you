import { Render } from "../ts/render";

export class infiniteScrollData {
  render(data,status) {
    let listElem = document.getElementById("card__container--" + status);
    listElem.addEventListener("scroll", function() {
      if (listElem.scrollTop + listElem.clientHeight >= listElem.scrollHeight) {
        new Render().init(data,status)
      }
    });
  }
}