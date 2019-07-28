import { App } from "../app/app";
import { Card } from "../app/card/card";
import { Module } from "../app/module/module";
import { fetchAsync } from "../ts/data";

const data = fetchAsync();

const app = new App();
app.mount();
const card = new Card();
card.mount(data);
const module = new Module();
module.mount(data);
