// controller.js

class Controller {

	constructor(View, Model) {
		this.view = View;
		this.model = Model
	}

	// Open and close the sidebar
	w3_open() {
		document.getElementById("mySidebar").style.display = "block";
		document.getElementById("myOverlay").style.display = "block";
	}
 
	w3_close() {
		this.view.style.display = "none";
		this.view.style.display = "none";
	}
}


export {Controller};




/*class listadesplegable extends htmlelement
 * {
 * 	construct(){div = doc.createElement('div')}
 * 
 * }
 * 
 * addItem(nombre){
 * 	buton = document.createElement('button')
 * button.innerText = nombre
 * div.appendChild(button)
 * }
*/