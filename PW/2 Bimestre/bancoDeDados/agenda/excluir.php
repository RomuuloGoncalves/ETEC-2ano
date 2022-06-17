<?php
$id = (int)$_GET['id'];
require "lib/conn.php";
$sqlExcluir = "DELETE FROM contato WHERE id = :id";
$stmt = $conn->prepare($sqlExcluir);
$stmt->bindValue(':id',$id);
$stmt->execute();
?>
<script>
    alert("Registro excluído com sucesso")
</script>
<meta http-equiv="refresh" content="0; url=listar.php">