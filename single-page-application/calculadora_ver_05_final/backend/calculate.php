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

function calculate( $expression )
{
	$result = eval( 'return '.$expression.';' );
	
	return $result;
};

//---------- Simulation of requested resource -------------

$response = calculate($input);

//-------------------- JSON Response ----------------------
echo json_encode( 'Out of service' );

?>