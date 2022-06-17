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
		<h1 class="display-4">Carregar a foto</h1>
		<hr class="my-4">
		<form method="POST" action="upload.php" enctype="multipart/form-data">
			<div class="input-group mb-3">
				<div class="input-group-prepend">
					<span class="input-group-text">Upload</span>
				</div>
				<div class="custom-file">
					<input type="file" class="custom-file-input" name="arquivo" id="inputGroupFile">
					<label class="custom-file-label" for="inputGroupFile">Escolha o arquivo</label>
				</div>
			</div>
			<button class="btn btn-primary" type="submit">Enviar</button>
		</form>
	</div>
</body>
</html>