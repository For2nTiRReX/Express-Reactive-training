const express = require('express');

const app = express();

/**
 * #1 TASK:
 * 
 * Read request headers and change one of the response headers.
 * Response Need to be send in json (you can send the request headers)
 *
 * How can you manipulate the HTTP status code response?
 */
app.get('/', (request, response) => {
    

})

app.listen(3031,  () => {
    console.log('Express-server listening on port: 3031')
})

/*
    // Node uncaught exception handler (for comparison):
  
    process.on('uncaughtException', (error) => {
        console.error('There is an exception:\n', error)
    });
*/

/**
 * #2 TASK:
 * 
 * Attach global error handler for server 
 * (catching the server application errors)
 */
