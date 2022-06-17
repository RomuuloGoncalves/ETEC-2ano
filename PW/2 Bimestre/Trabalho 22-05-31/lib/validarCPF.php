<?php
function verificaCPF($cpf) {

// Verifica se um número foi informado
    if(empty($cpf)) {
        return false;
    }

    // Verifica se o numero de digitos informados é igual a 11 
    if (strlen($cpf) != 11) {
        return false;
    }
    else {   

        for ($tamanho = 9; $tamanho < 11; $tamanho++) {
            $posicao = 0; 
            for ($indice = 0; $indice < $tamanho; $indice++) {
                $posicao += $cpf[$indice] * (($tamanho + 1) - $indice);
            }
            $posicao = ((10 * $posicao) % 11) % 10;
            if ($cpf[$indice] != $posicao) {
                return false;
            }
        }

        return true;
    }
}
?>