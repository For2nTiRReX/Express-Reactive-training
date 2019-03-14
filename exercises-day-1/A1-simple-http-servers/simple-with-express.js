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
    // const headers = request.headers;
    const { headers } = request;

    console.log('Hello im here !');

    response.setHeader('X-Powered-By', 'By us!')
    // Depricated:
    // response.json(200, headers);
    response.status(404).json(headers);
})

const server = app.listen(3031,  () => {
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
server.on('error', (error) => {
    console.error('Express server error:\n', error)
})