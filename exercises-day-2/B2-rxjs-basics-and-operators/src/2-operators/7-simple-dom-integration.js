import { fromEvent } from "rxjs";
import { mapTo, scan } from "rxjs/operators";

/**
  TASK:
  After clicking on document, count clicks and show them
  in h2Counter

    Why reduce wont work here?
*/

// DOM helper:
const h2Counter = document.querySelector("#counter");

// SOLVE:
const click$ = fromEvent(document, 'click').pipe(mapTo(1))


click$.pipe(scan((acc, val) => acc + val))
  .subscribe((one) => {
    h2Counter.innerText = one;
  })