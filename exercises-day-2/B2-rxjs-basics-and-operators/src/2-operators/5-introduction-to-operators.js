import { interval }  from 'rxjs';

/**
 TASK:
 From the stream of numbers we are interested only 4-ur emissions
 Then we want to end subscription.
 Each time we want to have info as: "Hello world x" where "x" is an information number.

*/

const number$ = interval(800);
