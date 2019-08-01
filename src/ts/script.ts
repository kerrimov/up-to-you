import { App } from "../app/app";
import { Render } from "./render";
import { fetchAsync } from "./data";
import { Main } from "../app/main/main";
import { infiniteScrollData} from "../app/scroll";
import { Slice } from "../app/slice";
import { Sidebar } from "../app/sidebar/sidebar";

const dataRender = fetchAsync().then(result => result.slice(0,5));


const app = new App();
app.mount();
const main = new Main();
main.mount();
const sidebar = new Sidebar();
sidebar.mount();

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
 render.init(dataRender,status);
});

const infiniteScroll = new infiniteScrollData();
statuses.forEach(status => {
  infiniteScroll.render(status);
});

