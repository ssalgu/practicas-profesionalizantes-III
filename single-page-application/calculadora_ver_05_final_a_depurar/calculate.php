<?php

$input = json_decode( file_get_contents( 'php://input'));

function calculate( $expression )
{
	$result = eval( 'return '.$expression.';');
	
	return $result;
}

$response = calculate( $input );

echo json_encode($response);

?>