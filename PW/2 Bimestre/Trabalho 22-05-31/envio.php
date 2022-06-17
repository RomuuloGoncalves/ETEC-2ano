<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <title>Validação de Dados</title>
    <link rel="stylesheet" href="css/envio.css">
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.js"></script>
</head>
<body>
    <div class="jumbotron">
        <?php
            // var_dump($_POST);
            include "./lib/validarCPF.php";
            include "./lib/validarTelefone.php";

            $erro = false;
            if(empty($_POST) || !isset($_POST)){
                $erro = "Os campos do fomulário estão vazios";
            }else{


            foreach($_POST as $indice => $valor){
                $valor = trim(strip_tags($valor));
                $$indice = $valor;        
                if(empty($_POST[$indice])){
                    $erro .= "O campo '$indice' está em branco <br>";
                }
            }

            if (!filter_var($email, FILTER_VALIDATE_EMAIL) && !$erro){
                $erro .= "Envie o seu E-mail em um formato válido. Exemplo: usuario@gmail.com<br>";
            }

            if (!filter_var($emailEmpresa, FILTER_VALIDATE_EMAIL) && !$erro){
                $erro .= "Envie o E-mail da empresa em umformato válido. Exemplo: usuario@gmail.com <br>";
            }

            $telefoneValido = verificaTelefone($telefone);

            if(!$telefoneValido && !$erro) {
                $erro .= "O Telefone inserido é inválido. <br>";
            }

            $cpfValido = verificaCPF($cpf);
            if(!$cpfValido && !$erro ){
                $erro .= "O CPF inserido é inválido <br>";
            }
        }


            if ($erro) {
                echo "<div style= 'display:flex; flex-direction:column; 
                ;justify-content: center;'>";
                echo "<h1 style='color:red; font-size: 40px'>Erros:</h1>";
                echo "<b style='font-size:18px; margin-top:0;'>$erro</b>";
                echo "</div>";

            } else {
                echo "<h1>Dados enviados</h1>";
                echo "<ul >";
                foreach ($_POST as $indice => $valor) {
                    $$indice = $valor;
                    echo "<li style = 'margin-bottom:6px; width:max-content; border-bottom:1px solid black'><b>$indice:</b> $valor <br></li>";
                }
                echo "</ul>";

            }

            
        ?>
    </div>
</body>
</html>