<?php
$dia = 16;
$mes = 11;
$ano = 5;

$abc = $dia + $mes + $ano;

$soma_numero_par = 0;
$soma_numero_impar = 0;

for($i = 1; $i <= $abc; $i++){
    if($i % 2 == 0){
        $soma_numero_par = $soma_numero_par + $i;
    }

    else{
        $soma_numero_impar = $soma_numero_impar + $i;
    }
}

echo "<p>A soma dos números pares é igual a: $soma_numero_par</p>";
echo "<p>A soma dos números ímpares é igual a: $soma_numero_impar</p>";
?>