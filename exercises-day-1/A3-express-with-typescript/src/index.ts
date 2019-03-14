/**

    #1 TASK:
    Read sample and see how to use and implement typescript in express.js

    #2 TASK:
    Notice how request and response can be extended (modified).
    Add more fields to it to see what will happen

    #3 TASK:
    Try to move middleware to other files and name them properly.

* */


import express, { Express, NextFunction, Request, Response } from 'express'

const app: Express = express();

// Sample route with middleware
app.get('/', [

    (req: Request, res: Response, next: NextFunction) => {
        req.user = {name: 'Anna1', lastName: 'Nowak'}
        req.myOtherField = {};
        next();
    },
    (req: Request, res: Response, next: NextFunction) => {
        next();
    }
    
], (req: Request, res: Response) => {
    const { user } = req;
    const { name, lastName } = user;

    res.json({name, lastName})
})

// 404 handler sthr:
app.use((req: Request, res: Response) => {
    res.json({ error: { message: 'Not found', url: req.url} })
})

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    const { message, stack } = error;
    res.json({ message, stack })
})

const server = app.listen(process.env.PORT || 4040, () => {
    console.log(`Listen on port: ${process.env.PORT || 3020}`)
    console.log(`Running on env: ${process.env.NODE_ENV} | ${app.get('env')}`)
});

server.on('error', (error: Error) => {
    console.error('Error in application', error);
})

