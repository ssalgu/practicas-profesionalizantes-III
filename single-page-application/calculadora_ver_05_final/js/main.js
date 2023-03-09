/*   
	Refactoring 5 Calculator
	Prácticas Profesionalizantes III
	Tecnicatura Superior en Análisis de Sistemas / ISFT 151
	Copyright 2023 ssalgu <sebastiansalgueiro@gmail.com>
*/

function startGUIApplication()
{
	let myCalculatorModel = new CalculatorModel();
	let myCalculator = new CalculatorView(myCalculatorModel);
	document.body.appendChild(myCalculator);
}

customElements.define('x-calculator-view', CalculatorView);

window.addEventListener('load',startGUIApplication );