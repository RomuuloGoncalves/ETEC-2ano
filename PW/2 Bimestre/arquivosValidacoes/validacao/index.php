<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Validação de Dados</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.js"></script>
</head>
<body>
    <div class="jumbotron">
        <h1 class="display-4">Validação de Dados</h1>
        <form method="post" action="enviar.php">
            <div class="form-group">
                <label for="nome">Nome: </label>
                <input id="nome" class="form-control" type="text" name="nome">
            </div>
            <div class="form-group">
                <label for="idade">Idade: </label>
                <input id="idade" class="form-control" type="text" name="idade">
            </div>
            <div class="form-group">
                <label for="site">Site: </label>
                <input id="site" class="form-control" type="text" name="site">
            </div>
            <div class="form-group">
                <label for="email">E-mail: </label>
                <input id="email" class="form-control" type="text" name="email">
            </div>
            <div class="form-group">
                <label for="mensagem">Mensagem: </label>
                <textarea id="mensagem" name="mensagem" class="form-control"></textarea> <br>
            </div>
            <button class="btn btn-outline-primary" type="submit">Enviar</button>
            <button class="btn btn-outline-secondary" type="reset">Limpar</button>
        </form>
    </div>
</body>
</html>