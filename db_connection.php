<?php
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'site_fotografia';

$conn = new mysqli($host, $user, $password, $database);

// Verifica se houve erro na conexão
if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}
?>
