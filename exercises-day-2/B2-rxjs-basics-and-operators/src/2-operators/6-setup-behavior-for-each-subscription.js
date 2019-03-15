import { interval } from "rxjs";
import { take, map, filter } from "rxjs/operators";

/**
  TASK:
  Make 4 subscriptions, which after each second will show values:
      1. 1-2-3|
      2. ('Hello')-('Hello !')-('Hello !!')-('Hello !!!')|
      3. 2-4-6-8-10|
      4. 10-20--40|
*/
const plus = (plusNum) => map(n => n+plusNum)
// const plusOneOperator = () => map(n => n+1);
// const timesTwo = () => map(n => n*2)
const times = (timesNum) => map(n => n*timesNum)

const second$ = interval(500).pipe(take(5));

second$.pipe(take(3), plus(1)).subscribe((val) => {
  console.log(val)
})
second$.pipe(take(4), map(n => `Hello ${'!'.repeat(n)}`)).subscribe((val) => {
  console.log(val)
})
second$.pipe(plus(1), times(2)).subscribe((val) => {
  console.log(val)
})
second$.pipe(take(4), plus(1), filter(n => n !== 3), times(10) ).subscribe((val) => {
  console.log(val)
})