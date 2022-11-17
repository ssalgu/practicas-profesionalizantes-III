class calculatorController {
	
	constructor(calculatorView, calculatorModel) {
		this.view = calculatorView;
		this.model = calculatorModel
	}

	btn0Click() {   	
		this.view.display.value += '0';
	}

	btn1Click() {   	
		this.view.display.value += '1';
	}

	btn2Click() {   	
		this.view.display.value += '2';
	}

	btn3Click() {   	
		this.view.display.value += '3';
	}
	
	btn4Click() {   	
		this.view.display.value += '4';
	}
	
	btn5Click() {   	
		this.view.display.value += '5';
	}
	
	btn6Click() {   	
		this.view.display.value += '6';
	}
	
	btn7Click() {   	
		this.view.display.value += '7';
	}
	
	btn8Click() {   	
		this.view.display.value += '8';
	}
	
	btn9Click() {   	
		this.view.display.value += '9';
	}
	
	btnAddClick() {  
		this.view.display.value += '+';

	}
	
	btnSubstractClick() {
		this.view.display.value += '-';
	}
	
	btnMultiplyClick() {
		this.view.display.value += '*';
	}
	
	btnDivideClick() {   	
		this.view.display.value += '/';
	}
	
	btnEraseClick() {
		this.view.display.value = "";
	}
	
	
	btnEqualClick()	{
	  this.view.display.value = eval(this.model.calculate(this.view.display.value));
	}
}

export {calculatorController};