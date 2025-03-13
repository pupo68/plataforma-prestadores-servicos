<?php
session_start();

// Verifica se o usuário está logado
if (!isset($_SESSION['user_id'])) {
    header('Location: login.html'); // Redireciona para o login se não estiver autenticado
    exit();
}

// Inclui a conexão com o banco
include 'db_connection.php';

// Busca os dados do usuário logado
$query = "SELECT * FROM usuarios WHERE id = ? LIMIT 1";
$stmt = $conn->prepare($query);
$stmt->bind_param("i", $_SESSION['user_id']);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Bem-vindo, <?php echo htmlspecialchars($user['nome']); ?>!</h1>
    <p>Você está autenticado no sistema.</p>
    <a href="logout.php">Sair</a>
</body>
</html>
