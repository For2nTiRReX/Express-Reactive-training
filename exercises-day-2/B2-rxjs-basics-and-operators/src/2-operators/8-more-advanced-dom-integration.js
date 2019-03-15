import '@babel/polyfill';

import { interval } from 'rxjs';
import { map, tap, takeWhile, bufferCount } from 'rxjs/operators';

/**
  TASK:
  Show every 2 seconds a lawyer entering the room.
  Next to that show time passing (every second).

  Do we need 2 intervals?
*/


// Helper lawyer generator:
function* pearsonSpecterLittGenerator(){
  yield 'Jessica Pearson';
  yield 'Harvey Specter';
  yield 'Louis Litt';
}
// Helper iterator
const lawyerEnter = pearsonSpecterLittGenerator();

// DOM wrappers:
const ulLawyers = document.querySelector('#ul-lawyers');
const divTime = document.querySelector('#div-time');

function makeLi(innerText) {
  const li = document.createElement('li');
  li.classList.add('list-group-item')
  li.innerText = innerText;
  return li;
}

// SOLVE:
const second$ = interval(1000).pipe(map(x => x+1))


second$.subscribe((sec) => {
  divTime.innerText = sec;
})

second$
  .pipe(
    bufferCount(2),
    map(() => lawyerEnter.next().value),
    tap((lawyer) => console.log('The lawyer', lawyer)),
    takeWhile((lawyer) => lawyer)
  )
  .subscribe((lawyer) => {
    ulLawyers.appendChild(makeLi(lawyer))
  })