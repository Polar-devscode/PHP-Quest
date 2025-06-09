<?php
session_start();
require_once 'conexao.php';

$email = $_POST['email'] ?? '';
$senha = $_POST['senha'] ?? '';

// Validação simples
if (empty($email) || empty($senha)) {
    echo "<script>alert('Preencha todos os campos!'); window.location.href='../index.html';</script>";
    exit;
}

// Buscar usuário pelo e-mail
$sql = "SELECT id, nome, senha, progresso_basico, progresso_intermediario, progresso_avancado FROM usuarios WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $usuario = $result->fetch_assoc();

    // Verificar senha
    if (password_verify($senha, $usuario['senha'])) {
        // Sucesso no login - salvar dados na sessão
        $_SESSION['usuario_id'] = $usuario['id'];
        $_SESSION['usuario_nome'] = $usuario['nome'];
        $_SESSION['progresso_basico'] = $usuario['progresso_basico'] ?? 0;
        $_SESSION['progresso_intermediario'] = $usuario['progresso_intermediario'] ?? 0;
        $_SESSION['progresso_avancado'] = $usuario['progresso_avancado'] ?? 0;

        // Redireciona para a interface principal
        header("Location: ../views/game.html");
        exit;
    } else {
        echo "<script>alert('Senha incorreta!'); window.location.href='../index.html';</script>";
    }
} else {
    echo "<script>alert('Usuário não encontrado!'); window.location.href='../index.html';</script>";
}

$conn->close();
