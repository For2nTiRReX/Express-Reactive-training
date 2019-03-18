import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  chosenUsers = new BehaviorSubject<User[]>([]);
  chosenUser$ = this.chosenUsers.asObservable();

  constructor() { }

  addChosen(user: User) {
    const users = this.chosenUsers.getValue();
    this.chosenUsers.next([...users, user]);
  }

  getChosenUsers(): Observable<User[]> {
    return this.chosenUser$;
  }

  getUsersName(): Observable<string[]> {
    return this.chosenUser$.pipe(map((us: User[]) => us.map((u: User) => u.name)));
  }
}
