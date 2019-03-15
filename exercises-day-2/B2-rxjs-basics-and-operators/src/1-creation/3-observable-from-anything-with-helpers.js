import { of, interval, from } from "rxjs";
import { take } from "rxjs/operators"

/**
  TASK:
  Show possibilities of Observable creation as:
  interval, array, string, Object

  difference between "of" and "from"
*/

const vegetable = 'tomato';
const fruits = ['apples', 'bananas', 'mangoes', 'cherries'];

const second$ = interval(1000).pipe(take(5));
const fruitOf$ = of(fruits);
const fruitFrom$ = from(fruits);

second$.subscribe((second) => {
  console.log(second);
})

fruitOf$.subscribe((fruitOf) => {
  console.log(fruitOf);
})

fruitFrom$.subscribe((fruitFrom) => {
  console.log(fruitFrom);
})