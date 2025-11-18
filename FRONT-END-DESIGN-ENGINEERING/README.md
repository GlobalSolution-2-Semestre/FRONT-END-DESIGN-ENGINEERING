# 🧠 MindTrack Solutions

> **Global Solution 2025/2 - FIAP**
> *Análise e Desenvolvimento de Sistemas - Turma 1TDSPF*

---

## 🚧 Status do Projeto
![Status](https://img.shields.io/badge/STATUS-EM_DESENVOLVIMENTO-yellow?style=for-the-badge)

---

## 📋 Sumário

1. [Sobre o Projeto](#-sobre-o-projeto)
2. [Tecnologias Utilizadas](#-tecnologias-utilizadas)
3. [Instalação](#-instalação)
4. [Como Usar](#-como-usar)
5. [Estrutura de Pastas](#-estrutura-de-pastas)
6. [Rotas Principais](#-rotas-principais)
7. [Autores e Créditos](#-autores-e-créditos)
8. [Screenshots e Demonstração](#-screenshots-e-demonstração)
9. [Contato](#-contato)

---

## 📖 Sobre o Projeto

O **MindTrack** é uma plataforma corporativa desenvolvida para monitorar e promover o bem-estar emocional dos colaboradores. Em um cenário onde o futuro do trabalho exige adaptação constante, nossa solução oferece uma ferramenta para que gestores e RH possam acompanhar métricas de saúde mental, prevenindo burnout e melhorando o clima organizacional.

Este repositório contém o **Front-end** da aplicação, desenvolvido como uma *Single Page Application* (SPA) responsiva, que consome uma API Java (Back-end) integrada a um banco de dados Oracle.

**Link do Repositório:** [https://github.com/GlobalSolution-2-Semestre/FRONT-END-DESIGN-ENGINEERING.git]
**Link do vídeo:** [https://youtu.be/PW3GorhJWi8]

---

## 🚀 Tecnologias Utilizadas

* ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) **React** (v18+)
* ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E) **Vite**
* ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) **TypeScript**
* ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) **Tailwind CSS**
* **React Router Dom** (Navegação SPA)
* **Context API** (Gerenciamento de Tema Claro/Escuro)
* **Fetch API** (Integração REST)

---

## 📦 Instalação

Pré-requisitos: Ter o [Node.js](https://nodejs.org/) e o [Git](https://git-scm.com/) instalados.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/GlobalSolution-2-Semestre/FRONT-END-DESIGN-ENGINEERING.git]
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd FRONT-END-DESIGN-ENGINEERING
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute o projeto em modo de desenvolvimento:**
    ```bash
    npm run dev
    ```

---

## 🎮 Como Usar

### Acesso Online (Deploy)
> **Acesse a aplicação rodando na Vercel:**
> [https://mindtrack-seugrupo.vercel.app](https://mindtrack-seugrupo.vercel.app) *(Substitua pelo seu link real da Vercel)*

### Funcionalidades
1.  **Navegação:** Utilize o menu superior para acessar as páginas Home, Sobre, Integrantes e Admin.
2.  **Tema:** Clique no ícone de ☀️/🌙 no menu para alternar entre modo Claro e Escuro.
3.  **Admin Geral:**
    * Acesse a rota `/admin`.
    * Utilize as abas para alternar entre as entidades (Colaboradores, Check-ins, Relatórios, Alertas).
    * Preencha os formulários para cadastrar novos dados (POST) na API Java.
    * Visualize a lista de dados cadastrados (GET).
    * Utilize o botão "Excluir" para remover itens (DELETE).

---

## 📂 Estrutura de Pastas

```text
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes reutilizáveis (ex: Navbar, Footer)
├── contexts/        # Context API (ThemeContext.tsx)
├── routes/          # Páginas da aplicação (Home, Admin, Sobre, etc.)
├── App.tsx          # Configuração principal de Rotas e Layout
├── main.tsx         # Ponto de entrada da aplicação
└── index.css        # Configuração do Tailwind

👥 Autores e Créditos
Integrantes:
Pedro Henrique Luiz Alves Duarte 563405 1TDSPF
Guilherme Macedo Martins         562396 1TDSPF

© 2025 MindTrack Solutions - FIAP Global Solution
