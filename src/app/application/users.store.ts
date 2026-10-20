import { computed, inject, Service, signal } from '@angular/core';
import { finalize } from 'rxjs';

import { UsersApi } from '../infrastructure/api/users-api';
import { User } from '../domain/model/user.entity';

@Service()
export class UsersStore {

    private readonly usersApi = inject(UsersApi);
    private readonly userState = signal<User[]>([]);
    private readonly loadingState = signal<boolean>(false);
    private readonly errorState = signal<string>("");

    readonly users = computed(() => this.userState());
    readonly loading = computed(() => this.loadingState());
    readonly error = computed(() => this.errorState());

    searchUsers(query: string) {
        this.loadingState.set(true);
        this.errorState.set("");
        this.usersApi.getUsersByQuery(query)
            .pipe(
                finalize(() => this.loadingState.set(false))
            )
            .subscribe({
                next: (users) => {
                    this.userState.set(users);
                },
                error: (error) => {
                    this.errorState.set(error.message);
                    this.loadingState.set(false);
                }
            }
            )
    }
}
