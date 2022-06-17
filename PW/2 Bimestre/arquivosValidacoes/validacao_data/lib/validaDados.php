<?php
    function validaDados($dados){
        $erro = false;
        if(!isset($dados) || empty($dados)){
            $erro = "Dados vazios";

            return $erro;
        }

        foreach($dados as $indice => $valor){
            $valor = trim(strip_tags($valor));
            if (empty($valor)) {
                $erro .= "Campo $indice em branco <br>";
            }
        }

        return $erro;
    }

    function validaData($dtnasc){
        $arrayDate = explode("-" ,$dtnasc);
        if(checkdate($arrayDate[1], $arrayDate[2], $arrayDate[0])){
            return true;
        }
    }
?>