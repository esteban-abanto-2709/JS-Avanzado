import { Component, inject, OnInit, signal } from '@angular/core';
import { UsersStore } from '../../../application/users.store';
import { UserCard } from '../../../presentation/components/user-card/user-card';

@Component({
  imports: [UserCard],
  selector: 'app-dashboard-page',
  styleUrl: './dashboard-page.css',
  templateUrl: './dashboard-page.html',
})
export class DashboardPage implements OnInit{

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
