const { from } = require('rxjs');
const { map } = require('rxjs/operators');


  /**
   TASK:
   1. Odkomentuj mutację w subskrypcji: Sub - #1, zobacz co się stało w Sub - #2.
      Dlaczego tak się dzieje?
   2. Zaproponuj rozwiązania problemu

   */
  
  const name$ = from([
    {name: 'Michał'},
    {name: 'Zbyszek'},
    {name: 'Krysia'},
  ]);

  // Sub - #1
  name$.subscribe(user => {
    console.log(user.name)
    // Uncomment line below (what will happen?)
    // user.name += '_troll';
  });

  setTimeout(() => {

    // Sub - #2
    name$.pipe(
      map(user => `Welcome back ${user.name}!`)
    ).subscribe(x => console.log(x));
  }, 3000);
