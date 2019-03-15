import {  Subject } from 'rxjs';

class MySuperService {

  constructor () {
    this.subject = new Subject();
  }

  getData() {
    return this.subject;
  }

  fire(data) {

  }
}


/**
  TASK:
  Subscribe to getData, provide logic to fire method - to emmit the data.
  What is Subject? What known construction does it remind?

*/


