import { interval }  from 'rxjs';
import { take, tap, map }  from 'rxjs/operators';

/**
 TASK:
 From the stream of numbers we are interested only 4-ur emissions
 Then we want to end subscription.
 Each time we want to have info as: "Hello world x" where "x" is an information number.

*/

const number$ = interval(800);

const hello$ = number$.pipe(
    tap((n) => {
        console.log(n)
    }),    
    take(4), 
    map(num => 'Hello world ' + num)
);


const mySubscription = hello$.subscribe((world) => {
    console.log(world);
})

mySubscription.unsubscribe();

hello$.pipe(take(2)).subscribe((world) => {
    console.log('Sub #2 '+ world);
})