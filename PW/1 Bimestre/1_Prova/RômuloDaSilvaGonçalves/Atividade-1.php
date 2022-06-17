<?php
$codigo = 105;
$quantidade = 1;

if($codigo == 100){
    $preco = $quantidade * 1.20;
}

if($codigo == 101){
    $preco = $quantidade * 1.30;
}

if($codigo == 102){
    $preco = $quantidade * 1.50;
}

if($codigo == 103){
    $preco = $quantidade * 1.20;
}

if($codigo == 104){
    $preco = $quantidade * 1.30;
}

if($codigo == 105){
    $preco = $quantidade * 1.00;
}

echo "O valor a ser pago é de $preco reais";
?>