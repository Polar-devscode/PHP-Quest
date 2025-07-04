<?php
require '../php/conexao.php';

$token = $_GET['token'] ?? '';
$tokenValido = false;

// Verifica no banco se o token é válido e não expirou
if (!empty($token)) {
    $consulta = $conn->prepare("SELECT * FROM usuarios WHERE token_recuperacao = ? AND token_expira > NOW()");
    $consulta->execute([$token]);
    if ($consulta->rowCount() === 1) {
        $tokenValido = true;
    }
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Redefinir Senha - PHP Quest</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #1e1e1e;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .reset-container {
            background: #2d2d2d;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            width: 360px;
            color: white;
        }
        h2 {
            margin-bottom: 20px;
            text-align: center;
            color: #007bff;
        }
        label {
            display: block;
            margin-top: 12px;
            font-weight: bold;
        }
        input {
            background-color: #333;
            width: 100%;
            padding: 8px;
            margin-top: 4px;
            border-radius: 5px;
            border: 1px solid #ccc;
            color: white;
        }
        button {
            margin-top: 20px;
            width: 100%;
            background-color: #3498db;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: bold;
        }
        button:hover {
            background-color: #2980b9;
        }
        .mensagem {
            text-align: center;
            color: red;
        }
    </style>
</head>
<body>

<div class="reset-container">
    <?php if (!$tokenValido): ?>
        <h2>Redefinir Senha</h2>
        <form action="php/atualiza_senha.php" method="POST">
            <input type="hidden" name="token" value="<?= htmlspecialchars($token) ?>">
            
            <label>Nova Senha:</label>
            <input type="password" name="nova_senha" required>

            <label>Confirme a Senha:</label>
            <input type="password" name="confirma_senha" required>

            <button type="submit">Redefinir Senha</button>
        </form>
    <?php else: ?>
        <div class="mensagem">
            <h2>Link inválido ou expirado</h2>
            <p>Solicite uma nova recuperação de senha.</p>
        </div>
    <?php endif; ?>
</div>

</body>
</html>
