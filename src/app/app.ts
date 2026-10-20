import { Component, signal } from '@angular/core';
import { UsersPage } from './users/presentation/users-page/users-page';

@Component({
  imports: [UsersPage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('js-avanzado');
}
