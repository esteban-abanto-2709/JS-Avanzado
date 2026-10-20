import { Component, input } from '@angular/core';
import { User } from '../../../domain/model/user.entity';

@Component({
  imports: [],
  selector: 'app-user-card',
  styleUrl: './user-card.css',
  templateUrl: './user-card.html',
})
export class UserCard {

  readonly user = input.required<User>();

}
