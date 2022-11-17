import {calculatorController} from "./calculatorController.js";

class calculatorView extends HTMLElement
{
	constructor(calculatorModel)
	{
		super();

		//Acquire model reference
		this.model = calculatorModel;
		this.controller = new calculatorController(this,this.model);

		//Create UI Elements from HTMLDocument
		this.calculator = document.createElement("div");
		this.calculator.classList.add("calculator");
		
		this.display = document.createElement("input");
		this.display.type = "text";
		this.display.setAttribute("disabled","");
		this.display.value = "";
		this.display.classList.add("display");

		this.btn0 = document.createElement("button");
		this.btn0.innerText = "0";
		this.btn0.classList.add("button","fontbutton","numberbutton");

		this.btn1 = document.createElement("button");
		this.btn1.innerText = "1";
		this.btn1.classList.add("button","fontbutton","numberbutton");

		this.btn2 = document.createElement("button");
		this.btn2.innerText = "2";
		this.btn2.classList.add("button","fontbutton","numberbutton");
		
		this.btn3 = document.createElement("button");
		this.btn3.innerText = "3";
		this.btn3.classList.add("button","fontbutton","numberbutton");
		
		this.btn4 = document.createElement("button");
		this.btn4.innerText = "4";
		this.btn4.classList.add("button","fontbutton","numberbutton");
		
		this.btn5 = document.createElement("button");
		this.btn5.innerText = "5";
		this.btn5.classList.add("button","fontbutton","numberbutton");
		
		this.btn6 = document.createElement("button");
		this.btn6.innerText = "6";
		this.btn6.classList.add("button","fontbutton","numberbutton");
		
		this.btn7 = document.createElement("button");
		this.btn7.innerText = "7";
		this.btn7.classList.add("button","fontbutton","numberbutton");
		
		this.btn8 = document.createElement("button");
		this.btn8.innerText = "8";
		this.btn8.classList.add("button","fontbutton","numberbutton");
		
		this.btn9 = document.createElement("button");
		this.btn9.innerText = "9";
		this.btn9.classList.add("button","fontbutton","numberbutton");

		this.btnAdd = document.createElement("button");
		this.btnAdd.innerText = "+";
		this.btnAdd.classList.add("button","fontbutton","operatorbutton");
		
		this.btnSubstract = document.createElement("button");
		this.btnSubstract.innerText = "-";
		this.btnSubstract.classList.add("button","fontbutton","operatorbutton");
		
		this.btnMultiply = document.createElement("button");
		this.btnMultiply.innerText = "*";
		this.btnMultiply.classList.add("button","fontbutton","operatorbutton");
		
		this.btnDivide = document.createElement("button");
		this.btnDivide.innerText = "/";
		this.btnDivide.classList.add("button","fontbutton","operatorbutton");
		
		this.btnDecimal = document.createElement("button");
		this.btnDecimal.innerText = ".";
		this.btnDecimal.classList.add("button","fontbutton","operatorbutton");

		this.btnEqual = document.createElement("button");
		this.btnEqual.innerText = "=";
		this.btnEqual.classList.add("button","fontbutton","equalbutton");
		
		this.btnErase = document.createElement("button");
		this.btnErase.innerText = "borrar";
		this.btnErase.classList.add("button","fontbutton","erasebutton");
	}

	connectedCallback()
	{
		
		this.appendChild(this.calculator);
		this.calculator.appendChild(this.display);
		//br
		this.calculator.appendChild(this.btn7);
		this.calculator.appendChild(this.btn8);
		this.calculator.appendChild(this.btn9);
		this.calculator.appendChild(this.btnAdd);
		//br
		this.calculator.appendChild(this.btn4);
		this.calculator.appendChild(this.btn5);
		this.calculator.appendChild(this.btn6);
		this.calculator.appendChild(this.btnSubstract);
		//br
		this.calculator.appendChild(this.btn1);
		this.calculator.appendChild(this.btn2);
		this.calculator.appendChild(this.btn3);
		this.calculator.appendChild(this.btnMultiply);
		//br
		this.calculator.appendChild(this.btn0);
		this.calculator.appendChild(this.btnDecimal);
		this.calculator.appendChild(this.btnEqual);
		this.calculator.appendChild(this.btnDivide);
		//br
		this.calculator.appendChild(this.btnErase);

		//Event-Handler functions for each element
		this.btn0.addEventListener('click', (event) => this.controller.btn0Click(event) );
		this.btn1.addEventListener('click', (event) => this.controller.btn1Click(event) );
		this.btn2.addEventListener('click', (event) => this.controller.btn2Click(event) );
		this.btn3.addEventListener('click', (event) => this.controller.btn3Click(event) );
		this.btn4.addEventListener('click', (event) => this.controller.btn4Click(event) );
		this.btn5.addEventListener('click', (event) => this.controller.btn5Click(event) );
		this.btn6.addEventListener('click', (event) => this.controller.btn6Click(event) );
		this.btn7.addEventListener('click', (event) => this.controller.btn7Click(event) );
		this.btn8.addEventListener('click', (event) => this.controller.btn8Click(event) );
		this.btn9.addEventListener('click', (event) => this.controller.btn9Click(event) );
		this.btnAdd.addEventListener('click', (event) => this.controller.btnAddClick(event) );
		this.btnSubstract.addEventListener('click', (event) => this.controller.btnSubstractClick(event) );
		this.btnMultiply.addEventListener('click', (event) => this.controller.btnMultiplyClick(event) );
		this.btnDivide.addEventListener('click', (event) => this.controller.btnDivideClick(event) );
		this.btnDecimal.addEventListener('click', (event) => this.controller.btnDecimalClick(event) );
		
		this.btnEqual.addEventListener('click', (event) => this.controller.btnEqualClick(event) );
		this.btnErase.addEventListener('click', (event) => this.controller.btnEraseClick(event) );
	}
}

export {calculatorView};