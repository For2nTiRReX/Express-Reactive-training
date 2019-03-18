import { Component } from '@angular/core';

@Component({
  selector: 'ar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rxjs';

  greetings = '';

  handleShoutGreetingsClick() {
    this.greetings = 'Hello World !';
  }
}
