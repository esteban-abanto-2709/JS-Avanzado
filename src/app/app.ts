import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardPage } from './dashboard/presentation/dashboard-page/dashboard-page';

@Component({
  imports: [RouterOutlet, DashboardPage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('js-avanzado');
}
