import {calculatorModel} from "./calculatorModel.js";
import {calculatorView} from "./calculatorView.js";

function startGUIApplication()
{
  let myCalculatorModel = new calculatorModel();
  let myCalculator = new calculatorView(myCalculatorModel);
  document.body.appendChild(myCalculator);
}

customElements.define('x-calculator-view', calculatorView);

window.addEventListener('load',startGUIApplication );