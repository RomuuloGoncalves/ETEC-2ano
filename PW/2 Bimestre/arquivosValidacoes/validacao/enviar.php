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
        <?php
            $erro = false;
            if(empty($_POST) || !isset($_POST)){
                $erro = "Dados vazios";
            }

            #var_dump($_POST);

            foreach($_POST as $indice => $valor){
                $valor = trim(strip_tags($valor));
                $$indice = $valor;        
                if(empty($_POST[$indice])){
                    $erro .= "Campo $indice em branco <br>";
                }
            }

            if(!is_numeric($idade) && !$erro ){
                $erro = "A idade deve ser um valor numérico";
            }

            if(($idade < 0) || (!ctype_digit($idade)) && !$erro){
                $erro = "A idade deve ser um valor inteiro e maior ou igual que 0";
            }

            if (!filter_var($site, FILTER_VALIDATE_URL) && !$erro){
                $erro = "Envie um site no formato válido";
            }

            if (!filter_var($email, FILTER_VALIDATE_EMAIL) && !$erro){
                $erro = "Envie um e-mail no formato válido";
            }

            if ($erro) {
                echo $erro;
            } else {
                echo "Dados enviados";
                foreach ($_POST as $indice => $valor) {
                    $$indice = $valor;
                    echo "$indice: $valor <br>";
                }
            }
            
        ?>
    </div>
</body>
</html>