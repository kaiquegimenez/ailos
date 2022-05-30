import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class MenuService {
    open = new BehaviorSubject<boolean>(false);

    setOpen(open: boolean) {
        this.open.next(open)
    }

    getOpen() {
        return this.open.asObservable();
    }

}