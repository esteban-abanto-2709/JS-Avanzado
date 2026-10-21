import { Routes } from '@angular/router';
import { Layout } from './shared/presentation/components/layout/layout';
import { HomePage } from './dashboard/presentation/home-page/home-page';
import { UsersPage } from './users/presentation/users-page/users-page';
import { ClientsPage } from './dashboard/presentation/clients-page/clients-page';
import { EmployeesPage } from './dashboard/presentation/employees-page/employees-page';
import { ProductsPage } from './dashboard/presentation/products-page/products-page';
import { ReportsPage } from './dashboard/presentation/reports-page/reports-page';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: HomePage, pathMatch: 'full' },
      { path: 'usuarios', component: UsersPage },
      { path: 'clientes', component: ClientsPage },
      { path: 'empleados', component: EmployeesPage },
      { path: 'productos', component: ProductsPage },
      { path: 'reportes', component: ReportsPage },
    ],
  },
  { path: '**', redirectTo: '' },
];
