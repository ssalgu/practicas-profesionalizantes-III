let flag = 0;

// Defino tipo de variable e instancio con un valor
let btn01 = document.getElementById("btn01");
// Le asigno un evento y la función que debe ejecutar
btn01.addEventListener("click", () => aparecerNumero(1));

// Defino tipo de variable e instancio con un valor
let btn02 = document.getElementById("btn02");
// Le asigno un evento y la función que debe ejecutar
btn02.addEventListener("click", () => aparecerNumero(2));

// Defino tipo de variable e instancio con un valor
let btn03 = document.getElementById("btn03");
// Le asigno un evento y la función que debe ejecutar
btn03.addEventListener("click", () => aparecerNumero(3));

// Defino tipo de variable e instancio con un valor
let btn04 = document.getElementById("btn04");
// Le asigno un evento y la función que debe ejecutar
btn04.addEventListener("click", () => aparecerNumero(4));

// Defino tipo de variable e instancio con un valor
let btn05 = document.getElementById("btn05");
// Le asigno un evento y la función que debe ejecutar
btn05.addEventListener("click", () => aparecerNumero(5));

// Defino tipo de variable e instancio con un valor
let btn06 = document.getElementById("btn06");
// Le asigno un evento y la función que debe ejecutar
btn06.addEventListener("click", () => aparecerNumero(6));

// Defino tipo de variable e instancio con un valor
let btn07 = document.getElementById("btn07");
// Le asigno un evento y la función que debe ejecutar
btn07.addEventListener("click", () => aparecerNumero(7));

// Defino tipo de variable e instancio con un valor
let btn08 = document.getElementById("btn08");
// Le asigno un evento y la función que debe ejecutar
btn08.addEventListener("click", () => aparecerNumero(8));

// Defino tipo de variable e instancio con un valor
let btn09 = document.getElementById("btn09");
// Le asigno un evento y la función que debe ejecutar
btn09.addEventListener("click", () => aparecerNumero(9));

// Defino tipo de variable e instancio con un valor
let btn00 = document.getElementById("btn00");
// Le asigno un evento y la función que debe ejecutar
btn00.addEventListener("click", () => aparecerNumero(0));

// Defino tipo de variable e instancio con un valor
let btnAC = document.getElementById("btnAC");
// Le asigno un evento y la función que debe ejecutar
btnAC.addEventListener("click", aparecerAC);

// Defino tipo de variable e instancio con un valor
let btnSuma = document.getElementById("btnSuma");
// Le asigno un evento y la función que debe ejecutar
btnSuma.addEventListener("click", () => aparecerOperador("+"));

// Defino tipo de variable e instancio con un valor
let btnResta = document.getElementById("btnResta");
// Le asigno un evento y la función que debe ejecutar
btnResta.addEventListener("click", () => aparecerOperador("-"));

// Defino tipo de variable e instancio con un valor
let btnMultiplicacion = document.getElementById("btnMultiplicacion");
// Le asigno un evento y la función que debe ejecutar
btnMultiplicacion.addEventListener("click", () => aparecerOperador("*"));

// Defino tipo de variable e instancio con un valor
let btnDivision = document.getElementById("btnDivision");
// Le asigno un evento y la función que debe ejecutar
btnDivision.addEventListener("click", () => aparecerOperador("/"));

// Defino tipo de variable e instancio con un valor
let btnExponencial = document.getElementById("btnExponencial");
// Le asigno un evento y la función que debe ejecutar
btnExponencial.addEventListener("click", () => aparecerOperador("e"));

// Defino función
function aparecerAC() {
// Implemento función
    document.getElementById("btnDisplay").innerText = "0";
}

// Defino función
function aparecerOperador(valor) {
// Implemento función
    let display = document.getElementById("btnDisplay").innerText;
//    console.log(display.charAt(display.length-1));
    if (esUnOperador(display.charAt(display.length-1)))
        document.getElementById("btnDisplay").innerText = display.replace(/.$/, '');
    document.getElementById("btnDisplay").innerText += valor;
}

function aparecerNumero(valor) {
// Implemento función
    if (document.getElementById("btnDisplay").innerText == "0" || flag == 0)
        document.getElementById("btnDisplay").innerText = valor;
    else
        document.getElementById("btnDisplay").innerText += valor;
    flag = 1;
}

// Defino tipo de variable e instancio con un valor
let btnIgual = document.getElementById("btnIgual");
// Le asigno un evento y la función que debe ejecutar
btnIgual.addEventListener("click", resolverOperacion);

// Defino función
function resolverOperacion() {
// Implemento función
    let contenido = document.getElementById("btnDisplay").innerText;
    flag = 0;
    let numero1 = "";
    let numero2 = "";
    let operador = "";
    for (i=0; i<contenido.length; i++){
        if (operador == "") {
            if (esUnOperador(contenido.charAt(i))) {
                operador = contenido.charAt(i);
            } else {
                numero1 += contenido.charAt(i);
            }
        } else {
            numero2 += contenido.charAt(i);
        }
    }
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    switch(operador){
        case "+":
            document.getElementById("btnDisplay").innerText = numero1 + numero2;
            break;
        case "-":
            document.getElementById("btnDisplay").innerText = numero1 - numero2;
            break;
        case "*":
            document.getElementById("btnDisplay").innerText = numero1 * numero2;
            break;
        case "/":
            document.getElementById("btnDisplay").innerText = numero1 / numero2;
            break;
        case "e":
            document.getElementById("btnDisplay").innerText = calcularExponencial(numero1, numero2);
            break;
        default:
            document.getElementById("btnDisplay").innerText = "Operación pendiente de definir";
            break;
    }
}

function esUnOperador(valor){
    let resultado = false;
    if (valor == "+" || valor == "-" || valor == "*" || valor == "/" || valor == "e")
        resultado = true;
    return resultado;
}

function calcularExponencial(numero1, numero2){
    let resultado = 1;
    if (numero2 != 0){
        resultado = numero1;
        for (i=1; i<numero2; i++){
            resultado *= numero1;
        }
    }
    return resultado;
}