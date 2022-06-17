<?php
$array1=[30,82,40,83,42,61,40,17,69];
$array2=[6,29,2,12,57,78,53,0,68];
$array3=[15,45,85,45,67,55,46,31,48];

for($i = 0; $i < 3; $i++){
    $array_gerada[$i] =  $array1[$i];

}
for($i = 3; $i < 6; $i++){
    $array_gerada[$i] =  $array2[$i];
    
}
for($i = 6; $i < 9; $i++){
    $array_gerada[$i] =  $array3[$i];
    
}

for($i = 0; $i < 9; $i++){
    echo $array_gerada[$i] . ", ";
    
}
?>