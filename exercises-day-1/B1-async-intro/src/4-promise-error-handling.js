/**
 * "Promise error handling"
 * */


 function getSurveyStats(riseError = false) {
    
    return new Promise( (resolve, reject) => {
        if(riseError) {
            reject(new Error('Sorry, request error - cannot complete'))
        } else {
            resolve({
                happyClients: 60,
                neutralClients: 30,
                unhappyClients: 10
            });
        }
    });
 }


 /**
 * 
 * THE GOAL:
 * Call the API with proper Promise usage and error handling
 */
 getSurveyStats()
