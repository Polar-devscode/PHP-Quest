<?php
session_start();
require_once 'conexao.php';

// Exibir erros (durante desenvolvimento apenas)
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Recebendo dados do formulário
$nome = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';
$senha = $_POST['senha'] ?? '';
$confirmar_senha = $_POST['confirmar_senha'] ?? '';

// Verifica campos obrigatórios
if (empty($nome) || empty($email) || empty($senha) || empty($confirmar_senha)) {
    echo "<script>alert('Preencha todos os campos!'); history.back();</script>";
    exit;
}

// Verifica se as senhas coincidem
if ($senha !== $confirmar_senha) {
    echo "<script>alert('As senhas não coincidem!'); history.back();</script>";
    exit;
}

// Verifica se o e-mail já está cadastrado
$sql_verifica = "SELECT id FROM usuarios WHERE email = ?";
$stmt_verifica = $conn->prepare($sql_verifica);
$stmt_verifica->bind_param("s", $email);
$stmt_verifica->execute();
$stmt_verifica->store_result();

if ($stmt_verifica->num_rows > 0) {
    echo "<script>alert('E-mail já cadastrado!'); history.back();</script>";
    exit;
}

// Criptografa a senha
$senha_hash = password_hash($senha, PASSWORD_DEFAULT);

// Insere o novo usuário com progresso inicial em todos os níveis
$sql = "INSERT INTO usuarios (nome, email, senha, progresso_basico, progresso_intermediario, progresso_avancado) 
        VALUES (?, ?, ?, 0, 0, 0)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $nome, $email, $senha_hash);

if ($stmt->execute()) {
    echo "<script>alert('Cadastro realizado com sucesso!'); window.location.href = '../index.html';</script>";
} else {
    echo "<script>alert('Erro ao cadastrar: " . $stmt->error . "'); history.back();</script>";
}

$conn->close();
