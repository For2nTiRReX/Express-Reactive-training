import { fromEvent, merge } from "rxjs";
import { mapTo, scan } from "rxjs/operators";
/**
  TASK:
  Each click of buttons Add or Subtract should change the result in counter.
  e.g. If I click 4x add and + 1x minus button counter should show result 3.
 
  You need to use the: subscriber!
*/


// DOM Helpers:
const addBtn = document.querySelector('#btn-add');
const subBtn = document.querySelector('#btn-sub');
const countDiv = document.querySelector('#div-counter');

// Our Subscriber
const subscriber = {
  next(value) {
    countDiv.innerText = value;
  }
};

// SOLVE:
const add$ = fromEvent(addBtn, 'click').pipe(mapTo(1));
const minus$ = fromEvent(subBtn, 'click').pipe(mapTo(-1));

merge(add$, minus$)
  .pipe(scan((acc, val)=> acc + val))
  W.subscribe(subscriber)