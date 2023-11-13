# Express && Node.js

## Links

**Express**
- [Express](https://expressjs.com/)

**Express Middleware**
- [What the heck is middleware?](https://www.youtube.com/watch?v=MIr1oxQ3pao)
- [Express Middleware Documentation](https://expressjs.com/en/resources/middleware.html)

**Error Handling**
- [Error Handling in Express](https://expressjs.com/en/guide/error-handling.html)
- [Express Error Handling Middleware Example](https://expressjs.com/en/resources/middleware/errorhandler.html)


**Node**
- [Node.js Guide](https://nodejs.org/en/docs/guides/)
- [NOde NPM Guide](https://nodejs.dev/en/learn/an-introduction-to-the-npm-package-manager/)
- [Node.js with Typescript](https://nodejs.dev/en/learn/nodejs-with-typescript/)
- [Node.js fs file system](https://nodejs.dev/en/api/v19/documentation/)
- [Using environment variables](https://nodejs.dev/en/learn/how-to-read-environment-variables-from-nodejs)
  - [dotenv](https://www.npmjs.com/package/dotenv)

***

## Express

Express is a popular web framework for Node.js that simplifies the process of building web applications.
It provides a range of tools and features that make it easy to create server-side applications using Node.js.

1. Express is a web framework for Node.js that simplifies the process of building web applications.
2. Express provides a range of tools and features that make it easy to create server-side applications using Node.js.
3. Express uses middleware, which allows developers to add functionality to their applications without having to write a lot of code.
4. Express supports a range of template engines, which makes it easy to generate dynamic HTML pages.
5. Express includes built-in support for routing, which allows developers to define how different URLs should be handled by their applications.
6. Express supports a wide range of HTTP methods, including GET, POST, PUT, DELETE, and more.

Read the `getting started` guide for Express here:
- [Express](https://expressjs.com/en/starter/installing.html)

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

In this example, we're creating an Express app and defining a single route at the root URL `(/)`.

When a GET request is made to this URL, Express calls the callback function that we've defined,
which sends the string "Hello, world!" back to the client using `res.send()`.

Finally, we start the Express app by calling the `listen()` method and specifying the port number to listen on.

This is just a simple example, but it should give you a sense of how easy it is to get started with Express in Node.js.
Express provides a powerful set of features for building web applications, including middleware, routing, and templating.

***

### server.js

The server.js file will be responsible for starting the server and connect to our database.

### app.js

The app.js file will be responsible for setting up our express application. This includes setting up our middleware and
routes.

### router.js

The router.js file will be responsible for setting up our routes. This includes setting up our routes and the controller
functions that will be called when a route is hit.

### controller.js

The controller.js file will be responsible for handling the logic for each route. This includes reading and writing to
the database.

### ExpressMiddleware (from the express docs)

Express is in its self a routing and middleware web framework that has minimal functionality of its own:
An Express application is essentially a series of middleware function calls.

Middleware functions are functions that have access to the request object (req), the response object (res),
and the next middleware function in the application’s request-response cycle. The next middleware function is commonly
denoted by a variable named `next()`.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the
next middleware function. Otherwise, the request will be left hanging.

An Express application can use the following types of middleware:

- Application-level middleware // app.use()
- Router-level middleware // router.use()
- Error-handling middleware // app.use()
- Built-in middleware // express.json()
- Third-party middleware // morgan

***

### Express Error Handling

Error handling in Express is done through the use of middleware. The error-handling middleware is defined with four
arguments instead of the usual three: (err, req, res, next). For example:

```js
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
```

The error-handling middleware always takes four arguments. You must provide four arguments to identify it as an
error-handling middleware function. Even if you don’t need to use the next object, you must specify it to maintain the
signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.

If you define multiple error-handling middleware functions, they are executed sequentially, just like regular middleware
functions. The first error-handling middleware function that calls next() will transfer control to the next
error-handling
middleware function. If no error-handling middleware function calls next(), the default Express error handler will be
invoked, which simply returns an Internal Server Error (500) status code to the client.

Read the docs for more info: https://expressjs.com/en/guide/error-handling.html

***

## Node

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment. It allows developers to use
JavaScript to write server-side code, which means that they can create web applications with JavaScript on both the
client and server-side.

1. Node.js is a JavaScript runtime environment that allows developers to write server-side code using JavaScript.
2. Node.js is built on top of the V8 JavaScript engine, which is also used by Google Chrome.
3. Node.js is lightweight and efficient, which makes it a popular choice for building scalable and high-performance applications.
4. Node.js has a large and active community of developers, which means that there are many resources and libraries available to help you build your application.
5. Node.js uses an event-driven, non-blocking I/O model, which means that it can handle many requests at the same time without blocking the main thread.
6. Node.js supports a wide range of modules and packages, which makes it easy to add new functionality to your application.
7. Node.js can be used for a wide range of applications, including web servers, chat applications, real-time collaboration tools, and more.

Overall, Node.js is a powerful and flexible tool that allows developers to write server-side code using JavaScript.
It's a great option for building scalable and high-performance applications, and it's supported by a large and active
community of developers.

***

### Node modules

In Node.js, modules are essentially separate files that contain code that can be used in other parts of your program. 
A module can be thought of as a library or package of code that provides certain functionality.

When you create a module in Node.js, you are essentially creating a standalone unit of code that can be used in other 
parts of your program. This helps you keep your code organized and modular, making it easier to manage and maintain 
over time.

In Node.js, there are several built-in modules that you can use, such as `http`, `fs`, and `path`. These modules provide 
functionality that you can use in your own code without having to write it from scratch.

You can also create your own modules in Node.js by creating a separate file and exporting the code you want to share 
with other parts of your program. You can then import this module into other files using the `require()` function.

Overall, modules in Node.js provide a way to organize your code and make it more reusable. By breaking your code down 
into smaller, more manageable pieces, you can create programs that are easier to maintain and evolve over time.


***

### http module

Read the documentation for the http module here:
- [http module](https://nodejs.org/api/http.html)

**Example of a simple http server:**

To create an HTTP server, you can use the http.createServer() method. This method takes a callback function that is
called whenever a new request is received.

```JS
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello, world!');
  res.end();
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

```
In this example, we're creating an HTTP server that listens on port 3000. Whenever a new request is received, the
callback function is called with two arguments: the request object and the response object.

Inside the callback function, we set the response headers using `res.writeHead()` and write the response body using
`res.write()`. Finally, we end the response with `res.end()`.

***

### Read and Write files

Node.js provides a built-in `fs` module that allows you to work with the file system on your computer. 
This module provides a range of methods that allow you to read, write, and delete files and directories.

**Read the documentation for the fs module here:**
- [fs](https://nodejs.org/api/fs.html)

***

### How to create a new Node.js project with Typescript

1. The first step is to create a new Node.js project. You can do this by creating a new directory and running `npm init -y`.

```bash 
mkdir node-server
cd node-server
npm init -y
```

2. To make this a Typescript project, we need to install a couple of Typescript types and the `@types/node` package.

```bash
npm install --save-dev ts-node
npm install --save-dev @types/node
npm install --save-dev @types/http-server // only for http-server
npm install --save-dev @types/express // only for express-server
```

3. Next, we need to create a `tsconfig.json` file. This file contains the configuration for the Typescript compiler.

```bash
npx tsc --init
```

4. Remember to change the following in the `tsconfig.json` file:

```json
{
  "outDir": "./dist/",  /* Specify an output folder for all emitted files. */
},
"include": [
"src/**/*"
],
"exclude": [
"node_modules",
"dist"
]
```

5. The only thing left now is to create a `src` folder and a `index.ts` file in this folder.

***

### Environment variables

Most of the time we have to deal with environment variables. To make this easier we can use the `dotenv` package. 
Install the package with the following command:

```bash 
npm install dotenv
```

1. Create a `.env` file in the root of your project. This file will contain all the environment variables for your project.

Example:
```bash
PORT=3000
```

**Don't forget to add the `.env` file to your `.gitignore` file and don't add single quotes around the values. Another thing to remember to add to the gitignore file is the `dist` and `node_module` folder.**

2. To access the environment variables we can import the `dotenv` package and call the `config()` method. 
  - Remember that you have to call the `config()` method before you can access the environment variables.
  - The `config()` method takes an object as an argument. In this object you can specify the path to your `.env` file.
  - If you don't specify the path to your `.env` file, the `config()` method will look for a `.env` file in the root of your project.


```typescript 
import * as dotenv from 'dotenv';
dotenv.config({path:'PATH OF YOUR ENV FILE'});
```

***

#### log4js

I want you to use the `log4js` package to log messages to the console and write the most servere errors to a file. [log4js doc](https://log4js-node.github.io/log4js-node/).

How to install the package:

```bash
npm install log4js
```

How to use the package:

```typescript
import * as log4js from 'log4js';

log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    app: { type: 'file', filename: 'app.log' }
  },
  categories: {
    default: { appenders: ['out', 'app'], level: 'debug' }
  }
});

const logger = log4js.getLogger('default');

logger.debug('Some debug messages');
logger.info('Some info messages');
logger.warn('Some warning messages');
logger.error('Some error messages');
logger.fatal('Some fatal messages');
```

It would be a good idea to create a `logger.ts` file in the `src` folder and export the logger from this file.

### Class Exercises

Before we start with `express` we're going to use Node.js to create a simple server. Express is built on top of Node.js,
so it's important to understand how Node.js works before we start using Express.

**Remember to read the** [Node.js Guide](https://nodejs.org/en/docs/guides/) or one of the other documentations whenever you are in doubt.
**Reading the documentation is an important part of learning how to use a new tool!**

#### 1. Create a simple Node.js server

In this exercise I want you to create a simple Node.js web server that listens on port 3000. 

1. The first step is to create a new Node.js project. See the instructions above for how to do this.
2. Create a couple of routes.
   - home route `/`
   - about route `/about`
   - logger route `/logger`
   - data route `/data`
   - date route `/date`
3. The home route should return a simple HTML page with a title and a couple of links to the other routes.
4. The about route should return a simple HTML page with a title and a couple of paragraphs.
5. The logger route should return an HTML with a title and a sorted list of all the log messages.
   - you should be able to sort the log messages by date and by severity.
6. The data route should return a JSON object. [JSON Object](https://gist.github.com/tysker/1ebc990181fb31ab97306521fd36771a)
7. The date route should return a date and time from the url query string. `date?year=2022&month=11&day=30&hour=12&minute=30&second=30`. Use the `url` module to parse the query string.


#### 2. Create a simple Express server

In this exercise I want you to create a simple Express web server that listens on port 3000.
This exercise is very similar to the previous exercise, but this time you should use Express.
There are some differences between Express and Node.js (http module), so make sure you read the documentation for Express.

1. The first step is to create a new Node.js project. See the instructions above for how to do this.
2. Change the above Node.js project to an Express project.
3. I also want you to install `nodemon` and `morgan` as dev dependencies. [nodemon](https://www.npmjs.com/package/nodemon) and [morgan](https://www.npmjs.com/package/morgan);
4. In you package.json file add the following script:

```json  
"scripts": {
    "start:dev": "NODE_ENV=development nodemon --exec ts-node app.ts",
    "start:prod": "NODE_ENV=production nodemon --exec ts-node app.ts"
  },
```
5. In the above script we are using the `NODE_ENV` environment variable to specify if we are in development or production mode. 
6. To get `morgan` to work with typescript you have to install the `@types/morgan` package. 
7. Run the above script. Nodemon will now watch for changes in your project and restart the server when you make changes. 
8. morgan is a middleware that logs all the requests to the console. You can use this middleware to log all the requests to the console.

Example:

```typescript  
import morgan = require('morgan');
import express = require('express');
const app = express();

if (process.env.NODE_ENV === 'development') {
    console.log('Development mode')
    app.use(morgan('dev'));
}

```

9. Remember to use the `dotenv` package to access the environment variables and the `log4js` package to log messages to the console and to a file.


`morgan` is one of the many `middlewares` we are going to use. We are going to talk more about `middelware` more in the next chapter. 
For now, you can think of `middleware` as a function that is executed before the request reaches the route handler. 


