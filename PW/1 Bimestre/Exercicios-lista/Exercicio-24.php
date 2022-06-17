<?php 
$numero = 0;
$dentro_do_intervalo = 0;
$fora_do_intervalo = 0;

for($i = 0; $i < 10; $i++){
	if ($numero >= 10 && $numero <= 20) {
		$dentro_do_intervalo++;
	} 

	else {
		$fora_do_intervalo++;
	}
}
echo "$dentro_do_intervalo estão dentro do intervalo de 10 e 20 <br>";

echo "$fora_do_intervalo não estão dentro do intervalo de 10 e 20 <br>";

?>