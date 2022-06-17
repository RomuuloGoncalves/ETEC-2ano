<?php
$salarioHora = 100;
$cargaHorariaSemanal = 40;
$cargaHorariaMensal = $cargaHorariaSemanal * 4;
$salarioBase = $salarioHora * $cargaHorariaMensal;
$horasTrabalhadasMes = 180;


if ($horasTrabalhadasMes > $cargaHorariaMensal) {
$quantidadeHoraExtra = $horasTrabalhadasMes - $cargaHorariaMensal; 
$valorHorasExtras = $quantidadeHoraExtra * 1.5;
$salario = $salarioBase + $valorHorasExtras;
} else {
    $salario = $salarioBase;
}
echo "O salário é: $salario";
?>