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
	 * THE GOAL:
	 * You need to get all of the informations in order to calculate the weather 
	   Try to take them all at once instead of chaining.
	 */

  })();