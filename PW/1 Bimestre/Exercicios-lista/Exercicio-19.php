<?php
$soma = 0;
$maior=0;
$numero = 42;
$menor = $numero;
for ($i=0; $i < 99 ; $i++) { 
    $numero = 10;
    $soma += $numero;
    if($numero > $maior){
        $maior = $numero;
    }
    if($menor > $numero){
        $menor = $numero;
    }
}

echo "<p>A soma dos número inseridos é: $soma</p>";
echo "<p>O maior número é $maior</p>";
echo "<p>O menor número é $menor</p>";

?>