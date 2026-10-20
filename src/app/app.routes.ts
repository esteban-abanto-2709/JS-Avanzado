import { Routes } from '@angular/router';
import { UsersPage } from './users/presentation/users-page/users-page';

export const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: UsersPage },
  { path: '**', redirectTo: 'usuarios' },
];
