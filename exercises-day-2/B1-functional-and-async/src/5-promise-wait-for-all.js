/**
 * "Promise resolve for all"
 * */
 
 const weaterStation = {

    fetchWindSpeed: () => Promise.resolve( 13 ),
    fetchWindDirection: () => Promise.resolve( 'NW' ),
    fetchHumidity: () => Promise.resolve( 61 ),
    fetchPressure: () => Promise.resolve( 1020 ),
    fetchCloudCover: async () => 88 ,
  };
  
  (function canMyKiteFlyToday() {
     /**
	 * 
	 * TASK:
	 * You need to get all of the informations in order to calculate the weather 
	   Try to take them all at once instead of chaining.
	 */
    /*
    let windSpeed = 0;

    weaterStation.fetchWindSpeed().then(ws => {
      console.log(ws)
      windSpeed = ws;
      return weaterStation.fetchWindDirection()
    }).then((wd) => {
      console.log(wd);

    })
    */
    Promise.all([
      weaterStation.fetchPressure(),
      weaterStation.fetchWindDirection(),
      weaterStation.fetchWindSpeed(),
      'hello World'
    ])
    /*.then((result) => {
      console.log(result);
    })*/
    .then(([pressure, windDirection, windSpeed, hello]) => {
      console.log(pressure, windDirection, windSpeed, hello);

      const arr = [1,2,3];

      const [one,,three] = arr;
      console.log(one, three);
    })

  })();
