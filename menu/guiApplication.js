// guiApplication.js

import {Model} from "./modelMenu.js";
import {View} from "./viewMenu.js";

function startGUIApplication() {
	let myModel = new Model();
	let myPageView = new View(myModel);
	document.body.appendChild(myPageView);
}

customElements.define('x-page-view', View);
window.addEventListener('load',startGUIApplication );