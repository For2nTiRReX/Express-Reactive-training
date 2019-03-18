const { from } = require('rxjs');
const { map } = require('rxjs/operators');


  /**
   TASK:
   

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
    const myUser = {...user};
    myUser.name += '_troll';
  });

  setTimeout(() => {

    // Sub - #2
    name$.pipe(
      map(user => `Welcome back ${user.name}!`)
    ).subscribe(x => console.log(x));
  }, 3000);
