<?php
session_start();
include 'db_connection.php'; // Arquivo com a conexão ao banco de dados

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // Consulta para verificar o usuário no banco
    $query = "SELECT * FROM usuarios WHERE email = ? LIMIT 1";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Verifica a senha (criptografada)
        if (password_verify($senha, $user['senha'])) {
            $_SESSION['user_id'] = $user['id']; // Salva o ID do usuário na sessão
            header('Location: dashboard.php'); // Redireciona para o dashboard
            exit();
        } else {
            echo "Senha incorreta!";
        }
    } else {
        echo "Usuário não encontrado!";
    }
}
?>
