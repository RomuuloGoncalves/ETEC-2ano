<?php
$numero_1 = 40;
$numero_2 = 25;
$numero_3 = 0;
$numero_4 = 11;

$maior = $numero_1;
$segundo_maior = 0;

// achando o maior número 
if($numero_2 > $maior){
    $maior = $numero_2;
}

if($numero_3 > $maior){
    $maior = $numero_3;

}

if($numero_4 > $maior){
    $maior = $numero_4;
}

// achando o segundo maior número 
if($numero_1 > $segundo_maior && $numero_1 < $maior ){
    $segundo_maior = $numero_1;
}

if($numero_2 > $segundo_maior && $numero_2 < $maior ){
    $segundo_maior = $numero_2;
}

if($numero_3 > $segundo_maior && $numero_3 < $maior ){
    $segundo_maior = $numero_3;
}

if($numero_4 > $segundo_maior && $numero_4 < $maior ){
    $segundo_maior = $numero_4;
}

echo $segundo_maior + $maior;
?>