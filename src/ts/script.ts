import { App } from "../app/app";
import { Sidebar } from "../app/sidebar/sidebar";

const app = new App();
app.mount();

const sb = new Sidebar();
sb.mount();
