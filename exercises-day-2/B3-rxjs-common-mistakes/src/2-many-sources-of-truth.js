const { BehaviorSubject, timer } = require('rxjs');
const { mapTo } = require('rxjs/operators');



class SimpleService {

  constructor () {
    this.number$ = new BehaviorSubject(1);
    setTimeout(() => {
      this.number$.next(1000);
    }, 2000);
  }

  getNumbers() {
    return this.number$;
  }
}

/**
  TASK:
  1. Uncomment line and see what will happen in the console.
*/

const serviceInstance = new SimpleService();

// #1 Subscriber:
serviceInstance
  .getNumbers()
  .subscribe((no) => console.log('#sub1', no));

// #2 Subscriber:
serviceInstance
  .getNumbers()
  .subscribe((no) => console.log('#sub2', no));

// #3 Subscriber:
serviceInstance
  .getNumbers()
  .subscribe((no) => console.log('#sub3', no));

(function deepDownInTheOceanOfModules(){

  // Uncomment line below
  // timer(4000).pipe(mapTo('TROLL')).subscribe(serviceInstance.getNumbers())
}());
