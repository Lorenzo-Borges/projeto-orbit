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
        path: "landing-page", loadComponent: () =>
            import('./pages/landing-page/landing-page').then(x => x.LandingPage)
    }
];

