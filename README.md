# 🚀 Orbit - Sistema de Gestão Pessoal

## Sobre o Projeto

**Orbit** é uma plataforma de gestão pessoal desenvolvida em **Angular**, projetada para auxiliar usuários na organização de sua vida financeira, produtividade, planejamento de metas e gerenciamento de rotina em um único ambiente digital.

A proposta do Orbit é centralizar informações importantes do dia a dia, oferecendo ferramentas intuitivas para controle financeiro, agenda pessoal, gerenciamento de tarefas, definição de metas e acompanhamento de conquistas através de elementos de gamificação.

---

# 🎯 Objetivos

* Centralizar a gestão pessoal em uma única aplicação.
* Melhorar a organização e produtividade dos usuários.
* Facilitar o controle financeiro pessoal.
* Incentivar a criação e cumprimento de metas.
* Promover engajamento através de gamificação e conquistas.

---

# 🛠 Tecnologias

* Angular
* TypeScript
* HTML5
* SCSS
* Angular Material
* RxJS
* Firebase ou API REST (opcional)

---

# 🎨 Identidade Visual

## Paleta de Cores

| Cor           | Hexadecimal | Uso                                |
| ------------- | ----------- | ---------------------------------- |
| Preto Escuro  | #141414     | Fundo principal                    |
| Cinza Médio   | #A8A8A8     | Textos secundários                 |
| Cinza Claro   | #CCCCCC     | Elementos de apoio                 |
| Vinho         | #80183B     | Destaques e ações principais       |
| Azul Petróleo | #18747A     | Indicadores, sucesso e informações |

---

# 📱 Estrutura de Páginas

O sistema será composto por 9 páginas principais:

## 1. Landing Page

Página de apresentação do Orbit.

### Funcionalidades

* Apresentação do sistema
* Benefícios da plataforma
* Chamada para cadastro
* Demonstração de recursos

---

## 2. Login e Cadastro

### Funcionalidades

* Login de usuário
* Cadastro de conta
* Recuperação de senha
* Validação de dados

---

## 3. Home (Dashboard)

### Funcionalidades

* Resumo geral do usuário
* Indicadores financeiros
* Próximos compromissos
* Tarefas pendentes
* Metas em andamento

---

## 4. Financeiro

### Funcionalidades

* Cadastro de receitas
* Cadastro de despesas
* Categorias financeiras
* Relatórios financeiros
* Gráficos de gastos
* Controle de saldo

---

## 5. Agenda

### Funcionalidades

* Cadastro de eventos
* Visualização diária
* Visualização semanal
* Visualização mensal
* Lembretes e notificações

---

## 6. Gerenciador de Tarefas

### Funcionalidades

* Criar tarefas
* Editar tarefas
* Excluir tarefas
* Prioridades
* Status de conclusão
* Filtros de pesquisa

---

## 7. Metas e Gamificação

### Funcionalidades

* Criar metas
* Acompanhar progresso
* Sistema de experiência (XP)
* Níveis do usuário
* Recompensas virtuais

---

## 8. Conquistas

### Funcionalidades

* Exibição de conquistas desbloqueadas
* Histórico de conquistas
* Critérios de desbloqueio
* Estatísticas de desempenho

---

## 9. Configurações

### Funcionalidades

* Alteração de perfil
* Alteração de senha
* Preferências do sistema
* Configurações de notificações
* Exclusão de conta

---
# Levantamento de Requisitos — Orbit

## Requisitos Funcionais (RF)

### Autenticação

RF01 - Permitir cadastro de usuários.

RF02 - Permitir login utilizando e-mail e senha.

RF03 - Permitir recuperação de senha.

RF04 - Permitir encerramento de sessão (logout).

---

### Dashboard

RF05 - Exibir resumo financeiro.

RF06 - Exibir tarefas pendentes.

RF07 - Exibir próximos compromissos.

RF08 - Exibir progresso das metas.

---

### Financeiro

RF09 - Cadastrar receitas.

RF10 - Cadastrar despesas.

RF11 - Editar movimentações financeiras.

RF12 - Excluir movimentações financeiras.

RF13 - Categorizar receitas e despesas.

RF14 - Gerar gráficos financeiros.

RF15 - Exibir saldo atualizado.

---

### Agenda

RF16 - Criar eventos.

RF17 - Editar eventos.

RF18 - Excluir eventos.

RF19 - Visualizar calendário.

RF20 - Configurar lembretes.

---

### Tarefas

RF21 - Criar tarefas.

RF22 - Editar tarefas.

RF23 - Excluir tarefas.

RF24 - Alterar status das tarefas.

RF25 - Definir prioridade.

RF26 - Filtrar tarefas.

---

### Metas

RF27 - Criar metas pessoais.

RF28 - Atualizar progresso das metas.

RF29 - Finalizar metas.

RF30 - Visualizar percentual de conclusão.

---

### Gamificação

RF31 - Acumular pontos de experiência.

RF32 - Evoluir níveis do usuário.

RF33 - Desbloquear conquistas.

RF34 - Exibir ranking pessoal.

---

### Configurações

RF35 - Alterar dados do perfil.

RF36 - Alterar senha.

RF37 - Configurar notificações.

RF38 - Excluir conta.

---

## Requisitos Não Funcionais (RNF)

RNF01 - O sistema deve ser desenvolvido utilizando Angular.

RNF02 - A interface deve ser responsiva.

RNF03 - O tempo de resposta das operações deve ser inferior a 3 segundos.

RNF04 - O código deve seguir boas práticas de desenvolvimento.

RNF05 - O sistema deve possuir acessibilidade básica (WCAG).

RNF06 - O sistema deve permitir escalabilidade para novos módulos.

---

## Regras de Negócio (RN)

RN01 - Cada usuário possui acesso apenas aos próprios dados.

RN02 - Não é permitido cadastrar movimentações financeiras sem valor.

RN03 - Uma meta concluída gera pontos de experiência.

RN04 - Conquistas são liberadas automaticamente conforme critérios definidos.

RN05 - Eventos passados permanecem armazenados para consulta.

RN06 - Tarefas concluídas devem permanecer no histórico.

RN07 - Apenas usuários autenticados podem acessar áreas internas do sistema.

RN08 - O saldo financeiro deve ser atualizado automaticamente após cada movimentação.

RN09 - O progresso das metas deve ser calculado automaticamente.

RN10 - O sistema deve registrar data de criação e atualização dos registros.

---

---

# 📂 Estrutura de Diretórios

```bash
src/
│
├── app/
│   ├── core/
│   ├── shared/
│   ├── pages/
│   │   ├── landing-page/
│   │   ├── login/
│   │   ├── dashboard/
│   │   ├── financeiro/
│   │   ├── agenda/
│   │   ├── tarefas/
│   │   ├── metas/
│   │   ├── conquistas/
│   │   └── configuracoes/
│   │
│   ├── services/
│   ├── models/
│   ├── guards/
│   └── interceptors/
│
└── assets/
```

---

# 👥 Equipe

Projeto desenvolvido para fins acadêmicos e/ou profissionais utilizando Angular como framework principal.

---

# 📄 Licença

Este projeto é de uso educacional e poderá ser adaptado conforme as necessidades da equipe de desenvolvimento.

