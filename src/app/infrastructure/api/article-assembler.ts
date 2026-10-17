import { resource, Service } from '@angular/core';
import { User } from '../../domain/model/user.entity';
import { ArticleResource } from './everything-response';

@Service()
export class ArticleAssembler {

    toEntity(resource:ArticleResource):User{    
        return new User(
          resource.id ?? '',
          resource.name ?? '',
          resource.username ?? '',
          resource.email ?? '',
          resource.phone ?? '',
          resource.website ?? ''
        );
    }
    toEntities(resources:ArticleResource[]):User[]{
    return resources.map(resource => this.toEntity(resource));
    }

}
