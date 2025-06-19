<?php
require '../vendor/autoload.php';
require 'conexao.php'; // conexão com o banco
// require 'verifica_sessao.php'; // se desejar proteger, senão pode remover

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

    if (!$email) {
        echo json_encode(['erro' => 'E-mail inválido.']);
        exit;
    }

    // Verifica se o e-mail está cadastrado
    $stmt = $conn->prepare("SELECT id FROM usuarios WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 0) {
        echo json_encode(['erro' => 'E-mail não encontrado.']);
        exit;
    }

    // Gera token e expiração
    $token = bin2hex(random_bytes(32));
    $expira = date("Y-m-d H:i:s", strtotime("+1 hour"));

    // Remove tokens antigos (opcional)
    $stmt = $conn->prepare("DELETE FROM password_resets WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();

    // Salva token no banco
    $stmt = $conn->prepare("INSERT INTO password_resets (email, token, expira_em) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $email, $token, $expira);
    $stmt->execute();

    // Cria link de redefinição
    $link = "http://localhost/PHP-Quest/views/resetar_senha.php?token=$token";

    // Envia o e-mail
    $mail = new PHPMailer(true);

    try {
        // Configurações SMTP
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com'; // ou smtp.outlook.com
        // $mail->Host       = 'smtp.office365.com';
        // $mail->Host       = 'smtp.outlook.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'php.quest.aprendizado@gmail.com';
        // $mail->Username   = 'phpquest@outlook.com';
        $mail->Password   = 'Estudephp@2025';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587; // correto para STARTTLS


        // Remetente e destinatário
        $mail->setFrom('php.quest.aprendizado@gmail.com', 'PHP Quest');
        // $mail->setFrom('phpquest@outlook.com', 'PHP Quest');
        $mail->addAddress($email);

        // Conteúdo
        $mail->isHTML(true);
        $mail->Subject = 'Redefinição de senha - PHP Quest';
        $mail->Body    = "Clique no link abaixo para redefinir sua senha:<br><br>
                          <a href='$link'>$link</a><br><br>
                          Este link é válido por 1 hora.";

        $mail->send();
        echo json_encode(['sucesso' => 'E-mail enviado com sucesso!']);
    } catch (Exception $e) {
        echo json_encode(['erro' => "Erro ao enviar e-mail: {$mail->ErrorInfo}"]);
    }
}
?>
