<?php
$a=1;
$numero = 11;
$dentro=0;
$fora = 0;
do {
    if($numero>=10 && $numero <=20){
        $dentro++;
    }
    else{
        $fora++;
    }
    //usuario ficará inserindo o número 
    $numero= 31;
    $a++;
} while ($a <= 10);
echo "$dentro números estão entre o intervalo de 10 a 20 <br>";
echo "$fora números não estão entre o intervalo de 10 a 20 <br>";
    
?>