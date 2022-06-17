<?php
    $array = array(2,2,3,4,7,4,4,5,8,1);

    for ($i=0; $i < count($array) ; $i++) { 
        for ($a=0; $a < count($array); $a++) { 
            if ($array[$i] === $array[$a]) {
                echo $array[$i];
            }
        }
    }
?>