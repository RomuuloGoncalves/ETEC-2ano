<?php
    $img = $_GET["img"];
    unlink("img/" . $img);
?>

<script>
    alert("Imagem apagada com sucesso")
</script>

<meta http-equiv="refresh" content="0; url=index.php">