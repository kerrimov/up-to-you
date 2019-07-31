import { App } from "../app/app";
import { Render} from "./render";
import { fetchAsync } from "./data";
import { Card } from "../app/card/card";
import { Module } from "../app/module/module";
import { Main } from "../app/main/main";
import { infiniteScrollData} from "../app/scroll";

const data = fetchAsync();
const app = new App();
app.mount();
const main = new Main();
main.mount();
// const card = new Card();
// card.mount(data);
// // const module = new Module();
// // module.mount(data);

const statuses = [
  "not_done",
  "in_progress",
  "suspended",
  "high_priority",
  "rejected",
  "done"
];
const render = new Render();
statuses.forEach(status => {
 render.firstRender(status);
});

const infiniteScroll = new infiniteScrollData();
statuses.forEach(status => {
  infiniteScroll.render(status);
})
