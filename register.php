<?php
include 'db_connection.php'; // Arquivo com a conexão ao banco de dados

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $senha_confirmacao = $_POST['senha_confirmacao'];

    // Verifica se as senhas coincidem
    if ($senha !== $senha_confirmacao) {
        echo "As senhas não coincidem!";
        exit();
    }

    // Criptografa a senha
    $senha_hash = password_hash($senha, PASSWORD_DEFAULT);

    // Verifica se o email já está cadastrado
    $query_verifica = "SELECT * FROM usuarios WHERE email = ? LIMIT 1";
    $stmt_verifica = $conn->prepare($query_verifica);
    $stmt_verifica->bind_param("s", $email);
    $stmt_verifica->execute();
    $resultado_verifica = $stmt_verifica->get_result();

    if ($resultado_verifica->num_rows > 0) {
        echo "E-mail já registrado!";
        exit();
    }

    // Insere o novo usuário no banco de dados
    $query = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("sss", $nome, $email, $senha_hash);

    if ($stmt->execute()) {
        echo "Usuário registrado com sucesso!";
        header('Location: login.html'); // Redireciona para a página de login
        exit();
    } else {
        echo "Erro ao registrar o usuário!";
    }
}
?>
