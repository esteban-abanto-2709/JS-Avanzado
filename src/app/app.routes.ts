import { Routes } from '@angular/router';
import { UsersPage } from './users/presentation/users-page/users-page';
import { ClientsPage } from './dashboard/presentation/clients-page/clients-page';

export const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: UsersPage },
  { path: 'clientes', component: ClientsPage },
  { path: '**', redirectTo: 'usuarios' },
];
