<?php
//usuario informa a data de nascimento
$ano_nacimento = 2017;
$ano_atual = 2022;
if($ano_atual - $ano_nacimento >= 16){
    echo "Você já pode votar";
}

else{
    echo "Você ainda não pode votar";
}
?>