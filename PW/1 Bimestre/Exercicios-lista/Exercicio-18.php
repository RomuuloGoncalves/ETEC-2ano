<?php
// O usuario ficaria colocando o valor da variavel $numero
$contar_negativos = 0;
    for($i = 0; $i<10; $i++){
        $numero = -4;
        if($numero < 0){
            $contar_negativos++;
        }
    }

    echo $contar_negativos
?>