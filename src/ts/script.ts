import { App } from "../app/app";
import { Sidebar } from "../app/sidebar/sidebar";
import { CardModule } from "../app/card/cardModule"; //for test, don't forget DELETE

const app = new App();
app.mount();

const sb = new Sidebar();
sb.mount();

//just for test
const cm = new CardModule();
cm.mount();
