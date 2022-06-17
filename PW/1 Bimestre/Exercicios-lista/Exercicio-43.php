<?php
    $array = [];
    $aux = 0;
    for ($i=1; $i <= 10; $i++) { 
        if(($i % 2) !== 0){
            $array[$aux] = $i;
            $aux++;
        }
    }
    

    for ($i=0; $i < count($array); $i++) { 
        echo $array[$i]." <br>";
    }
?>