<?php
require 'conexao.php';

$token = $_POST['token'] ?? '';
$nova = $_POST['nova_senha'] ?? '';
$confirma = $_POST['confirma_senha'] ?? '';

if ($nova !== $confirma) {
    exit("As senhas não coincidem.");
}

$consulta = $conn->prepare("SELECT id FROM usuarios WHERE token_recuperacao = ? AND token_expira > NOW()");
$consulta->execute([$token]);

if ($consulta->rowCount() !== 1) {
    exit("Token inválido ou expirado.");
}

$usuario = $consulta->fetch();
$novaHash = password_hash($nova, PASSWORD_DEFAULT);

$update = $conn->prepare("UPDATE usuarios SET senha = ?, token_recuperacao = NULL, token_expira = NULL WHERE id = ?");
$update->execute([$novaHash, $usuario['id']]);

echo "Senha redefinida com sucesso.";
?>
