<?php
header('Content-Type: application/json');
require_once 'verifica_sessao.php'; // garante que $_SESSION['user_id'] está definido

// Agora você pode usar $_SESSION['user_id'] com segurança
$user_id = $_SESSION['usuario_id'] ?? null;

// Verifica se o ID do usuário está definido
if (!isset($_SESSION['usuario_id'])) {
    echo json_encode(["erro" => "Usuário não autenticado"]);
    exit;
}

$dificuldade = $_POST['dificuldade'] ?? '';
$progresso = $_POST['progresso'] ?? '';

if (!in_array($dificuldade, ['basico', 'intermediario', 'avancado']) || !is_numeric($progresso)) {
    echo json_encode(['erro' => 'Dados inválidos']);
    exit;
}

$progresso = intval($progresso);

try {
    $pdo = new PDO('mysql:host=localhost;dbname=php_quest;charset=utf8', 'root', '');

    $coluna = 'progresso_' . $dificuldade;
    $sql = "UPDATE usuarios SET $coluna = :progresso WHERE id = :user_id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':progresso', $progresso, PDO::PARAM_INT);
    $stmt->bindParam(':user_id', $user_id, PDO::PARAM_INT);
    $stmt->execute();

    echo json_encode(['sucesso' => true]);

} catch (PDOException $e) {
    echo json_encode(['erro' => 'Erro no banco de dados: ' . $e->getMessage()]);
}
