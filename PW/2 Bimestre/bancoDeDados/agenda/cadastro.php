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
        <a href="index.php" class="btn btn-outline-primary rounded-pill mb-3">Voltar</a>
        <form action="cadastrar.php" method="POST" class="form-inline">
            <label class="sr-only" for="nome">Nome</label>
            <input type="text" name="nome" id="nome" placeholder="Nome" class="form-control mr-2">
            <label class="sr-only" for="telefone">Telefone</label>
            <input type="text" name="telefone" id="telefone" placeholder="Telefone" class="form-control mr-2">
            <label class="sr-only" for="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="E-mail" class="form-control mr-2">
            <button type="submit" class="btn btn-outline-primary rounded-pill">Cadastrar</button>
        </form>
    </div>

</body>
</html>