<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$code = $_POST['code'] ?? '';

ob_start();
try {
    eval($code);
    $output = ob_get_clean();
} catch (Throwable $e) {
    $output = "Erro: " . $e->getMessage();
}

echo json_encode([
  'output' => $output
]);
?>
