# 🛠️ Ponto 8 Oficina - Website & Sistema de Checklist

Este projeto consiste no site institucional da **Ponto 8 Oficina** e em uma ferramenta interna de **Checklist de Inspeção Veicular**. O objetivo é apresentar os serviços da oficina e fornecer uma interface digital para que os mecânicos realizem inspeções rápidas e profissionais.

## 📂 Estrutura do Projeto

O projeto está organizado de forma que a ferramenta de checklist fique em uma pasta separada da estrutura principal do site, garantindo melhor manutenção:

### 🏠 Website Principal (Raiz)
Páginas voltadas para o cliente final e navegação geral.
* `Página principal.html`: Estrutura da landing page com seções "Sobre Nós", "Serviços" e "Contato".
* `Página principal style.css`: Estilização visual moderna com esquema de cores Dark Mode e detalhes em amarelo.
* `loginpg.html`: **[ARQUIVO VAZIO]** - Futura tela de acesso restrito para funcionários.

### 📋 Ferramenta de Checklist (`/checklist`)
Aplicação técnica para uso interno da oficina.
* `index.html`: Interface do formulário de inspeção com campos para veículo, placa, KM e ano.
* `style.css`: CSS dedicado com suporte a *Floating Labels* e configuração específica para impressão (`@media print`).
* `script.js`: Script responsável por gerar dinamicamente os 41 itens de verificação (como discos de freio, filtros e correias).

---

## 🚀 Funcionalidades Implementadas

* **Checklist Automatizado**: Os itens de inspeção são injetados via JavaScript, facilitando a atualização da lista sem mexer no HTML.
* **Relatório para Impressão**: O sistema oculta botões e ajusta cores automaticamente ao acionar a impressão, gerando um documento físico limpo para o cliente.
* **Identidade Visual**: Uso consistente das cores da oficina (preto, dourado e branco) e fontes legíveis (Roboto).
* **Design Responsivo**: O site principal e o checklist utilizam Grid e Flexbox para se adaptarem a diferentes tamanhos de tela.

---

## 🚧 Status de Desenvolvimento

Atualmente, o projeto conta com um arquivo que esta **vazio** e será alterado em atualizações futuras:
1.  **`loginpg.html`**: Receberá a lógica de autenticação.
