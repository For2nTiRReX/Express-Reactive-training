import { fromEvent, interval } from 'rxjs'
import { share, shareReplay, switchMap, take, map } from 'rxjs/operators'

  /**
    TASK:
    Subscribe to stream of seconds using buttons.

    After clicking btn1Start you should start to update : counter1Div
    After clicking btn2Start you should start to update : counter2Div

    Click 1st button and GUESS (NOT CLICKING!) what number counter2Div will show after click 2nd button?
  */

  // DOM wrappers:
  const counter1Div = document.querySelector('#counter-1');
  const counter2Div = document.querySelector('#counter-2');
  const btn1Start = document.querySelector('#btn1')
  const btn2Start = document.querySelector('#btn2')

  // Stream
  const second$ = interval(1000).pipe( take(8), share(), shareReplay() );

  // SOLVE:
  const btn1Click$ = fromEvent(btn1Start, 'click');
  const btn2Click$ = fromEvent(btn2Start, 'click');

  // THIS IS WRONG:
  /*
  let sub;
  btn1Click$.subscribe(() => {
    if(sub) {
      sub.unsubscribe();
    }
    sub = second$.subscribe((val) => {
      counter1Div.innerText = val;
    })
  })
  */
  /**
     |------c-------c--------c---->

            |       |    
             \-0-1-|> \-0-1-2|> 
   * 
   * 
   */
  btn1Click$
    .pipe(switchMap(() => second$))
    .subscribe((val) => {
      counter1Div.innerText = val;
    })

  btn2Click$
    .pipe(switchMap(() => second$))
    .subscribe((val) => {
      counter2Div.innerText = val;
    })