import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
    user = new BehaviorSubject<User>({});

    users: User[] = [
        {
            cpf: '555.666.777-88',
            name: 'Kaique Gimenez',
            sitCpf: 'Regular',
            numCc: '123456-7',
            numCa: '765432-1'
        },
        {
            cpf: '111.222.333-44',
            name: 'Mariane de Sousa Oliveira',
            sitCpf: 'Regular',
            numCc: '778461-8',
            numCa: '557932-4'
        }
    ]

    getUsers() {
        return this.users;
    }

    setUser(user: User) {
        this.user.next(user)
    }

    getUser() {
        return this.user.asObservable();
    }

}