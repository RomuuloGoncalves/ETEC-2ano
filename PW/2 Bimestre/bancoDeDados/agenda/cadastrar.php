<?php
require "lib/conn.php";

$erro = false;

foreach($_POST as $indice => $valor){
    $valor = trim(strip_tags($valor));
    $$indice = $valor;

    if(empty($valor)){
        $erro .= "Campo $indice em branco";
    }
}

if(!filter_var($email, FILTER_VALIDATE_EMAIL) && !$erro){
    $erro = "E-mail deve ser no formato nome@domínio";
}

if($erro){
    echo $erro;
}else{
    $sql_contato =  "INSERT INTO contato VALUES(0,:nome,:email,:telefone)";
    $stmt = $conn->prepare($sql_contato);
    $stmt->bindValue(":nome", $nome);
    $stmt->bindValue(":email", $email);
    $stmt->bindValue(":telefone", $telefone);
    $stmt->execute();
    echo "Contato cadastrado com sucesso!";
}
?>

<meta http-equiv="refresh" content="1; url=cadastro.php">