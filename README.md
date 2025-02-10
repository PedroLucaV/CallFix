# CallFix - Sistema de Chamados de Informática

CallFix é um sistema de gerenciamento de chamados de suporte técnico para soluções de informática, desenvolvido com **Express**, **TypeScript**, **Prisma** e **PostgreSQL**. A aplicação oferece funcionalidades de criação, visualização e gerenciamento de chamados por parte dos usuários e administradores.

## 🚀 Funcionalidades

- **Autenticação de Funcionários**: Login com JWT para autenticação segura.
- **Gestão de Chamados**: Criação e visualização de chamados abertos pelos clientes.
- **Banco de Dados Relacional**: Utilização do PostgreSQL com Prisma para gerenciamento de dados.

## 📋 Requisitos

- **Node.js** (versão 16 ou superior)
- **PostgreSQL** (com banco de dados configurado)
- **Prisma CLI** para migrações de banco de dados

## 📥 Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/callfix.git
   cd callfix
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Configuração do Banco de Dados**:
   - Crie um banco de dados no PostgreSQL e configure a URL de conexão no arquivo `.env`.
   - Exemplo de configuração do `.env` no `.env.example`:

4. **Execute as migrações do Prisma**:

   ```bash
   npx prisma migrate dev
   ```

5. **Inicie o servidor**:

   ```bash
   npm run dev
   ```

O servidor estará disponível em `http://localhost:PORT` (Porta definida no .env).

## 📄 Contribuição

Se você deseja contribuir com o projeto, siga os passos:

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature: `git checkout -b minha-feature`.
3. Faça os commits necessários com uma mensagem clara e explicativa.
4. Envie um pull request para a branch `main` deste repositório.

## 📞 Contato

- Pedro Lucas - pedrolu0710@gmail.com

## 🔑 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
