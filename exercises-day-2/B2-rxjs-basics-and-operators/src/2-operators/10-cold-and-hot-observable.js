import { fromEvent, interval } from 'rxjs'
import { share, shareReplay, switchMap, take } from 'rxjs/operators'

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
