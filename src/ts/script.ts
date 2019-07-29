import { App } from "../app/app";
import { render } from "../app/main/render";
import {scroll} from "../app/scroll";

const app = new App();
app.mount();

render("not_done" );
render("in_progress");
render("suspended");
render("high_priority");
render("rejected");


// render(["not_done", "in_progress", "suspended", "high_priority", "rejected", "done"]);

scroll("not_done");