import { Component, signal } from '@angular/core';
import { DashboardPage } from './dashboard/presentation/dashboard-page/dashboard-page';

@Component({
  imports: [DashboardPage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('js-avanzado');
}
