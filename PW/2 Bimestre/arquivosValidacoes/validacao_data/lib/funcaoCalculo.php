<?php
    function calculoIdade($dtnasc){
        $datanasc = new DateTime($dtnasc);
        $idade = $datanasc -> diff(new DateTime()); #diff pega a diferença entre as datas
        return $idade -> format("%y");
    };
?>