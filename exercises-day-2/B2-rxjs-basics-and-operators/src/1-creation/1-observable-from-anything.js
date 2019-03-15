import { Observable } from 'rxjs'

/**
  TASK:
  Receive values and show them on the console.
  What will happen if we got many Observers?
*/

const observable = new Observable((observer) => {
	observer.next(123);
});
