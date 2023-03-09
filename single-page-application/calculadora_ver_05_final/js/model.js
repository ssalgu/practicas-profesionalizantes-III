/*   
	Refactoring 5 Calculator
	Prácticas Profesionalizantes III
	Tecnicatura Superior en Análisis de Sistemas / ISFT 151
	Copyright 2023 ssalgu <sebastiansalgueiro@gmail.com>
*/

class CalculatorModel
{
	constructor()
	{

	}

	calculate(expression)
	{
		return fetch('./backend/calculate.php', { method:'post', body: JSON.stringify(expression) } ).then( response => response.json() );
	}
}
