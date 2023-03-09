<?php
/*
	Refactoring 5 Calculator
	Prácticas Profesionalizantes III
	Tecnicatura Superior en Análisis de Sistemas / ISFT 151
	Copyright 2023 ssalgu <sebastiansalgueiro@gmail.com>
*/

//------------ Request Process ----------------

//Recepcionar el cuerpo de la petición bajo método POST
//Decodificar el cuerpo de la petición de origen como JSON
$input = json_decode( file_get_contents('php://input') );

//------------ Model Functions ----------------

// Función que ejecuta la sintaxis de la expresión en el display
function calculate( $expression )
{
	$result = eval( 'return '.$expression.';' );
	
	return $result;
};

//---------- Simulation of requested resource -------------

// Invoca al método para ejecutar la sintaxis pasada por parámetro desde el model (como $input) 
$response = calculate($input);
// La respuesta ($response) es la promesa que reciben el llamado desdel el model (mediante .then),
// con el resultado de la operación y que luego se asigna al display

//-------------------- JSON Response ----------------------
echo json_encode( 'Out of service' );

?>
