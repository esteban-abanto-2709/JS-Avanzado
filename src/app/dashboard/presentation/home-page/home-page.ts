import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [RouterLink, MatIconModule],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})
export class HomePage {

  protected readonly systemName = 'Distribuciones El Progreso';

  protected readonly shortcuts = [
    { label: 'Clientes', description: 'Clientes mayoristas registrados', icon: 'groups', path: '/clientes' },
    { label: 'Empleados', description: 'Personal de la empresa', icon: 'badge', path: '/empleados' },
    { label: 'Productos', description: 'Catálogo y stock', icon: 'inventory_2', path: '/productos' },
    { label: 'Reportes', description: 'Resumen de ventas', icon: 'bar_chart', path: '/reportes' },
  ];

}
