# Course day 5: Node

**!!! Attention !!!**
Until next class you need to have signed up for a MongoDB Atlas account: 
- [MongoDB Atlas](https://www.mongodb.com/atlas)

Node is a runtime environment for executing JavaScript code outside of a browser. It is built on top of the V8 JavaScript engine, and it is used to build fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

## Objectives
- Understand the difference between NodeJS and the browser
- Understand how to use NodeJS to create a server
- Understand how to use NodeJS to read and write to files
- Understand how to use NodeJS to use environment variables
- Understand how to use NodeJS with Typescript
- Understand how to use NodeJS with Express
- Understand the concept of middleware

## How to prepare before class
Skim the following articles:
- [Difference between NodeJS and the browser](https://nodejs.org/en/learn/getting-started/differences-between-nodejs-and-the-browser)
- [NOde NPM Guide](https://nodejs.dev/en/learn/an-introduction-to-the-npm-package-manager/)
- [Node.js with Typescript](https://nodejs.dev/en/learn/nodejs-with-typescript/)
- [Node.js fs file system](https://nodejs.dev/en/api/v19/documentation/)
- [Using environment variables](https://nodejs.dev/en/learn/how-to-read-environment-variables-from-nodejs)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [What the heck is middleware?](https://www.youtube.com/watch?v=MIr1oxQ3pao)
- [Express Middleware Documentation](https://expressjs.com/en/resources/middleware.html)
- [Error Handling in Express](https://expressjs.com/en/guide/error-handling.html)
- [Express Error Handling Middleware Example](https://expressjs.com/en/resources/middleware/errorhandler.html)
- [dotenv](https://www.npmjs.com/package/dotenv)

Watch the following video:
- [Node Tutorial (1 hour)](https://youtu.be/TlB_eWDSMt4?t=780)
- [Express Tutorial (1 hour)](https://www.youtube.com/watch?v=pKd0Rpw7O48)

## NodeJS

## Express 

**Example of a simple express server.**

```JS
import express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('Hello, world!');
});

app.listen(3000, () => {
   console.log(`Server is listening to http://localhost:3000`);
});
```

- Now run the server with `node index.js`
- Open your browser and go to `http://localhost:3000`

### Express base project

- [Setup node project with express and typescript](https://dev.to/cristain/how-to-set-up-typescript-with-nodejs-and-express-2023-gf)
- Run the following commands:
```BASH
mkdir node-express-typescript
cd node-express-typescript
npm init -y
```
- Install dependencies
```BASH
npm install express mongoose cors mongodb dotenv
npm install -D typescript ts-node-dev @types/express @types/cors
```
- Generate the tsconfig.json file
```BASH
npx tsc --init
```

- Change the tsconfig.json file to the following:
```JSON
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "rootDirs": ["src"],
    "outDir": "./dist",
    "lib": ["es2020"],
    "target": "es2020",
    "module": "esnext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "types": ["node","@apollo/server"]
  },
  "ts-node": {
    "esm": true,
    "experimentalSpecifierResolution": "node"
  },
  "include": ["src/**/*.ts", "src/resolvers"],
  "exclude": ["node_modules"]
}

```
- Create a dist folder and create a src folder and server.ts file inside (in the root of the project) containing the following code:
```TS
import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
```
- Watch for changes and run the server
```BASH
npm install  nodemon
```
- Create a nodemon.json file with the following:
```JSON
{
  "watch": ["src"],
  "ext": "ts,js,json",
  "ignore": ["node_modules/**/*"],
    "exec": "npx ts-node ./src/server.ts"
}
```
- Add the following scripts to the package.json file
```JSON
{
  "scripts": {
    "dev": "nodemon",
    "demo": "ts-node ./src/demo.ts",
    "build": "rimraf ./build && tsc"
  },
}
```
- and add `"type": "module",` to the package.json file as well (in the root of the file) in order to use ES6 modules and import statements.
- Run the server
```BASH
npm run dev
```
### Class Exercise 1
- Create a new GET endpoint `/api/person` that returns some json formattet list of person objects
  - hint use app.get('/api/person', (req, res) => { res.json({}) }) to return json
- Create a new GET endpoint `/api/person/:id` that returns a single person object
  - hint get the id by using req.params.id.

### Some usefull middleware

- [morgan](https://www.npmjs.com/package/morgan)
  - HTTP request logger middleware for node.js
- [cors](https://www.npmjs.com/package/cors)
  - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [helmet](https://www.npmjs.com/package/helmet)
  - Helmet helps you secure your Express apps by setting various HTTP headers.
- [body-parser](https://www.npmjs.com/package/body-parser)
  - Node.js body parsing middleware for handling JSON, Raw, Text and URL encoded form data.

### Routing
```ts
app.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from B!')
})
```

### Read and Write files

Node.js provides a built-in `fs` module that allows you to work with the file system on your computer. 
This module provides a range of methods that allow you to read, write, and delete files and directories.

**Read the documentation for the fs module here:**
- [fs](https://nodejs.org/api/fs.html)

## ExpressMiddleware (from the express docs)

- Express is in its self a routing and middleware web framework that has minimal functionality of its own:
- An Express application is essentially a series of middleware function calls.

- Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named `next()`.

- Middleware functions can perform the following tasks:
  - Execute any code.
  - Make changes to the request and the response objects.
  - End the request-response cycle.
  - Call the next middleware function in the stack.

- If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

- An Express application can use the following types of middleware:
  - Application-level middleware // app.use()
  - Router-level middleware // router.use()
  - Error-handling middleware // app.use()
  - Built-in middleware // express.json()
  - Third-party middleware // morgan

## Express Error Handling
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

## Class Exercises 1 
- Clone the [repo](https://github.com/FullStackTypeScriptCourse/fullstack_backend_startcode) and install the dependencies
- Clean up unused code
- Add some dummy data to an array in your controller.

```JSON
[
  {
    "id": "1",
    "model": "Audi",
    "year": 2010,
    "price": 10000,
    "color": "red"
  },
  {
    "id": "2",
    "model": "Volvo",
    "year": 2012,
    "price": 12000,
    "color": "blue"
  },
  {
    "id": "3",
    "model": "Saab",
    "year": 2001,
    "price": 5000,
    "color": "green"
  },
  {
    "id": "4",
    "model": "BMW",
    "year": 2015,
    "price": 15000,
    "color": "black"
  },
  {
    "id": "5",
    "model": "Mercedes",
    "year": 2017,
    "price": 20000,
    "color": "red"
  }
]
```
- Add the following routes to your controller:
  - GET /api/v1/cars - returns all cars
  - GET /api/v1/cars/:id - returns a single cars
  - POST /api/v1/cars - creates a new cars
  - PATCH /api/v1/cars/:id - updates a cars(partially)
  - DELETE /api/v1/cars/:id - deletes a cars
- Remember the following:
  - try/catch blocks
  - logging af errors
- Use Postman to test your routes

