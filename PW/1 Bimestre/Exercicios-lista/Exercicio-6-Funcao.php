<?php
function calcularSalario($salarioHora, $cargaHorariaSemanal, $cargaHorariaMensal, $salarioBase, $horaTrabalhadasMes){
    if ($horaTrabalhadasMes > $cargaHorariaMensal) {
    $quantidadeHoraExtra = $horaTrabalhadasMes - $cargaHorariaMensal; 
    $valorHorasExtras = $quantidadeHoraExtra * 1.5;
    $salario = $salarioBase + $valorHorasExtras;
    } 
    else {
        $salario = $salarioBase;
    }

    return $salario;
}

$salarioHora = 100;
$cargaHorariaSemanal = 40;
$cargaHorariaMensal = $cargaHorariaSemanal * 4;
$salarioBase = $salarioHora * $cargaHorariaMensal;
$horaTrabalhadasMes = 180;


$salario = calcularSalario($salarioHora, $cargaHorariaSemanal, $cargaHorariaMensal, $salarioBase, $horaTrabalhadasMes);

echo $salario;
?>
