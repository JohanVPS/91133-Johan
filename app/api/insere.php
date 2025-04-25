<?php
session_start();
include 'conexao.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST'){
    header("Location: http://localhost:8081/app/index.html");
    exit;
}

if (!isset($_POST['produto'], $_POST['tipo'], $_POST['quantidade'])) {
    die("Erro: dados não enviados corretamente.");
}

$produto = $_POST['produto'];
$tipo = $_POST['tipo'];
$quantidade = intval($_POST['quantidade']); // garante que seja inteiro

$sql = "INSERT INTO produtos (produto, tipo, quantidade) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    die("Erro na preparação: " . $conn->error);
}

$stmt->bind_param("ssi", $produto, $tipo, $quantidade);

if (!$stmt->execute()) {
    die("Erro na execução: " . $stmt->error);
}

$stmt->close();
$conn->close();
echo "Produto inserido com sucesso!";
?>
