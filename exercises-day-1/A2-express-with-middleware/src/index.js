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

require('dotenv').config();

const express = require('express');
const app = express();
const { logger } = require('./logger-service');

app.use(express.json());
// app.use(express.urlencoded());

function serverError(message, status = 404) {
   const error = new Error(message);
   Object.assign(error, {status});
   return error;
}

function logMiddleware(req, res, next) {
   logger.info(`Path ${req.url} with method ${req.method} requested`)
   next();
}

function authMiddleware(req, res, next) {

   const { headers } = req;
   const auth = headers['authorization'];

   if(auth) {

      // fire some service logic to go to DB and get the user
      // someAuthService().then((user) => {
      //   req.user = user
      // }).catch(next)
      return next();
   }
   next(serverError('Not authorized', 401));
}

app.use(logMiddleware);

app.get('/cars', (req, res) => {

   res.json([
      {
         id: 0,
         make: 'Audi',
         model: 'A6',
         body: 'sedan',
         engine: 2.8
      }
   ])
})

app.post('/cars', (req, res) => {
   const { body } = req;

   res.json(body)
})

app.get('/cars/:carId', (req, res) => {

   const { params : {carId} } = req;
   
   res.json({carId})
})

app.get('/special-cars', authMiddleware, (req, res) => {
   

   res.json([
      {
         id: 0,
         monsterTruckSuspension: true,
         racing: 'Dakar'
      }
   ])
})

// 404: 
app.use((req, res, next) => next(serverError(`Requested route ${req.path} does not exist`)))

// global error handler
// eslint-disable-next-line
app.use((error, req, res, next) => {
   
   const {message, status} = error;

   error.status = status || 500;
   res.json( { error: { message }})
})

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
   console.log(`Listening on port ${port}`)
   console.log(`Environment:  ${process.env.NODE_ENV}`)
   console.log(`Environment app.get:  ${app.get('env')}`)
});

server.on('error', (error) => {
	console.log('Error in application!\n', error);
})


// CODE GOES HERE:
// app.use((req, res, next) => {
//    console.log('#1 Middleware')
//    // req.headers['authorization'];

//    const error = new Error('Authorization required');
//    error.status = 401;
//    next(error);
// })

/*
function helloWordMiddleware(req, res, next) {
   req.hello = 'World';
   
   if(req.visited) {
      console.log('helloWordMiddleware', req.visited)
   } else {
      
   } 
   next();
}

// app.use(helloWordMiddleware);

app.use((req, res, next) => {
   console.log('#1 Middleware')
   req.visited = [1];
   next();
 })

 app.use((req, res, next) => {
   console.log('#2 Middleware')
   req.visited.push(2);
   next();
 })


 app.get('/goodbye', (req, res, next) => {
   const { hello } = req;
   res.json({ hello })
})


 app.get('/hello', [helloWordMiddleware], (req, res, next) => {
    const { hello } = req;
    
    res.json({ hello })
 })

app.get('/', (req, res, next) => {

   const hello = 'World';
   const { visited } = req;

   
   //someOtherService(req, res);

   //someOtherService(visited, (err, data) => {
   //   if(err) {
   //      // res.status(404).json({err})
   //      next(err)
   //   } else {
   //     res.json(data)   
   //   }
   //})

   //setTimeout( () => {
   //   next(new Error('Error after a while') );
   //}, 2000)

   if(!res.headersSent) {
      res.json( { hello, visited });
   }
   
   // res.json( { hello : hello });
})

*/

