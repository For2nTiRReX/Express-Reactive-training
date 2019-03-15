import {  Subject, BehaviorSubject } from 'rxjs';

class MySuperService {

  constructor () {
    this.subject = new BehaviorSubject('hello');
  }

  getData() {
    return this.subject.asObservable();
  }

  fire(data) {
    this.subject.next(data);
  }

  // differentFire(data) {
    // this.subject.next(data);
  // }
}


/**
  TASK:
  Subscribe to getData, provide logic to fire method - to emmit the data.
  What is Subject? What known construction does it remind?

*/

const service = new MySuperService();

service.fire('hello World');

// service.getData().next('TROLL');

service.getData().subscribe((value) => {
  console.log(value);
})


