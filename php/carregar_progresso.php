<?php
session_start();
require_once 'conexao.php';

// Verifica se o usuário está logado
if (!isset($_SESSION['usuario_id'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Usuário não autenticado']);
    exit;
}

$usuario_id = $_SESSION['usuario_id'];

// Consulta os progressos do usuário em todos os níveis
$sql = "SELECT progresso_basico, progresso_intermediario, progresso_avancado FROM usuarios WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $usuario_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $progresso = $result->fetch_assoc();
    echo json_encode([
        'progresso_basico' => (int) $progresso['progresso_basico'],
        'progresso_intermediario' => (int) $progresso['progresso_intermediario'],
        'progresso_avancado' => (int) $progresso['progresso_avancado']
    ]);
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Usuário não encontrado']);
}

$stmt->close();
$conn->close();
