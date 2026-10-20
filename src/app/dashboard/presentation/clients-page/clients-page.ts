import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-clients-page',
  styleUrl: './clients-page.css',
  templateUrl: './clients-page.html',
})
export class ClientsPage {

  protected readonly clients = [
    { id: 1, businessName: 'Bodega San Martín', ruc: '20512345671', district: 'Los Olivos', phone: '987 654 321' },
    { id: 2, businessName: 'Minimarket La Esquina', ruc: '20587654322', district: 'Comas', phone: '956 123 789' },
    { id: 3, businessName: 'Comercial Huamán', ruc: '20498765433', district: 'San Juan de Lurigancho', phone: '934 567 120' },
    { id: 4, businessName: 'Distribuidora Rosales', ruc: '20456789014', district: 'Ate', phone: '912 345 678' },
    { id: 5, businessName: 'Market Santa Rosa', ruc: '20534567895', district: 'Villa El Salvador', phone: '998 765 432' },
  ];

}
