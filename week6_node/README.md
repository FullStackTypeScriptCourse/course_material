## Node.js

### Node

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

### Express

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
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

```

In this example, we're creating an Express app and defining a single route at the root URL `(/)`.

When a GET request is made to this URL, Express calls the callback function that we've defined, 
which sends the string "Hello, world!" back to the client using `res.send()`.

Finally, we start the Express app by calling the `listen()` method and specifying the port number to listen on.

This is just a simple example, but it should give you a sense of how easy it is to get started with Express in Node.js. 
Express provides a powerful set of features for building web applications, including middleware, routing, and templating.

*** 

### Read and Write files

Node.js provides a built-in `fs` module that allows you to work with the file system on your computer. 
This module provides a range of methods that allow you to read, write, and delete files and directories.

**Read the documentation for the fs module here:**
- [fs](https://nodejs.org/api/fs.html)

### Links

**Make sure you look at the links below before class!! :smile:**

#### Node
- [Node.js Guide](https://nodejs.org/en/docs/guides/)
- [NOde NPM Guide](https://nodejs.dev/en/learn/an-introduction-to-the-npm-package-manager/)
- [Node.js with Typescript](https://nodejs.dev/en/learn/nodejs-with-typescript/)
- [Node.js fs file system](https://nodejs.dev/en/api/v19/documentation/)
- [Using environment variables](https://nodejs.dev/en/learn/how-to-read-environment-variables-from-nodejs)
  - [dotenv](https://www.npmjs.com/package/dotenv)


#### Express
- [Express](https://expressjs.com/)

***

### Exercises

Before we start with `express` we're going to use Node.js to create a simple server. Express is built on top of Node.js, 
so it's important to understand how Node.js works before we start using Express. 

**Remember to read the** [Node.js Guide](https://nodejs.org/en/docs/guides/) before you start. 
**Reading the documentation is an important part of learning how to use a new tool!**

#### How to create a new Node.js projectwith Typescript

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
npm install --save-dev @types/http-server
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

5. Most of the time we have to deal with environment variables. To make this easier we can use the `dotenv` package. 
Install the package with the following command:

```bash 
npm install dotenv
```

6. Create a `.env` file in the root of your project. This file will contain all the environment variables for your project.

Example:
```bash
PORT=3000
```

**Don't forget to add the `.env` file to your `.gitignore` file and don't add single quotes around the values. Another thing to rembember to add to the gitignore file is the `dist` and `node_module` folder.**

7. To access the environment variables we can import the `dotenv` package and call the `config()` method. 
  - Remember that you have to call the `config()` method before you can access the environment variables.
  - The `config()` method takes an object as an argument. In this object you can specify the path to your `.env` file.
  - If you don't specify the path to your `.env` file, the `config()` method will look for a `.env` file in the root of your project.


```typescript 
import * as dotenv from 'dotenv';
dotenv.config({path:'PATH OF YOUR ENV FILE'});
```

8. The only thing left now is to create a `src` folder and a `index.ts` file in this folder.

#### 1. Create a simple Node.js server

In this exercise I want you to create a simple Node.js web server that listens on port 3000. 

1. The first step is to create a new Node.js project. See the instructions above for how to do this.




#### 2. Create a simple Express server

// To be implemented
