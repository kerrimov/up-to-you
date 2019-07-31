import { Render } from "../ts/render";

export class infiniteScrollData {
  render(status) {
    let listElem = document.getElementById("card__container--" + status);
    listElem.addEventListener("scroll", function() {
      if (listElem.scrollTop + listElem.clientHeight >= listElem.scrollHeight) {
        new Render().scrollRender(status)
      }
    });
  }
}