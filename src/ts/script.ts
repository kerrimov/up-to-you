import { App } from "../app/app";
import { render } from "./render";
import { fetchAsync } from "./data";
import { Card } from "../app/card/card";
import { Module } from "../app/module/module";
import { Main } from "../app/main/main";

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

statuses.forEach(status => {
  render(status);
});
