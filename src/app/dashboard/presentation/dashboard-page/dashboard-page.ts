import { Component, inject, OnInit, signal } from '@angular/core';
import { UsersStore } from '../../application/users.store';

@Component({
  imports: [],
  selector: 'app-news-page',
  styleUrl: './dashboard-page.css',
  templateUrl: './dashboard-page.html',
})
export class NewsPage implements OnInit{

  protected readonly store = inject(UsersStore);
  protected readonly query = signal("tesla");
  
  ngOnInit(): void {
    this.search();
  }
  search():void{

    const query = this.query().trim();
    if(query){
      this.store.searchArticle(query);
    }

  }

}
