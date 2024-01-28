### Express Error Handling
- you need tou have completed the `Express Basic Basic` and `Express Routes` Exercise before you can start this part.

- Error handling in Express is done through the use of middleware. The error-handling middleware is defined with four arguments: (err, req, res, next). For example:

```js
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
```
- The error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.

- If you define multiple error-handling middleware functions, they are executed sequentially, just like regular middleware functions. The first error-handling middleware function that calls next() will transfer control to the next error-handling middleware function. If no error-handling middleware function calls next(), the default Express error handler will be invoked, which simply returns an Internal Server Error (500) status code to the client.

- Read the docs for more info: https://expressjs.com/en/guide/error-handling.html

1. Create a new file called `error.ts` in the `src` folder and add the following code:

```TypeScript
    import { Request, Response, NextFunction } from 'express';
    import log4js from 'log4js';
    
    const logger = log4js.getLogger();
    logger.level = 'debug';
    
    export const notFound = (req: Request, res: Response, next: NextFunction) => {
      const error = new Error(`Not Found - ${req.originalUrl}`);
      res.status(404);
      next(error);
    };
    
    export const errorHandler = (
      err: Error,
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
      res.status(statusCode);
      res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
      });
    };
```

Understand the code above. What is the purpose of each function? How does the error handling work?

2. Add the following code to the `server.ts` file:

```TypeScript
    import express, { Express, Request, Response , Application } from 'express';
    import dotenv from 'dotenv';
    import bodyParser from 'body-parser';
    import morgan from 'morgan';
    import log4js from 'log4js';
    import { notFound, errorHandler } from './error';
    
    //For env File 
    dotenv.config();
    
    const app: Application = express();
    const port = process.env.PORT || 3000;
    
    // Middleware
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    
    app.get('/', (req: Request, res: Response) => {
      res.send('Welcome to Express & TypeScript Server');
    });
    
    // Error Handling
    app.use(notFound);
    app.use(errorHandler);
    
    app.listen(port, () => {
      console.log(`Server is Fire at http://localhost:${port}`);
    });
```
4. Implementing the error handling:
    - Go through each route and implement the error handling. For example: If a person is not found, return a 404 error. If the request body is not valid, return a 400 error. etc.
3. Testing the error handling:
   - Test the error handling for:
     - GET `/persons/:id` with an invalid id
     - POST `/persons` with an invalid body
     - PUT `/persons/:id` with an invalid id
     - PUT `/persons/:id` with an invalid body
     - `NOT FOUND` for all other routes'
     - `INTERNAL SERVER ERROR` for all other errors'
     - etc.
