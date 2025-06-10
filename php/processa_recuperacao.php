<?php
require 'conexao.php';
require 'enviar_email.php'; // Arquivo com a função de envio de e-mail
session_start();

if (!isset($_POST['email'])) {
    exit("Requisição inválida.");
}

$email = trim($_POST['email']);
$usuario = $conn->prepare("SELECT * FROM usuarios WHERE email = ?");
$usuario->execute([$email]);

if ($usuario->rowCount() === 1) {
    $token = bin2hex(random_bytes(32));
    $expira = date("Y-m-d H:i:s", strtotime("+1 hour"));

    $update = $conn->prepare("UPDATE usuarios SET token_recuperacao = ?, token_expira = ? WHERE email = ?");
    $update->execute([$token, $expira, $email]);

    $link = "http://localhost/seu_sistema_php/resetar_senha.php?token=$token";

    $mensagem = "Clique no link para redefinir sua senha: <a href='$link'>$link</a>";

    if (enviarEmail($email, "Recuperação de Senha", $mensagem)) {
        echo "Link de recuperação enviado para seu e-mail.";
    } else {
        echo "Erro ao enviar e-mail.";
    }
} else {
    echo "E-mail não encontrado.";
}
?>
