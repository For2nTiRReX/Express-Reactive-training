const { Observable } = require('rxjs');
  /**
   TASK:
   Propose proper handling of subscription, error and end for lawyer call.
  */

const mySuperLawyer = new Observable( (observer) => {

  const goldenAnswersToYourClient = [
    'What would Harvey do?',
    'Please, hang on',
    'I will call you later...',
    'I\'m Donna, I know everything',
    'The subscriber is currently unavailable'
  ];

  let n = 0;
  const interval = setInterval(() => {
    const quote = goldenAnswersToYourClient[n++];
    if(quote) {
      observer.next(quote);
    } else {
      try {
        throw new Error('Sorry');
      } catch(e) {
        observer.error(e);
      }
      observer.complete();
      clearInterval(interval);
    }
  }, 500)

} );


mySuperLawyer.subscribe(
  (answer) => {
    console.log(answer)
  },
  (err) => { console.log(err) },
  () => {
    console.log('Completed !')
  }
)