import { Routes } from '@angular/router';

import { PublicLayoutComponent } from './layouts/public-layout/public-layout';
import { PrivateLayoutComponent } from './layouts/private-layout/private-layout';


export const routes: Routes = [

    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'landing-page',
                pathMatch: 'full'
            },

            {
                path: "landing-page", loadComponent: () =>
                    import('./pages/landing-page/landing-page').then(x => x.LandingPage)
            },

            {
                path: "login-cadastro", loadComponent: () =>
                    import('./pages/login-cadastro/login-cadastro').then(x => x.LoginCadastro)
            }

        ]
    },


    {
        path: '',
        component: PrivateLayoutComponent,
        children: [

            {
                path: 'metas', loadComponent: () =>
                    import('./pages/metas/metas').then(x => x.MetasComponent)
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

                path: "agenda", loadComponent: () =>
                    import('./pages/agenda/agenda').then(x => x.AgendaComponent)

            },
            {

                path: "home", loadComponent: () =>
                    import('./pages/home/home').then(x => x.Home)
            }
        ]
    }


];

