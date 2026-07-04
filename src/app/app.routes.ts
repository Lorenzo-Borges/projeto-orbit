import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'metas', loadComponent: () => 
            import('./pages/metas/metas').then(x => x.MetasComponent)
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
        path: "landing-page", loadComponent: () =>
            import('./pages/landing-page/landing-page').then(x => x.LandingPage)
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
    },

    {
        path: "conquistas", loadComponent: () =>
            import('./pages/conquistas/conquistas').then(x => x.Conquistas)
    },

        {
        path: "financeiro", loadComponent: () =>
            import('./pages/financeiro/financeiro').then(x => x.FinanceiroComponent)
    },

    {
<<<<<<< HEAD
     path: "agenda", loadComponent: () =>
        import('./pages/agenda/agenda').then(x => x.AgendaComponent)
=======
        path: "conquistas", loadComponent: () =>
            import('./pages/conquistas/conquistas').then(x => x.Conquistas)
>>>>>>> cb2a16dc6987d4ebc8795770c72cf43290138615
    },
];

