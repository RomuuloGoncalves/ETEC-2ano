<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Data</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
</head>
<body>
  <header>
    <nav class="navbar navbar-dark bg-success">
      <div class="container-fluid">
        <a href="index.php" class="navbar-brand">Home</a>
      </div>
    </nav>
  </header>

  <div class="container">
    <form action="resultado.php" method="post" class="row row-cols-lg-auto g-3 align-items-center my-3">
      <div class="col-6">
        <label for="dtnascimento" class="form-label">Data de Nascimento: </label>
        <input type="date" name="dtnascimento" id="dtnascimento" max="<?= date("Y-m-d",time()) ?>" class="form-control" required>
      </div>
      <div class="col-6">
        <button type="submit" class="btn btn-outline-success">Enviar</button>
      </div>
    </form>
  </div>
</body>
</html>