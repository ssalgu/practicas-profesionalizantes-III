window.addEventListener("load", () => {
	// Defino e iniciliazo los elementos de la calculadora
	let calculator = document.createElement("div");
	calculator.classList.add("calculator");
	
	let display = document.createElement("input");
	display.classList.add("display");
	display.disabled = "true";
	
	let btn7 = document.createElement("button");
	btn7.innerText = "7";
	btn7.classList.add("button","numberbutton","fontbutton");
	
	let btn8 = document.createElement("button");
	btn8.innerText = "8";
	btn8.classList.add("button","numberbutton","fontbutton");
	
	let btn9 = document.createElement("button");
	btn9.innerText = "9";
	btn9.classList.add("button","numberbutton","fontbutton");
	
	let btnAdd = document.createElement("button");
	btnAdd.innerText = "+";
	btnAdd.classList.add("button","operatorbutton","fontbutton");

	let btn4 = document.createElement("button");
	btn4.innerText = "4";
	btn4.classList.add("button","numberbutton","fontbutton");
	
	let btn5 = document.createElement("button");
	btn5.innerText = "5";
	btn5.classList.add("button","numberbutton","fontbutton");
	
	let btn6 = document.createElement("button");
	btn6.innerText = "6";
	btn6.classList.add("button","numberbutton","fontbutton");
	
	let btnSubstract = document.createElement("button");
	btnSubstract.innerText = "-";
	btnSubstract.classList.add("button","operatorbutton","fontbutton");
	
	let btn1 = document.createElement("button");
	btn1.innerText = "1";
	btn1.classList.add("button","numberbutton","fontbutton");
	
	let btn2 = document.createElement("button");
	btn2.innerText = "2";
	btn2.classList.add("button","numberbutton","fontbutton");
	
	let btn3 = document.createElement("button");
	btn3.innerText = "3";
	btn3.classList.add("button","numberbutton","fontbutton");
	
	let btnMultiply = document.createElement("button");
	btnMultiply.innerText = "*";
	btnMultiply.classList.add("button","operatorbutton","fontbutton");
	
	let btn0 = document.createElement("button");
	btn0.innerText = "0";
	btn0.classList.add("button","numberbutton","fontbutton");
	
	let btnDecimal = document.createElement("button");
	btnDecimal.innerText = ".";
	btnDecimal.classList.add("button","operatorbutton","fontbutton");
	
	let btnEqual = document.createElement("button");
	btnEqual.innerText = "=";
	btnEqual.classList.add("button","equalbutton","fontbutton");
	
	let btnDivide = document.createElement("button");
	btnDivide.innerText = "/";
	btnDivide.classList.add("button","operatorbutton","fontbutton");
	
	let btnErase = document.createElement("button");
	btnErase.innerText = "AC";
	btnErase.classList.add("button","erasebutton","fontbutton");

	// Anclo los elementos instanciados al cuerpo
	document.body.appendChild(calculator);
		
	calculator.appendChild(display);
	calculator.appendChild(btn7);
	calculator.appendChild(btn8);
	calculator.appendChild(btn9);
	calculator.appendChild(btnAdd);
	calculator.appendChild(btn4);
	calculator.appendChild(btn5);
	calculator.appendChild(btn6);
	calculator.appendChild(btnSubstract);
	calculator.appendChild(btn1);
	calculator.appendChild(btn2);
	calculator.appendChild(btn3);
	calculator.appendChild(btnMultiply);
	calculator.appendChild(btn0);
	calculator.appendChild(btnDecimal);
	calculator.appendChild(btnEqual);
	calculator.appendChild(btnDivide);
	calculator.appendChild(btnErase);
	
	let result;
	let displayOperator = 0;

	function clickBtn9() {
		display.value +="9"; 
	}

	function clickBtn8() {
		display.value +="8"
	}

	function clickBtn7() {
		display.value +="7"
	}

	function clickBtn6() {
		display.value +="6"
	}

	function clickBtn5() {
		display.value +="5"
	}

	function clickBtn4() {
		display.value +="4"
	}

	function clickBtn3() {
		display.value +="3"
	}

	function clickBtn2() {
		display.value +="2"
	}

	function clickBtn1() {
		display.value +="1"
	}

	function clickBtn0() {
		display.value +="0"	
	}

	function clickBtnAdd() {
		if(displayOperator == 0) {
			display.value += "+";
		}
		displayOperator = 1;
	}	

	function clickBtnSubstract() {
		if(displayOperator == 0) {
			display.value += "-";
		}
		displayOperator = 1;
	}	

	function clickBtnMultiply() {
		if(displayOperator == 0) {
			display.value += "*";
		}
		displayOperator = 1;
	}	

	function clickBtnDivide() {
		if(displayOperator == 0) {
			display.value += "/";
		}
		displayOperator = 1;
	}	

	function clickBtnDecimalPoint() {
		if(displayOperator == 0) {
			display.value += ".";
		}
		displayOperator = 1;
	}	

	function clickBtnEqual() {
		result = display.value;
		display.value = eval(result); 
		displayOperator = 0;
	}

	function clickBtnErase() {
		display.value = "";
		result = 0;
		displayOperator = 0;
	}

	//gestión de los eventos onclick
	btn9.addEventListener("click", clickBtn9);
	btn8.addEventListener("click", clickBtn8);
	btn7.addEventListener("click", clickBtn7);
	btn6.addEventListener("click", clickBtn6);
	btn5.addEventListener("click", clickBtn5);
	btn4.addEventListener("click", clickBtn4);
	btn3.addEventListener("click", clickBtn3);
	btn2.addEventListener("click", clickBtn2);
	btn1.addEventListener("click", clickBtn1);
	btn0.addEventListener("click", clickBtn0);
	btnAdd.addEventListener("click", clickBtnAdd);
	btnSubstract.addEventListener("click", clickBtnSubstract);
	btnMultiply.addEventListener("click", clickBtnMultiply);
	btnDivide.addEventListener("click", clickBtnDivide);
	btnDecimal.addEventListener("click", clickBtnDecimalPoint);
	btnEqual.addEventListener("click", clickBtnEqual);
	btnErase.addEventListener("click", clickBtnErase);				
})