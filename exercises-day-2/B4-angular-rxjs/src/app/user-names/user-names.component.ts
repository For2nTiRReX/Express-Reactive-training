import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'ar-user-names',
  template: `
    <div class="card">
      <div class="card-header"> User names </div>
      <div class="card-body">
        <span class="badge badge-info mr-2" *ngFor="let name of userService.getUsersName() | async"> {{name}} </span>
      </div>
    </div>
  `,
  styles: []
})
export class UserNamesComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
