.

🌐 Futuro do Trabalho — Rede Profissional (SPA)

Este projeto é uma aplicação web Single Page (SPA) criada para simular uma rede de profissionais voltada para o futuro do trabalho. Ela exibe perfis, permite busca, filtros, recomendações e mensagens, tudo funcionando apenas com HTML + CSS (Tailwind) + JavaScript + React via CDN, sem necessidade de instalação de dependências.

É totalmente compatível com requisitos de projetos acadêmicos, funcionando apenas abrindo o index.html em um servidor estático.

📌 Funcionalidades Principais
👤 Cards de Profissionais

Cada perfil exibe:

Foto

Nome

Cargo

Localização

Principais habilidades técnicas

📄 Modal Detalhado

Ao clicar em qualquer card, abre-se um modal contendo:

Informações pessoais

Resumo profissional

Habilidades técnicas

Soft skills

Experiências profissionais

Formação

Projetos

Certificações

Idiomas

Áreas de interesse

⭐ Sistema de Recomendações

Botão “Recomendar profissional”

Cada clique adiciona +1 recomendação

O valor é armazenado no localStorage

💬 Sistema de Mensagens

Botão “Enviar mensagem”

Permite enviar mensagens para qualquer perfil

As mensagens também ficam guardadas no localStorage

🔎 Busca

Funciona por:

Nome

Skills

Localização

Tudo em tempo real.

🏷️ Filtros

Filtros por:

Área de atuação

Cidade/estado (localização)

🌙 Dark Mode

Ativação pelo botão no header

Tema persiste mesmo após recarregar a página

📱 Totalmente Responsivo

Layout fluido

Grade adaptável

Modal com comportamento mobile-friendly

📁 Estrutura do Projeto
📦 futuro-do-trabalho-spa
│
├── index.html          -> HTML principal com React e Tailwind via CDN
├── app.js              -> Código completo do SPA (componentes, lógica e UI)
├── profiles.json       -> Arquivo com 60 perfis completos
├── styles.css          -> Complementos de Tailwind
│
└── /images             -> Avatares SVG gerados automaticamente

🔧 Tecnologias Utilizadas
Tecnologia	Função
React (via CDN)	Renderização da SPA
ReactDOM	Montagem dos componentes
Tailwind CSS (via CDN)	Estilização e responsividade
JavaScript ES Modules	Lógica da aplicação
localStorage	Persistência dos dados (tema, mensagens, recomendações)
JSON local	Base de dados com 60 perfis
▶️ Como Executar o Projeto

Nenhuma instalação é necessária.
Apenas rode um servidor local para que o profiles.json seja carregado corretamente.

Com Python:
python3 -m http.server 5173


Acesse:

👉 http://localhost:5173/index.html

OU usando VSCode Live Server

Clique com botão direito em index.html

Escolha Open with Live Server

🧪 Funcionalidades Atendidas (de acordo com o documento da GS)

✔️ SPA em React
✔️ Dados armazenados em JSON com mais de 60 perfis
✔️ Cards com foto, profissão, localização e resumo
✔️ Modal completo com dados adicionais
✔️ Sistema de recomendação persistente
✔️ Envio de mensagens persistente
✔️ Busca global
✔️ Filtros por área e localização
✔️ Dark Mode
✔️ Responsividade
✔️ Interface amigável e moderna
✔️ Arquitetura simples e compatível com avaliação acadêmica

👥 Autores

Paulo Cesar de Govea Junior — RM: 566034

Guilherme Vilela Perez — RM: 564422

Gustavo Panham Dourado — RM: 563904
