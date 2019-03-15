  /**
   TASK:
   Calculate dimensions of the object, taking values form inputs: height, width i length

   */
  import { fromEvent } from 'rxjs'


  // DOM Wrappers:
  const inputHeight = document.querySelector('input[name=height]');
  const inputWidth = document.querySelector('input[name=width]');
  const inputLength = document.querySelector('input[name=length]');
  const resultDiv = document.querySelector('#result');

  const height$ = fromEvent(inputHeight, 'keyup')
  const width$ = fromEvent(inputWidth, 'keyup')
  const length$ = fromEvent(inputLength, 'keyup')
