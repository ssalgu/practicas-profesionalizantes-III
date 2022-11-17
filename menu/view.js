import {Controller} from "./controller.js";

class View extends HTMLElement {

	constructor(Model) {

		super();

		//Acquire model reference
		this.model = Model;
		this.controller = new Controller(this,this.model);

		//Create UI Elements from HTMLDocument
		this.navBar = document.createElement("nav");
		this.navBar.style = "display : block"
		this.navBar.classList.add("w3-sidebar", "w3-red", "w3-collapse", "w3-top", "w3-large", "w3-padding", "navBar");
		
		this.linkCloseNav = document.createElement("a");
		//this.linkCloseNav.href = "javascript:void(0)";???????
		//this.display.setAttribute("href","javascript:void(0)");
		this.linkCloseNav.text = "Cerrar Menú";
		this.linkCloseNav.classList.add("w3-button","w3-hide-large","w3-display-topleft", "closeNavBar");

		this.containerTitleBar = document.createElement("div");
		this.containerTitleBar.classList.add("w3-button","w3-hide-large","w3-display-topleft");
		
		this.textdiv = document.createElement("p");
		this.textdiv.text = "holaaa";
		this.textdiv.classList.add("text");		
		
		this.navBarItems = document.createElement("div");
		this.navBarItems.classList.add("w3-bar-block");
		this.linksNav = document.createElement("a");
		
		this.headerMenu = document.createElement("header");
		this.headerMenu.classList.add("w3-container","w3-top","w3-hide-large","w3-red","w3-xlarge","w3-padding");
		
	}

	connectedCallback() {
		this.containerTitleBar.appendChild(this.textdiv);
			
				this.navBar.appendChild(this.linkCloseNav);
				this.navBar.appendChild(this.containerTitleBar);
				
				this.navBar.appendChild(this.navBarItems);
				this.navBar.appendChild(this.linksNav);
				
				this.appendChild(this.navBar);

		//Attach event-handler functions to each element
		this.linkCloseNav.addEventListener('click', (event) => this.controller.w3_close(event) );
	}
}

export {View};