import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'metas',
    loadComponent: () => import('./pages/metas/metas').then(x => x.MetasComponent)
  },
    {
        path: "login-cadastro", loadComponent: () =>
            import('./pages/login-cadastro/login-cadastro').then(x => x.LoginCadastro)
    },

    {
        path: "configuracao", loadComponent: () =>
            import('./pages/configuracao/configuracao').then(x => x.Configuracao)
    },

    {
        path: "acessibilidade", loadComponent: () =>
            import('./pages/acessibilidade/acessibilidade').then(x => x.Acessibilidade)
    },

    {
        path: "conta", loadComponent: () =>
            import('./pages/conta/conta').then(x => x.Conta)
    },


    {
        path: "gerenciador", loadComponent: () =>
            import('./pages/gerenciamento-tarefa/gerenciamento-tarefa').then(x => x.GerenciamentoTarefa)
    }

];

