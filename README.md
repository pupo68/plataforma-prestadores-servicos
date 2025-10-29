# 🧰 Plataforma Web para Prestadores de Serviços

## 🎯 Sobre o Projeto
Aplicação web full-stack para gestão de prestadores de serviços e solicitações de clientes. O sistema oferece autenticação, controle de acesso, dashboard administrativo, cadastro/edição de serviços e fluxo completo de solicitações, demonstrando competências em frontend, backend e integração com banco de dados relacional.

## ✨ Funcionalidades
- Autenticação de usuários (login, registro e sessão)
- Controle de acesso por perfil (admin x prestador)
- Cadastro, edição e exclusão de serviços
- Catálogo de serviços com busca e filtros
- Solicitação de serviços por clientes (formulário guiado)
- Dashboard com métricas e indicadores
- Página institucional (Sobre) e navegação responsiva
- Integração com banco de dados (MySQL)

## 🛠️ Tecnologias Utilizadas
- Frontend: HTML5, CSS3, JavaScript (ES6)
- Backend: PHP 7+
- Banco de Dados: MySQL
- Estrutura de pastas: assets (css/js/images), páginas PHP, templates HTML

## 🗂️ Estrutura do Projeto
```
plataforma-prestadores-servicos/
├── index.html              # Página inicial / landing page
├── login.php               # Autenticação de usuários
├── register.php            # Cadastro de usuários
├── dashboard.php           # Painel administrativo
├── form.html               # Formulário de solicitação de serviço
├── sobre.html              # Página institucional
├── db_connection.php       # Conexão e credenciais do banco
├── assets/
│   ├── css/                # Estilos e temas
│   ├── js/                 # Scripts e interações
│   └── images/             # Imagens e ícones
└── README.md
```

## 🧩 Modelagem de Dados (Exemplo)
```sql
-- Tabela de usuários
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(120) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('admin','provider') DEFAULT 'provider',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de serviços
CREATE TABLE services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(120) NOT NULL,
  description TEXT,
  price DECIMAL(10,2),
  category VARCHAR(60),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Tabela de solicitações
CREATE TABLE requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  service_id INT NOT NULL,
  client_name VARCHAR(100) NOT NULL,
  client_email VARCHAR(120) NOT NULL,
  details TEXT,
  status ENUM('pending','in_progress','done','canceled') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (service_id) REFERENCES services(id)
);
```

## ⚙️ Configuração e Execução

### Requisitos
- PHP 7.4+
- MySQL 5.7+ ou MariaDB
- Servidor local (XAMPP, WAMP, Laragon) ou PHP embutido

### Passo a passo
1) Clone o repositório
```bash
git clone https://github.com/pupo68/plataforma-prestadores-servicos.git
cd plataforma-prestadores-servicos
```
2) Crie o banco e as tabelas (exemplo acima)
3) Configure as credenciais no arquivo `db_connection.php`
```php
$host = 'localhost';
$db   = 'prestadores';
$user = 'root';
$pass = 'root';
```
4) Inicie o servidor
- Via XAMPP/WAMP: coloque o projeto na pasta htdocs/www
- Via PHP embutido:
```bash
php -S localhost:8000
```
5) Acesse no navegador: `http://localhost:8000` (ou via localhost do seu servidor)

## 🔐 Boas Práticas de Segurança
- Use hashing seguro para senhas (password_hash/password_verify)
- Proteja endpoints sensíveis com verificação de sessão/role
- Valide e sanitize inputs (filter_input, prepared statements)
- Configure `.env` (ou equivalente) para credenciais
- Desabilite exibição de erros em produção

## 📊 Dashboard e Métricas (Sugestões)
- Total de serviços cadastrados por categoria
- Volume de solicitações por status
- Tempo médio de atendimento
- Conversão de solicitações em serviços realizados

## 🧪 Testes (Sugestão)
- Testes de integração para fluxo de login/registro
- Testes de CRUD de serviços
- Testes de validação de formulários

## 🌟 Diferenciais para Currículo/Portfólio
- Projeto full-stack com autenticação e RBAC
- Integração real com banco relacional e SQL
- Organização de frontend (assets, componentes) e backend (rotas/processamento)
- Documentação clara e instruções de execução
- Foco em UX (formularização guiada e feedback ao usuário)

## 🛤️ Roadmap de Melhorias
- [ ] Migração para arquitetura MVC (Slim/Laravel)
- [ ] API REST para consumo por SPA/mobile
- [ ] Upload de arquivos (orçamentos, fotos)
- [ ] Paginação, busca e filtros avançados
- [ ] Notificações por email/WhatsApp
- [ ] Docker para desenvolvimento e deploy
- [ ] Testes automatizados (PHPUnit)

## 📄 Licença
Este projeto é destinado a fins educacionais e portfólio.

## 👤 Autor
**Gustavo Pupo**
- GitHub: https://github.com/pupo68
- Email: gustavopupo49@gmail.com

---
Se este projeto foi útil, deixe uma ⭐!
