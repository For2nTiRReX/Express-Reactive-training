import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'ar-user-list',
  template: `
    <div class="card mb-2">
      <div class="card-header"> Chosen users </div>
      <div class="card-body">
        <ul *ngIf="(userService.getChosenUsers() | async) as users" class="list-group">
            <li class="list-group-item" *ngFor="let user of users" >
              {{user.name}} | {{user.email}}
            </li>
        </ul>
      </div>
    </div>
  `,
  styles: []
})
export class UserListComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
