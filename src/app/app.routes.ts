import { Routes } from '@angular/router';
import { UsersPage } from './users/presentation/users-page/users-page';
import { ClientsPage } from './dashboard/presentation/clients-page/clients-page';
import { EmployeesPage } from './dashboard/presentation/employees-page/employees-page';
import { ProductsPage } from './dashboard/presentation/products-page/products-page';
import { ReportsPage } from './dashboard/presentation/reports-page/reports-page';

export const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: UsersPage },
  { path: 'clientes', component: ClientsPage },
  { path: 'empleados', component: EmployeesPage },
  { path: 'productos', component: ProductsPage },
  { path: 'reportes', component: ReportsPage },
  { path: '**', redirectTo: 'usuarios' },
];
