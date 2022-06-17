<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="css/bootstrap.css">
	<script src="js/jquery.js"></script>
	<script src="js/bootstrap.js"></script>
	<title>Upload</title>
</head>
<body>
	<div class="jumbotron">
		<h1 class="display-4">Upload de imagens</h1>
		<hr class="my-4">
        <?php
            $arquivo = $_FILES['arquivo']['name'];

            //configuração de upload
            $_UP["dir"] = "img/";
            $_UP["tamanho"] = 1024*1024*1;
            $_UP["extensoes"] = array("png", "gif", "jpg", "jpeg");
            $_UP["renomeia"] = true;

            //tipos de erros de upload do PHP
            $_UP["erros"][0] = "Não houve erros";
            $_UP["erros"][1] = "O arquivo é maior que o limite do PHP";
            $_UP["erros"][2] = "O arquivo é maior que o limite do HTML";
            $_UP["erros"][3] = "O upload foi feito parcialmente";
            $_UP["erros"][4] = "Não foi feito o upload do arquivo";
            $_UP["erros"][6] = "Pasta temporária ausente";
            $_UP["erros"][7] = "Falha ao escrever arquivo em disco";
            $_UP["erros"][8] = "Uma extensão do PHP interrompeu o upload";

            if ($_FILES["arquivo"]["error"] != 0) {
                exit("Não foi possível fazer o opload, erro: ". $_UP["erros"][$_FILES["arquivo"]["error"]]);
            }

            $extensao = pathinfo($arquivo, PATHINFO_EXTENSION);
            if(!array_search($extensao, $_UP["extensoes"])){
        ?>
                <script>alert('Extensão da imagem inválida')</script>
                <meta http-equiv="refresh" content="0;index.php">
        <?php
            } else if($_UP["tamanho"] <= $_FILES["arquivo"]["size"]){
        ?>
                <script>alert('Arquivo maior que o limite de 1 MB')</script>
                <meta http-equiv="refresh" content="0;index.php">
        <?php
            } else{
                $nome_final = ($_UP["renomeia"] === true) ? time().".".$extensao : $arquivo ;
        if (move_uploaded_file($_FILES["arquivo"]["tmp_name"], $_UP["dir"].$nome_final)) {
        ?>
        <div class="btn-group" role="group">
            <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#mostraimg">Visualizar</button>
            <a class="btn btn-primary" href="deletaimg.php?img=<?php echo $nome_final;?>">Apagar</a>
        </div>

        <div class="modal" tabindex="-1" role="dialog" id="mostraimg">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img src="img/<?php echo $nome_final; ?>" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>

        <?php
        } else {

        }

    }
        ?>
	</div>
</body>
</html>