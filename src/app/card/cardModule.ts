import card_module_template from "./cardModule.html";
import { Mountable } from "../interfaces/Mountable";

export class CardModule implements Mountable {
  mount() {
    setTimeout(
      () => {
        const statusHeader = Array.from(
          document.querySelectorAll(".status__header")
        );
        statusHeader.map(heading =>
          heading.insertAdjacentHTML("afterend", card_module_template)
        );
      },
      50,
      card_module_template
    );
  }
}
