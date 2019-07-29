import { App } from "../app/app";
import { Card } from "../app/card/card";
import { Module } from "../app/module/module";
import { fetchAsync } from "./data";
import { Render } from "./render";

const app = new App();
app.mount();
const data = fetchAsync();
Render(data);
