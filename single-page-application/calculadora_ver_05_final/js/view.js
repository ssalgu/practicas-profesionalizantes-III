/*   
	Refactoring 5 Calculator
	Prácticas Profesionalizantes III
	Tecnicatura Superior en Análisis de Sistemas / ISFT 151
	Copyright 2023 ssalgu <sebastiansalgueiro@gmail.com>
*/

class CalculatorView extends HTMLElement
{
	constructor(model)
	{
		super();

		//Acquire model reference
		this.innerModel = model;
		this.innerController = new CalculatorController(this,this.innerModel);

		//Create UI Elements from HTMLDocument

		// Div container
		this.contenedor = document.createElement('div');
		this.contenedor.classList.add('contenedor');

		// Div content
		this.contenido = document.createElement('div');
		this.contenedor.classList.add('contenido');

		// Elements
		this.display = document.createElement('input');
		this.display.type = 'text';
		this.display.setAttribute('disabled','');
		this.display.value = '';
		this.display.classList.add('displayResult');

		this.button0 = document.createElement('button');
		this.button0.innerText = '0';
		this.button0.classList.add('numberButton');
		this.button0.classList.add('buttons');

		this.button1 = document.createElement('button');
		this.button1.innerText = '1';
		this.button1.classList.add('numberButton');
		this.button1.classList.add('buttons');

		this.button2 = document.createElement('button');
		this.button2.innerText = '2';
		this.button2.classList.add('numberButton');
		this.button2.classList.add('buttons');

		this.button3 = document.createElement('button');
		this.button3.innerText = '3';
		this.button3.classList.add('numberButton');
		this.button3.classList.add('buttons');

		this.button4 = document.createElement('button');
		this.button4.innerText = '4';
		this.button4.classList.add('numberButton');
		this.button4.classList.add('buttons');

		this.button5 = document.createElement('button');
		this.button5.innerText = '5';
		this.button5.classList.add('numberButton');
		this.button5.classList.add('buttons');

		this.button6 = document.createElement('button');
		this.button6.innerText = '6';
		this.button6.classList.add('numberButton');
		this.button6.classList.add('buttons');

		this.button7 = document.createElement('button');
		this.button7.innerText = '7';
		this.button7.classList.add('numberButton');
		this.button7.classList.add('buttons');

		this.button8 = document.createElement('button');
		this.button8.innerText = '8';
		this.button8.classList.add('numberButton');
		this.button8.classList.add('buttons');

		this.button9 = document.createElement('button');
		this.button9.innerText = '9';
		this.button9.classList.add('numberButton');
		this.button9.classList.add('buttons');

		this.buttonAddition = document.createElement('button');
		this.buttonAddition.innerText = '+';
		this.buttonAddition.classList.add('operatorButton');
		this.buttonAddition.classList.add('buttons');

		this.buttonSubstraction = document.createElement('button');
		this.buttonSubstraction.innerText = '-';
		this.buttonSubstraction.classList.add('operatorButton');
		this.buttonSubstraction.classList.add('buttons');

		this.buttonMultiplication = document.createElement('button');
		this.buttonMultiplication.innerText = '*';
		this.buttonMultiplication.classList.add('operatorButton');
		this.buttonMultiplication.classList.add('buttons');

		this.buttonDivision = document.createElement('button');
		this.buttonDivision.innerText = '%';
		this.buttonDivision.classList.add('operatorButton');
		this.buttonDivision.classList.add('buttons');

		this.buttonClear = document.createElement('button');
		this.buttonClear.innerText = 'AC';
		this.buttonClear.classList.add('clearButton');
		this.buttonClear.classList.add('buttons');

		this.buttonCalculate = document.createElement('button');
		this.buttonCalculate.innerText = '=';
		this.buttonCalculate.classList.add('calculateButton');
		this.buttonCalculate.classList.add('buttons');

	}

	connectedCallback()
	{
		// Append to itself respecting hierarchy
		this.appendChild(this.contenedor);
		this.contenedor.appendChild(this.contenido);
		this.contenido.appendChild(this.display);
		this.contenido.appendChild(this.button0);
		this.contenido.appendChild(this.button1);
		this.contenido.appendChild(this.button2);
		this.contenido.appendChild(this.button3);
		this.contenido.appendChild(this.button4);
		this.contenido.appendChild(this.button5);
		this.contenido.appendChild(this.button6);
		this.contenido.appendChild(this.button7);
		this.contenido.appendChild(this.button8);
		this.contenido.appendChild(this.button9);
		this.contenido.appendChild(this.buttonAddition);
		this.contenido.appendChild(this.buttonSubstraction);
		this.contenido.appendChild(this.buttonMultiplication);
		this.contenido.appendChild(this.buttonDivision);
		this.contenido.appendChild(this.buttonClear);
		this.contenido.appendChild(this.buttonCalculate);

		//Attach event-handler functions to each element
		this.button0.addEventListener('click', (event) => this.innerController.onButton0Click(event) );
		this.button1.addEventListener('click', (event) => this.innerController.onButton1Click(event) );
		this.button2.addEventListener('click', (event) => this.innerController.onButton2Click(event) );
		this.button3.addEventListener('click', (event) => this.innerController.onButton3Click(event) );
		this.button4.addEventListener('click', (event) => this.innerController.onButton4Click(event) );
		this.button5.addEventListener('click', (event) => this.innerController.onButton5Click(event) );
		this.button6.addEventListener('click', (event) => this.innerController.onButton6Click(event) );
		this.button7.addEventListener('click', (event) => this.innerController.onButton7Click(event) );
		this.button8.addEventListener('click', (event) => this.innerController.onButton8Click(event) );
		this.button9.addEventListener('click', (event) => this.innerController.onButton9Click(event) );
		this.buttonAddition.addEventListener('click', (event) => this.innerController.onButtonAdditionClick(event) );
		this.buttonSubstraction.addEventListener('click', (event) => this.innerController.onButtonSubstractionClick(event) );
		this.buttonMultiplication.addEventListener('click', (event) => this.innerController.onButtonMultiplicationClick(event) );
		this.buttonDivision.addEventListener('click', (event) => this.innerController.onButtonDivisionClick(event) );
		this.buttonClear.addEventListener('click', (event) => this.innerController.onButtonClearClick(event) );
		this.buttonCalculate.addEventListener('click', (event) => this.innerController.onButtonCalculateClick(event) );
	}
}