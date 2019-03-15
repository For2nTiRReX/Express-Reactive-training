/**
 * "The Promise anti-pattern"
 * */
 const openTheLockers = {

    openLocker1: () => Promise.resolve( '#2-0-0' ),
    openLocker2: (combination2) => combination2 === '#2-0-0' ? Promise.resolve( '#3-0-0' ) : Promise.reject(new Error('#2-open-failed')),
    openLocker3: (combination3) => combination3 === '#3-0-0' ? Promise.resolve( '#4-0-0' ) : Promise.reject(new Error('#3-open-failed')),
    openLocker4: (combination4) => combination4 === '#4-0-0' ? Promise.resolve( 'The treasure' ) : Promise.reject(new Error('#4-open-failed')),
  };
  
  (function startYourPathToTreasure() {
    
    // Our Indiana Jones has an idea:
    openTheLockers.openLocker1().then((code2) => {

      openTheLockers.openLocker2('23g7g').then((code3) => {

        openTheLockers.openLocker3(code3).then((code4) => {

          openTheLockers.openLocker4(code4).then((treasure) => {
              console.log(treasure);
          })
        })
      })
    }).catch(err => {
      console.log(err);
    })
    // it works - but, the code above is not good

    /**
	 * 
	 * TASK:
	 * Help Indiana Jones to make those API calls the "Promise way"
	 */
    openTheLockers.openLocker1()
        .then((code2) => openTheLockers.openLocker2(code2))
        .then((code3) => {
          return openTheLockers.openLocker3(code3)
        })
        .then(openTheLockers.openLocker4)
        .then((treasure) => {
          console.log(treasure);
        })
        .catch((error) => {
          console.log(error)
        })

  })();
