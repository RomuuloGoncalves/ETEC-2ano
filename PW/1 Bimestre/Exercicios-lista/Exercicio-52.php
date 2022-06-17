<?php

$matriz = [];

for($i = 0; $i < 5; $i++){
$matriz[$i] = [];
}

for($l = 0; $l < 5; $l++){
    for($c = 0; $c < 5; $c++){
        if($l === $c){

            $matriz[$l][$c] = 1;
        }
        else{
            $matriz[$l][$c] = 0;

        }
    }
}
echo "<table style='border: 2px solid black'>";
for($l = 0; $l < 5; $l++){
    echo "<tr style='border: 2px solid black'>";
    for($c = 0; $c < 5; $c++){
        echo "<td style='border: 2px solid black; padding:2px; font-size: 20px'>" . $matriz[$l][$c] . "</td>";

    }

    echo "</tr>";
}

echo "</table>";

?>