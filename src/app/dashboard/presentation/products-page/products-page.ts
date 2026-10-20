import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-products-page',
  styleUrl: './products-page.css',
  templateUrl: './products-page.html',
})
export class ProductsPage {

  protected readonly products = [
    { id: 1, name: 'Arroz Costeño 50 kg', category: 'Abarrotes', price: 185.0, stock: 120 },
    { id: 2, name: 'Aceite Primor caja x 12 L', category: 'Abarrotes', price: 98.5, stock: 64 },
    { id: 3, name: 'Azúcar rubia 50 kg', category: 'Abarrotes', price: 162.0, stock: 8 },
    { id: 4, name: 'Leche Gloria caja x 48', category: 'Lácteos', price: 172.8, stock: 45 },
    { id: 5, name: 'Detergente Bolívar caja x 12', category: 'Limpieza', price: 89.9, stock: 5 },
  ];

}
