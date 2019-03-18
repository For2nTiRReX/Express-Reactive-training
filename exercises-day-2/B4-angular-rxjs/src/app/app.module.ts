import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InsertUserComponent } from './insert-user/insert-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserNamesComponent } from './user-names/user-names.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertUserComponent,
    UserListComponent,
    UserNamesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
