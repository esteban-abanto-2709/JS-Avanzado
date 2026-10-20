import { Component, inject, OnInit, signal } from '@angular/core';
import { UsersStore } from '../../application/users.store';
import { UserCard } from '../components/user-card/user-card';

@Component({
  imports: [UserCard],
  selector: 'app-users-page',
  styleUrl: './users-page.css',
  templateUrl: './users-page.html',
})
export class UsersPage implements OnInit{

  protected readonly store = inject(UsersStore);
  protected readonly query = signal("");
  
  ngOnInit(): void {
    this.search();
  }
  search():void{

    const query = this.query().trim();
    this.store.searchUsers(query);

  }

}
