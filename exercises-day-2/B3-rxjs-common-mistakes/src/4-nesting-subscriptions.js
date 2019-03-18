import { ajax } from "rxjs/ajax";
import { of, interval } from "rxjs";
import { switchMap, take } from "rxjs/operators";


/**
 TASK:
 First, load data from : https://jsonplaceholder.typicode.com/users/(:userId)
 as a stream.

 Then trigger an Observable with user name,
 Then trigger observable of: 'Hello World',
 then go to another with a interval with 5 emissions and stop.

 */

// SOLVE:
const ajaxCall$ = ajax.getJSON('https://jsonplaceholder.typicode.com/users/1')
const fakeAjaxCall$ = of({username: 'Myname'});
const hello$ = of('Hello world')
const second$ = interval(200).pipe(take(5));

ajaxCall$
    .pipe(
        switchMap((user) => of(user.username)),
        switchMap(() => hello$),
        switchMap(() => second$),
    )
    .subscribe((seconds) => {
        console.log(seconds);
    })