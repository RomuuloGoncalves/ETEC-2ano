<?php

function calcularSalarioVendedor($salarioFixo, $valorVendas, $totalVendasMinimo){
    if ($valorVendas > $totalVendasMinimo) {
        $comissao = $totalVendasMinimo * 0.03;
        $comissao5P100 = ($valorVendas - $totalVendasMinimo) * 0.05;
        $salarioTotal = $salarioFixo + $comissao + $comissao5P100;
    } else {
        $comissao = $valorVendas * 0.03;
        $salarioTotal = $salarioFixo + $comissao;
    }
    
    return $salarioTotal;
}

$salarioFixo = 1500;
$valorVendas = 1000;
$totalVendasMinimo = 1500;
$salario = calcularSalarioVendedor($salarioFixo, $valorVendas, $totalVendasMinimo);
echo $salario;

?>