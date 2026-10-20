import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, Observable } from 'rxjs';

import { UserAssembler } from './user-assembler';
import { UserResource } from './users-response';
import { environment } from '../../../../environments/environment.development';
import { User } from '../../domain/model/user.entity';

@Service()
export class UsersApi {

    private readonly http =  inject(HttpClient);
    private readonly assembler = inject(UserAssembler);
    private readonly endPoint = `${environment.usersApiBaseURL}${environment.usersApiEndPoint}`;

    getUsersByQuery(query:string):Observable<User[]> {
     return  this.http.get<UserResource[]>(
         this.endPoint,
         {
           params:{
               q: query
           }
         }
        ).pipe(
            map(resources => this.assembler.toEntities(resources))
        );
    }
}
