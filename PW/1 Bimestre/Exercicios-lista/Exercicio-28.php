<?php
    $numero = 5;
    $contador = 0;
    for($i = 1; $i<=10;$i++){
    
        if($numero % $i == 0){
            $contador++;
        }
    }

    if($contador != 2 ){
      echo "O numero não é primo";
    }
    else{
        echo "O numero é primo ";
    }
?>