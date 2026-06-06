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
];

