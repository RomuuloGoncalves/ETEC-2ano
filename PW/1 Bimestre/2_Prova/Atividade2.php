<?php
$A = 16;
$B = 11;
$C = 05;

$codigoCargo = $C;
$nome = "Rômulo";
$idade = 80;
$tempoContribuicao = $A + $B;
// sexo M ou F
$sexo = "M";

if($codigoCargo === 1){
    $cargo = "Trabalhador Rural";
    
    if($sexo = "M"){
        if($tempoContribuicao >= 15 && $idade >= 60){
            $aposentar = "O trabalhador está habilitado  a se aposentar";
        }
        else{
            $aposentar = "O trabalhador não está habilitado  a se aposentar";
        }
    }

    if($sexo = "F"){
        if($tempoContribuicao >= 15 && $idade >= 55){
            $aposentar = "O trabalhador está habilitado  a se aposentar";
        }
        else{
            $aposentar = "O trabalhador não está habilitado a se aposentar";
        }
    }
}

if($codigoCargo === 2){
    $cargo = "Trabalhador Geral";

    if($sexo = "M"){
        if($tempoContribuicao >= 20 && $idade >= 65){
            $aposentar = "O trabalhador está habilitado a se aposentar";
        }
        else{
            $aposentar = "O trabalhador não está habilitado a se aposentar";
        }
    }

    if($sexo = "F"){
        if($tempoContribuicao >= 20 && $idade >= 62){
            $aposentar = "O trabalhador está habilitado a se aposentar";
        }
        else{
            $aposentar = "O trabalhador não está habilitado a se aposentar";
        }
    }
}

if($codigoCargo === 3){
    $cargo = "Político";

    if($sexo = "M"){
        if($tempoContribuicao >= 20 && $idade >= 65){
            $aposentar = "O trabalhador está habilitado a se aposentar";
        }
        else{
            $aposentar = "O trabalhador não está habilitado a se aposentar";
        }
    }

    if($sexo = "F"){
        if($tempoContribuicao >= 20 && $idade >= 62){
            $aposentar = "O trabalhador está habilitado a se aposentar";
        }
        else{
            $aposentar = "O trabalhador não está habilitado a se aposentar";
        }
    }
}

if($codigoCargo === 4){
    $cargo = "Servidor Público";
    if($sexo = "M"){
        if($tempoContribuicao >= 25 && $idade >= 65){
            $aposentar = "O trabalhador está habilitado a se aposentar";
        }
        else{
            $aposentar = "O trabalhador não está habilitado a se aposentar";
        }
    }

    if($sexo = "F"){
        if($tempoContribuicao >= 25 && $idade >= 62){
            $aposentar = "O trabalhador está habilitado a se aposentar";
        }
        else{
            $aposentar = "O trabalhador não está habilitado a se aposentar";
        }
    }
}

if($codigoCargo === 5){
    $cargo = "Policial";
    if($sexo = "M"){
        if($tempoContribuicao >= 30 && $idade >= 55){
            $aposentar = "O trabalhador está habilitado a se aposentar";
        }
        else{
            $aposentar = "O trabalhador não está habilitado  a se aposentar";
        }
    }

    if($sexo = "F"){
        if($tempoContribuicao >= 25 && $idade >= 55){
            $aposentar = "O trabalhador está habilitado  a se aposentar";
        }
        else{
            $aposentar = "O trabalhador não está habilitado  a se aposentar";
        }
    }
}

echo "Nome: $nome <br>";
echo "Cargo: $cargo <br>";
echo "Tempo Contribuição: $tempoContribuicao anos <br>";
echo "Idade do Trabalhador: $idade anos <br>";
echo "Mensagem: $aposentar <br>";

?>