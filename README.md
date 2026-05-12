# 🧭 Roadmap do Projeto
## 1. Levantamento de Requisitos
### Requisitos Funcionais
RF01 – Cadastrar, editar, listar e excluir livros

RF02 – Cadastrar, editar, listar e excluir usuários (leitores)

RF03 – Realizar empréstimo de um livro para um usuário

RF04 – Registrar devolução de livro

RF05 – Consultar histórico de empréstimos por usuário ou livro

RF06 – Aplicar multa por atraso (configurável por dia)

RF07 – Buscar livros por título, autor ou categoria

RF08 – Controle de disponibilidade do livro (ex: status "disponível", "emprestado", "atrasado")

# Requisitos Não Funcionais
Interface responsiva (Angular Material)

Autenticação básica (simulada ou com JWT)

Persistência de dados via JSON Server (mock API) ou backend real (Node.js + MongoDB)

Código com componentes reutilizáveis e serviços bem definidos

# 📐 Diagrama de Classes (Modelagem)

<code>
+----------------+       +----------------+       +----------------+
|     Livro      |       |    Usuario     |       |   Emprestimo   |
+----------------+       +----------------+       +----------------+
| - id: number   |       | - id: number   |       | - id: number   |
| - titulo: str  |       | - nome: str    |       | - livroId: num |
| - autor: str   |       | - email: str   |       | - usuarioId:num|
| - isbn: str    |       | - telefone: str|       | - dataEmprest: |
| - categoria:str|       | - endereco: str|       | - dataDevolucao|
| - ano: number  |       +----------------+       | - status: str  |
| - status: str  |                                 | - multa: number|
+----------------+                                 +----------------+
        1                                                *
        |                                                |
        |                                                |
        +------------------< * >------------------------+
</code>

### Relacionamentos:

Um Usuario pode ter muitos Emprestimo

Um Livro pode estar em muitos Emprestimo (ao longo do tempo)

# 🛠️ Tecnologias e Ferramentas

<code>
<strong>Camada -----------------------------------------	Tecnologia</strong>
Front-end -----------------------------------------	Angular
UI Library ---------------------------------------	Angular
Estado ----------------------	Signals ou Services com RxJS
Backend (mock) --------------------------------	JSON Server
HTTP Client --------------------------------------	Angular
</code>

# 🧱 Estrutura de Pastas do Angular

<code>
src/app/
├── core/
│   ├── models/          # interfaces (Livro, Usuario, Emprestimo)
│   ├── services/        # livro.service, usuario.service, emprestimo.service
│   └── guards/          # auth.guard (opcional)
├── shared/
│   ├── components/      # navbar, search-box, confirmation-dialog
│   └── validators/      # validadores customizados
├── features/
│   ├── livros/          # listar-livros, cadastrar-livro, editar-livro
│   ├── usuarios/        # similar
│   ├── emprestimos/     # novo-emprestimo, devolucao, historico
│   └── dashboard/       # resumo (livros emprestados, atrasos, etc.)
└── app.routes.ts        # lazy loading das features
</code>
