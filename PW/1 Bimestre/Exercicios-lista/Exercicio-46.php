<?php
$array=[ 41,83,14,19,65, 7,20,65,94,70
,57,32,50, 7,70,44,94,68,14,51
,31,93,63,11,86,19,78,18, 4,75
,10,45,57,24,65,22,32,86,87,26
];

$contagem = 0;

for($i = 0; $i < 40; $i++){
    if($array[$i] % 2 === 0){
        $contagem++;
    }

}

echo "Esse vetor contém $contagem números pares"
?>