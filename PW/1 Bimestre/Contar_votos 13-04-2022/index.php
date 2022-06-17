<?php
$totalVotos = rand(50,100);

for ($i=1; $i <= $totalVotos; $i++) { 
  $votacao[$i] = rand(1,6);
}

//Insira seu código a partir daqui:

$qtdCandidato1 = 0;
$qtdCandidato2 = 0;
$qtdCandidato3 = 0;
$qtdCandidato4 = 0;

$votosBrancos = 0;
$votosNulos = 0;
$votosValidos = 0;


for($i = 1; $i <= $totalVotos; $i++){
  if ($votacao[$i] === 1) {
    $qtdCandidato1++;
  } 
  if ($votacao[$i] === 2) {
    $qtdCandidato2++;
  } 
  if ($votacao[$i] === 3) {
    $qtdCandidato3++;
  } 
  if ($votacao[$i] === 4) {
    $qtdCandidato4++;
  }
  if($votacao[$i] === 5){
    $votosNulos++;
  }

  if($votacao[$i] === 6){
    $votosBrancos++;
  }

  // if ($votacao[$i] > 0 && $votacao[$i] < 5) {
  //   $votosValidos++;
  // }
}

$votosValidos = $qtdCandidato1 + $qtdCandidato2 + $qtdCandidato3 + $qtdCandidato4 ;

echo "<p> Votos para cada candidato: </p>";
echo "<ul> <li>Candidato 1: $qtdCandidato1 votos</li> <li>Candidato 2: $qtdCandidato2 votos</li> <li>Candidato 3: $qtdCandidato3 votos</li> <li>Candidato 4: $qtdCandidato4 votos</li> </ul>";
echo "<p>Total de votos nulos $votosNulos </p>";
echo "<p>Total de votos em branco $votosBrancos </p>";
echo "<p>Total de votos válidos $votosValidos </p>";
?>