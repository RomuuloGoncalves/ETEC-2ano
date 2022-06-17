<?php 
require "lib.conn.php";
$id = (int)$_GET["id"];
$sqlSelect = "SELECT * FROM contato WHERE id = :id";
$stmt = $conn -> prepare($sqlSelect);
$stmt->bindValue(":id", $id);
$stmt->execute();
$contato = $stmt->fetch(PDO::FETCH_OBJ);
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Agenda</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.js"></script>
</head>
<body>
    <div class="jumbotron justify-content-center">
        <a href="listar.php" class="btn btn-outline-primary rounded-pill mb-3">Voltar</a>
        <form action="edita.php" method="POST" class="form-inline">
            <input type="hidden" name="id" value="<?=$contato->id?>">
            <label class="sr-only" for="nome">Nome</label>
            <input type="text" name="nome" id="nome" placeholder="Nome" class="form-control mr-2" value="<?=$contato->nome?>">
            <label class="sr-only" for="telefone">Telefone</label>
            <input type="text" name="telefone" id="telefone" placeholder="Telefone" class="form-control mr-2" value="<?=$contato->telefone?>">
            <label class="sr-only" for="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="E-mail" class="form-control mr-2" value="<?=$contato->email?>">
            <button type="submit" class="btn btn-outline-primary rounded-pill">Alterar</button>
        </form>
    </div>

</body>
</html>