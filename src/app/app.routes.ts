import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "login-cadastro", loadComponent: () =>
            import('./pages/login-cadastro/login-cadastro').then(x => x.LoginCadastro)
    }
];

