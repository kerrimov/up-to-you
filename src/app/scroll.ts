import { Render } from "../ts/render";
import { Slice } from "./slice";

export class infiniteScrollData {
  render(status) {
    let listElem = document.getElementById("card__container--" + status);
    listElem.addEventListener("scroll", function() {
      if (listElem.scrollTop + listElem.clientHeight >= listElem.scrollHeight) {
          new Render().init(new Slice().render(), status);
      }
    });
  };
}