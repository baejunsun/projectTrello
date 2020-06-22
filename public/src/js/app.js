import { initMain } from "./main.js"
import { initHeader } from "./header.js "
import { bindEvents } from "./eventBindings.js"
import { initSideMenu } from './sideMenu.js'

let lists = [];

window.onload = async () => {
  await initHeader();
  await initMain();
  initSideMenu();
  bindEvents();
}