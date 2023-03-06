## Node & Express

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



In this example, we're creating an HTTP server that listens on port 3000. Whenever a new request is received, the 
callback function is called with two arguments: the request object and the response object.

Inside the callback function, we set the response headers using res.writeHead() and write the response body using 
res.write(). Finally, we end the response with res.end().

### Exercises

Before we start with `express` we're going to use Node.js to create a simple server. Express is built on top of Node.js, 
so it's important to understand how Node.js works before we start using Express. 

**Remember to read the** [Node.js Guide](https://nodejs.org/en/docs/guides/) before you start. 
**Reading the documentation is an important part of learning how to use a new tool!**


#### 1. Create a simple Node.js server

// To be implemented


#### 2. Create a simple Express server

// To be implemented
