  /**
   TASK:
   Calculate dimensions of the object, taking values form inputs: height, width i length

   */
  import { fromEvent, combineLatest } from 'rxjs'
  import { map } from 'rxjs/operators'


  // DOM Wrappers:
  const inputHeight = document.querySelector('input[name=height]');
  const inputWidth = document.querySelector('input[name=width]');
  const inputLength = document.querySelector('input[name=length]');
  const resultDiv = document.querySelector('#result');

  // ev.target.value

  const height$ = fromEvent(inputHeight, 'keyup').pipe(map(ev => ev.target.value))
  const width$ = fromEvent(inputWidth, 'keyup').pipe(map(ev => ev.target.value))
  const length$ = fromEvent(inputLength, 'keyup').pipe(map(ev => ev.target.value))

  combineLatest(height$, width$, length$)
    .pipe(map( (valArr) => valArr.reduce((acc, val) => acc * val)))
    .subscribe((val) => {
      resultDiv.innerText = val;
    })