<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
</head>
<body>
    <header>
        <nav class="navbar navbar-dark bg-primary">
            <div class="container-fluid">
            <a href="index.php" class="navbar-brand">Home</a>
            </div>
        </nav>
    </header>

    <div class="container">
        <?php
            //var_dump($_POST);
            $numMacas = $_POST["numMacas"];
            if($numMacas >= 12){
                $custoCompra = $numMacas * 1;
            }else{
                $custoCompra = $numMacas * 1.30;
            }
            echo $custoCompra;
        ?>
    </div>
</body>
</html>