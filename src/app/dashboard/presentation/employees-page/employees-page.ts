import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-employees-page',
  styleUrl: './employees-page.css',
  templateUrl: './employees-page.html',
})
export class EmployeesPage {

  protected readonly employees = [
    { id: 1, fullName: 'Carlos Mendoza Ríos', position: 'Jefe de almacén', area: 'Logística', email: 'cmendoza@elprogreso.pe' },
    { id: 2, fullName: 'Lucía Paredes Soto', position: 'Asistente contable', area: 'Finanzas', email: 'lparedes@elprogreso.pe' },
    { id: 3, fullName: 'Jorge Quispe Laura', position: 'Vendedor', area: 'Ventas', email: 'jquispe@elprogreso.pe' },
    { id: 4, fullName: 'María Torres Vega', position: 'Supervisora de ventas', area: 'Ventas', email: 'mtorres@elprogreso.pe' },
    { id: 5, fullName: 'Pedro Salazar Cruz', position: 'Chofer repartidor', area: 'Logística', email: 'psalazar@elprogreso.pe' },
  ];

}
