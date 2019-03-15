import {  Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mapTo, scan, repeat } from 'rxjs/operators';


  /**
   TASK:
   Change overused subject to Observable.

   */

  (function updateCounterModule() {

    function myData(){
      let data = 0;
      const subject = new Subject();
      const interval = setInterval(() => {
        subject.next(data++);
        
        if(data > 3) {
          clearInterval(interval);
        }
      }, 500);
      return subject;
    }

    myData().subscribe((no) => {
       console.log('myData', no)
    });

  }());

  (function updateCounterModule() {
    const subject = new Subject();

    document.addEventListener('click', () => {
      subject.next(1);
    });

    ajax('https://jsonplaceholder.typicode.com/todos')
      .pipe( mapTo(1), repeat(3) )
      .subscribe(() => subject.next(1));

    subject
      .pipe(
        scan((acc, val) => acc + val)
      )
      .subscribe((sum) => console.log('Counter updated', sum));
  }());
