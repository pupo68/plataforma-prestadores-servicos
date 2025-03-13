// Função para validar o formulário antes de enviar
function validarFormulario() {
    // Obtém os valores inseridos nos campos de nome, email e telefone
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    // Expressão regular para validar o nome (apenas letras e espaços)
    const nomeRegex = /^[A-Za-zÀ-ÿ\s]+$/;
    // Expressão regular para validar o formato do email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Expressão regular para validar o formato do telefone (ex: 12-12345-6789)
    const telefoneRegex = /^\d{2}-\d{5}-\d{4}$/;

    // Verifica se o valor do nome corresponde ao formato esperado (apenas letras e espaços)
    if (!nomeRegex.test(nome)) {
        // Exibe um alerta se o formato do nome for inválido
        alert("O nome deve conter apenas letras e espaços.");
        return false; // Impede o envio do formulário se o nome for inválido
    }

    // Verifica se o valor do email corresponde ao formato esperado
    if (!emailRegex.test(email)) {
        // Exibe um alerta se o formato do email for inválido
        alert("Formato de email inválido! Exemplo de formato correto: exemplo@dominio.com");
        return false; // Impede o envio do formulário se o email for inválido
    }

    // Verifica se o valor do telefone corresponde ao formato esperado
    if (!telefoneRegex.test(telefone)) {
        // Exibe um alerta se o formato do telefone for inválido
        alert("Formato do telefone inválido! Use o formato: 12-12345-6789");
        return false; // Impede o envio do formulário se o telefone for inválido
    }

    return true; // Permite o envio do formulário se todos os campos estiverem corretos
}


// Função para enviar dados sem redirecionamento e armazená-los no localStorage
function enviarDados() {
    // Verifica se o formulário está válido
    if (validarFormulario()) {
        // Captura os valores do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;

        // Armazena os dados no localStorage como uma string JSON
        localStorage.setItem('formData', JSON.stringify({ nome, email, telefone }));

        // Exibe uma mensagem de sucesso
        alert("Dados enviados com sucesso!");

        // Limpa o formulário
        document.getElementById('contactForm').reset();
    }
}

// Função para exibir os dados armazenados na página formAction.html
function exibirDados() {
    // Obtém os dados armazenados no localStorage
    const dados = JSON.parse(localStorage.getItem('formData'));
    // Se houver dados armazenados, exibe-os na página
    if (dados) {
        document.getElementById('dadosRecebidos').innerHTML = `
            <strong>Nome:</strong> ${dados.nome || "Não informado"} <br>
            <strong>Email:</strong> ${dados.email || "Não informado"} <br>
            <strong>Telefone:</strong> ${dados.telefone || "Não informado"}
        `;
    }
}

// Executa a função exibirDados apenas se estiver na página formAction.html
if (window.location.pathname.includes("formAction.html")) {
    exibirDados();
}
// ---- Carrossel ----

// Seleciona todos os itens do carrossel e configura o índice inicial
const items = document.querySelectorAll('.carousel-item');
const carouselDescription = document.getElementById('carousel-description');

// Array de descrições para cada item do carrossel
const descriptions = [
    "Capturamos o amor e a emoção do seu dia especial com imagens atemporais.",
    "Registros únicos que destacam a beleza e a personalidade do seu debut.",
    "Fotos profissionais que capturam a essência e o sucesso do seu evento.",
    "Momentos inesquecíveis com a família, guardados para sempre em imagens.",
    "Retratos impactantes que refletem seu estilo e personalidade."
];

let currentIndex = 0; // Índice do item atualmente ativo

// Função para atualizar as classes dos itens do carrossel e a descrição ativa
function updateCarousel() {
    // Remove as classes de cada item
    items.forEach((item, index) => {
        item.classList.remove('prev', 'active', 'next');
        
        // Define a classe do item com base na posição em relação ao item ativo
        if (index === currentIndex) {
            item.classList.add('active'); // Item ativo
            carouselDescription.textContent = descriptions[index]; // Atualiza a descrição
        } else if (index === (currentIndex - 1 + items.length) % items.length) {
            item.classList.add('prev'); // Item anterior
        } else if (index === (currentIndex + 1) % items.length) {
            item.classList.add('next'); // Próximo item
        }
    });
}

// Adiciona evento de clique ao botão 'Próximo' para avançar o carrossel
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Incrementa o índice e garante que ele volte ao início
    updateCarousel(); // Atualiza o carrossel
});

// Adiciona evento de clique ao botão 'Anterior' para retroceder o carrossel
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Decrementa o índice e garante que ele volte ao fim
    updateCarousel(); // Atualiza o carrossel
});

// Inicializa o carrossel exibindo o primeiro item como ativo
updateCarousel();
