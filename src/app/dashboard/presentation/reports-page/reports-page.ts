import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-reports-page',
  styleUrl: './reports-page.css',
  templateUrl: './reports-page.html',
})
export class ReportsPage {

  protected readonly summary = [
    { label: 'Ventas del mes', value: 48250.0, isMoney: true },
    { label: 'Pedidos atendidos', value: 132, isMoney: false },
    { label: 'Clientes activos', value: 58, isMoney: false },
  ];

  protected readonly monthlySales = [
    { month: 'Julio', amount: 39800.0 },
    { month: 'Agosto', amount: 42150.0 },
    { month: 'Septiembre', amount: 45600.0 },
    { month: 'Octubre', amount: 48250.0 },
  ];

}
