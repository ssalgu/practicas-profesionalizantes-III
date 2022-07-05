let parseado = [];
let btn0 = document.getElementById("btn0");
btn0.addEventListener("click", () => ingresarDato(0));

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => ingresarDato(1));

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => ingresarDato(2));

let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => ingresarDato(3));

let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => ingresarDato(4));

let btn5 = document.getElementById("btn5");
btn5.addEventListener("click", () => ingresarDato(5));

let btn6 = document.getElementById("btn6");
btn6.addEventListener("click", () => ingresarDato(6));

let btn7 = document.getElementById("btn7");
btn7.addEventListener("click", () => ingresarDato(7));

let btn8 = document.getElementById("btn8");
btn8.addEventListener("click", () => ingresarDato(8));

let btn9 = document.getElementById("btn9");
btn9.addEventListener("click", () => ingresarDato(9));

let btnAC = document.getElementById("btnAC");
btnAC.addEventListener("click", () => resetearDisplay(parseado));

let btnDivision = document.getElementById("btnDivision");
btnDivision.addEventListener("click", () => ingresarDato("/"));

let btnMultiplicacion = document.getElementById("btnMultiplicacion");
btnMultiplicacion.addEventListener("click", () => ingresarDato("*"));

let btnResta = document.getElementById("btnResta");
btnResta.addEventListener("click", () => ingresarDato("-"));

let btnSuma = document.getElementById("btnSuma");
btnSuma.addEventListener("click", () => ingresarDato("+"));

let btnIgual = document.getElementById("btnIgual");
btnIgual.addEventListener("click", () => calcularResultado(parseado));

function calcularResultado(parseado){
	parsearDisplay(parseado);
	
}

function esUnOperador (caracter){
	let resultado = false;
	switch(caracter){
		case "/":
			resultado = true;
			break;
		case "*":
			resultado = true;
			break;
		case "+":
			resultado = true;
			break;
		case "-":
			resultado = true;
			break;
	}
	return resultado;
}

function parsearDisplay(datosDisplay){
	let display = document.getElementById("display").innerText;
	let numero1 = "";
	let numero2 = "";
	let j = 0;

	for (i=0; i < display.length; i++){
		// recorro el display
		if (esUnOperador(display.charAt(i))){
			j++;
			parseado.push(numero1);
			parseado.push(display.charAt(i));
		} else {
			if (!j) numero1 += numero1;
			else numero2 += numero2;
		}
	}
	parseado.push(numero2);
	console.log(i);
	console.log(j);
	console.log(numero1);
	console.log(numero2);
	document.getElementById("display").innerText = parseInt(numero1) + parseInt(numero2);
}

function resetearDisplay(parseado){
	document.getElementById("display").innerText = "";
	// vaciar el Array
	parseado.splice(0, parseado.length);
}

function ingresarDato(character){
	if (document.getElementById("display").innerText == "0"){
		document.getElementById("display").innerText = character;
	} else {
		document.getElementById("display").innerText += character;
	}
}

function ingresarOperador(parseado, simbolo){

	if (document.getElementById("display").innerText != ""){
		parseado.push(parseFloat(document.getElementById("display").innerText));
		document.getElementById("display").innerText = "";
		parseado.push(simbolo);
	}
}