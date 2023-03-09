/*   
	Refactoring 4 Calculator
	Prácticas Profesionalizantes III
	Tecnicatura Superior en Análisis de Sistemas / ISFT 151
	Copyright 2023 ssalgu <sebastiansalgueiro@gmail.com>
*/

class CalculatorController
{
	constructor(view, model)
	{
		this.innerView = view;
		this.innerModel = model;
	}

	onButton0Click()
	{   	
		this.innerView.display.value += '0';
	}

	onButton1Click()
	{   	
		this.innerView.display.value += '1';
	}

	onButton2Click()
	{   	
		this.innerView.display.value += '2';
	}

	onButton3Click()
	{   	
		this.innerView.display.value += '3';
	}

	onButton4Click()
	{   	
		this.innerView.display.value += '4';
	}

	onButton5Click()
	{   	
		this.innerView.display.value += '5';
	}

	onButton6Click()
	{   	
		this.innerView.display.value += '6';
	}

	onButton7Click()
	{   	
		this.innerView.display.value += '7';
	}

	onButton8Click()
	{   	
		this.innerView.display.value += '8';
	}

	onButton9Click()
	{   	
		this.innerView.display.value += '9';
	}

	onButtonAdditionClick()
	{   	
		this.innerView.display.value += '+';
	}

	onButtonSubstractionClick()
	{   	
		this.innerView.display.value += '-';
	}

	onButtonMultiplicationClick()
	{   	
		this.innerView.display.value += '*';
	}

	onButtonDivisionClick()
	{   	
		this.innerView.display.value += '/';
	}

	onButtonClearClick()
	{   	
		this.innerView.display.value = '';
	}

	onButtonCalculateClick()
	{
		this.innerView.display.value = this.innerModel.calculate(this.innerView.display.value);
	}
}