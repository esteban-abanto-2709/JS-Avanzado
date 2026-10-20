import { Service } from '@angular/core';
import { User } from '../../domain/model/user.entity';
import { UserResource } from './users-response';

@Service()
export class UserAssembler {

    toEntity(resource:UserResource):User{
        return new User(
          resource.id ?? 0,
          resource.name ?? '',
          resource.username ?? '',
          resource.email ?? '',
          resource.phone ?? '',
          resource.website ?? ''
        );
    }
    toEntities(resources:UserResource[]):User[]{
    return resources.map(resource => this.toEntity(resource));
    }

}
