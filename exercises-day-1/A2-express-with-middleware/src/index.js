/**
 Test application level middleware.

 #1 TASK:
 Where you can provide proper 404 - Not found middleware for handling 404 errors?

 Handle errors for routes with json-like style and proper http status.
 Maybe using own: serverError factory?
 Try to response stack info only for development.

 #2 TASK:
 Use "dotenv" library to resolve environment values.
 Play with e.g.: PORT, NODE_ENV, DB_NAME, DB_USER
 See a express value of: app.get('env')

 #3 TASK:
 Configure the "static code analyzer" for other developers - who might work with this project.
 Use: eslint

 #4 TASK:
 Make routes:
  GET /cars
  - need to return list of example cars

  GET /special-cars
  - returning list of some special cars

 #5 TASK:
 Use your own application level middleware to log some information about request
 // path method and req headers
    #5.1 : Try to use "winston" library - to handle that

 #6 TASK:
 Protect special-cars route with some auth middleware (based on simple hardcoded dummy Authorization header value of your choice)

 #7 TASK:
 Add the POST method to /cars - try to access the request body inside the callback

 Example data model:
 {
    id: 0,
    make: 'Audi',
    model: 'A6',
    body: 'sedan'
    engine: 2.8
 }

 */

const express = require('express');
const app = express();

// CODE GOES HERE:


const server = app.listen(3020, () => {
	console.log(`Listening on port ${3020}`)
});

server.on('error', (error) => {
	console.log('Error in application!\n', error);
})
