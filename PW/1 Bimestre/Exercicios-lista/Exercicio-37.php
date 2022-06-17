<?php

$numero_multiplicar;
$numero_multiplicador;


for($numero_multiplicar = 1; $numero_multiplicar <= 10; $numero_multiplicar++){
    echo "Tabuada do $numero_multiplicar <br>";
    for($numero_multiplicador = 0; $numero_multiplicador <= 10; $numero_multiplicador++){
        echo "$numero_multiplicar X $numero_multiplicador = ".$numero_multiplicar*$numero_multiplicador . "<br>";
    }
    echo "<br>";
}
?>