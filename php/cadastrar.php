<?php
// Conexão com o banco
$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "php_quest";

$conn = new mysqli($host, $usuario, $senha, $banco);

if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

// Recebendo dados do formulário
$nome = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';
$senha = $_POST['senha'] ?? '';
$confirmar_senha = $_POST['confirmar_senha'] ?? '';

// Verifica se as senhas coincidem
if ($senha !== $confirmar_senha) {
    die("As senhas não coincidem!");
}

// Criptografar a senha
$senha_hash = password_hash($senha, PASSWORD_DEFAULT);

// Inserindo no banco
$sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $nome, $email, $senha_hash);

if ($stmt->execute()) {
    echo "Cadastro realizado com sucesso!";
    // Redirecionar para login, por exemplo
    // header("Location: login.html");
} else {
    echo "Erro ao cadastrar: " . $stmt->error;
}

$conn->close();
?>
