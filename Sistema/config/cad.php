<?php
//Configuração do banco de dados

$host = "localhost";
$user = "root";
$pass = ""; //senha do MySQL (alterar se necessário)
$dbname = "cadastro_produtos";

//Conexão com o banco
$conn = new mysqli($host, $user, $pass, $dbname);

//Verifica a conexão
if($conn->connect_error){
    die("Conexão falhou: " . $conn->connect_error);
}

echo("Conectado!"); //print

//Captura e valida os dados
$produto = trim($_POST['produto'] ?? '');
$preco = floatval($_POST['preco'] ?? 0);
$quantidade = intval($_POST['quantidade'] ?? 0);
$total = floatval($_POST['total'] ?? 0);

if($produto === "" || $preco < = 0 || $quantidade <= 0){
    echo "Dados inválidos!";
    exit;
}

//Preparação a inserção
$stmt = $conn->prepare("INSERT INTO produtos (produto, preco, quantidade, total) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssid", $produto, $preco, $quantidade, $total);

//Executa a verifica
if($stmt, t->execute()){
    echo "Cadastro realizado com sucesso!";
} else{
    echo "Erro ao cadastrar: ". $stmt->error;
}

$stmt->close();
$conn->close();
?>