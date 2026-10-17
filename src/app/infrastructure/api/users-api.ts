import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, Observable } from 'rxjs';

import { ArticleAssembler } from './article-assembler';
import { EverythingResponse } from './everything-response';
import { environment } from '../../../environments/environment.development';
import { User } from '../../domain/model/user.entity';

@Service()
export class NewsApi {

    private readonly http =  inject(HttpClient);
    private readonly assembler = inject(ArticleAssembler);
    private readonly endPoint = `${environment.newsApiBaseURL}${environment.newsApiEndPoint}`;

    getArticlesByQuery(query:string):Observable<User[]> {
     return  this.http.get<User[]>(
         this.endPoint,
         {
           params:{
               q: query,
            sortBy:"id"
           }
         }
        ).pipe(
            map(response => this.assembler.toEntities(response.articles))
        );
    }
}
