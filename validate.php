<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Captura o código enviado pelo usuário
$code = $_POST['code'] ?? '';

// Define a saída esperada para o nível atual
$expected_output = $_POST['expected_output'] ?? '';

// Função para validar código malicioso
function containsForbiddenFunctions($code) {
    $forbidden = ['exec', 'shell_exec', 'system', 'passthru', 'eval', 'unlink', 'fopen', 'fwrite', 'file_get_contents'];
    foreach ($forbidden as $function) {
        if (strpos($code, $function) !== false) {
            return true;
        }
    }
    return false;
}

// Verifica se o código contém funções perigosas
if (containsForbiddenFunctions($code)) {
    echo json_encode([
        'output' => 'Erro: O código contém funções não permitidas.'
    ]);
    exit;
}

// Captura a saída do código do usuário
ob_start();
try {
    eval($code);  // Executa o código do usuário
    $output = ob_get_clean();  // Captura a saída do eval
} catch (Throwable $e) {
    $output = "Erro: " . $e->getMessage();
}

// Remove espaços extras e quebras de linha para evitar erros triviais
$clean_output = trim($output);
$clean_expected = trim($expected_output);

// Compara a saída gerada pelo código com a saída esperada
if ($clean_output === $clean_expected) {
    echo json_encode([
        'output' => 'Correto!',
        'success' => true
    ]);
} else {
    echo json_encode([
        'output' => $output,  // Mostra a saída real do código
        'success' => false,
        'message' => 'A saída não corresponde à esperada. Revise seu código.'
    ]);
}
?>
