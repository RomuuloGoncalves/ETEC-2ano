<?php
$array = [45,44,35,46,100,98,77,29,88,46,26,96,96,55,55,21,83,33,71,90,37,48,8,37,46,32,100,24,35,74,3,35,38,88,41,57,14,70,39,2,78,16,4,76,96,24,75,53,68,88,36,92,66,54,25,32,14,46,98,43,2,86,19,54,47,83,53,41,35,7,94,46,46,63,99,51,59,20,56,53,57,88,39,89,32,30,52,52,87,57,52,36,37,91,48,31,34,73,0,99,27];
$somaPar =0;
$somaImpar =0;
$contarPar= 0;
$contarImpar= 0;
for ($i=0; $i <=100 ; $i++) { 
    if($array[$i] % 2 === 0){
        $somaPar+=$array[$i];
        $contarPar++;
    }
    else{
        $somaImpar+=$array[$i];
        $contarImpar++;
    }
}

$mediaPar = $somaPar / $contarPar;
$mediaImpar = $somaImpar / $contarImpar;
echo "<p>A soma dos valores pares é $somaPar </p>";
echo "<p>A média dos valores pares é $mediaPar</p>";
echo "<p>A soma dos valores impares é $somaImpar </p>";
echo "<p>A média dos valores impares é $mediaImpar</p>";

?>