<?php
$numero = 7;
echo "$numero! = " ;
for ($i=$numero-1; $i > 0 ; $i--) { 
    $numero*=$i;
    echo " $i";if($i>1){

        echo " * ";
    }
}

echo " => $numero"
?>