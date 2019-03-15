import { Observable } from 'rxjs'

/**
  TASK:
  Receive values and show them on the console.
  What will happen if we got many Observers?
*/

const observable = new Observable((observer) => {
  observer.next(123);
  // Can behave async
  setTimeout(() => {
    observer.next(456);
  }, 2000)
});

observable.subscribe((num) => {
  console.log(num);
})

observable.subscribe((num) => {
  console.log(num);
})

observable.subscribe((num) => {
  console.log(num);
})