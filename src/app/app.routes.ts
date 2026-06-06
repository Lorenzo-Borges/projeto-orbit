import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'metas',
    loadComponent: () => import('./pages/metas/metas').then(m => m.MetasComponent)
  }
];

