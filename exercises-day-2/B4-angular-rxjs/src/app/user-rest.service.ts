import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {

  constructor(private httpClient: HttpClient) { }

  getUsers(username): Observable<User[]> {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users', {
      params: {username}
    });
  }
}
