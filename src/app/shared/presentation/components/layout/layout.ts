import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {

  protected readonly menuItems = [
    { label: 'Clientes', icon: 'groups', path: '/clientes' },
    { label: 'Empleados', icon: 'badge', path: '/empleados' },
    { label: 'Productos', icon: 'inventory_2', path: '/productos' },
    { label: 'Reportes', icon: 'bar_chart', path: '/reportes' },
    { label: 'Usuarios', icon: 'person', path: '/usuarios' },
  ];

}
