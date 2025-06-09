<?php
$servidor = "localhost";
$usuario = "root";
$senha = ""; // padrão do XAMPP
$banco = "php_quest";

$conn = new mysqli($servidor, $usuario, $senha, $banco);

// Verifica se houve erro
if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}
?>
