import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, switchMap, tap } from 'rxjs/operators';
import { User } from '../user';
import { UserRestService } from '../user-rest.service';
import { UserService } from '../user.service';

@Component({
  selector: 'ar-insert-user',
  template: `
    <div class="card mb-2">
      <div class="card-header"> Add new user </div>
      <div class="card-body">
        <input class="form-control" type="text" #inputElement >
        <div *ngIf="users.length">
          <ul class="list-group">
            <li *ngFor="let user of users" class="list-group-item">
              {{user.name}} | {{user.username}} | {{user.email}}
              <button class="btn btn-primary" (click)="addUser(user)"> Add as chosen</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class InsertUserComponent implements OnInit {

  @ViewChild('inputElement') input: ElementRef;

  users: User[] = [];

  constructor(private userRestService: UserRestService, private userService: UserService) { }

  ngOnInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(300),
        tap(() => this.users = []),
        map((ev: any) => ev.target.value),
        switchMap((text) => this.userRestService.getUsers(text))
      )
      .subscribe((users) => this.users = users);
  }

  addUser(user: User) {
    this.userService.addChosen(user);
    this.input.nativeElement.value = '';
    this.users = [];
  }
}
