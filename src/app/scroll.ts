import { render } from "../ts/render";

export function scroll (status) {
  let listElem = document.getElementById("card__container--" + status);
  listElem.addEventListener("scroll", function() {
    if (listElem.scrollTop + listElem.clientHeight >= listElem.scrollHeight) {
      console.log("scroll")
      // render(status);
    }
  });
}