# Express && Node.js

### Agenda

- Node
- Express
- Exercises
- Homework
- Resources

### Express Middleware

- [What the heck is middleware?](https://www.youtube.com/watch?v=MIr1oxQ3pao)
- [Express Middleware](https://expressjs.com/en/guide/using-middleware.html)

### Node

1. Studying the Node.js Guide 
2. Show them that you can ruin JavaScript by using Node.js in the terminal by just typing `node` and then `console.log('hello world')`.
   - Start by showing them the REPL doc: https://nodejs.dev/en/api/v19/repl/
   - Try `const name = 'John'` and then `name`.
   - Hit tab twice to see all global variables that are available in Node.js.
   - Write `String.` and then hit tab twice to see all the methods that are available on the String object. 
3. Explain __dirname and __filename
4. Show them `console.log(module)` and `console.log(arguments)`
4. Studying the Node NPM Guide 
4. Reading and writing to files in Node.js: https://nodejs.dev/en/api/v19/fs/
   - `npm i --save-dev @types/node` && `npm install ts-node --save-dev`
   - `const fs = require('fs')` 
3. Create a simple Node.js server  
5. Explain how to use environment variables with help of dotenv. Print out `console.log(process.env)`
6. Node environment like development, production, staging, etc. https://nodejs.dev/en/learn/nodejs-the-difference-between-development-and-production/
7. Serving static files 
8. CRUD operations with Node.js and Express
9. Litte about middleware
10. Error handling

- If time show them how to use axios and fetch with TypeScript.
- A repository with over 7000 types for different modules/packages. https://github.com/DefinitelyTyped/DefinitelyTyped // look under the types folder
- Try to go to npm and search for types for `leaflet` or `lodash`


```TypeScript
import axios from "axios";

interface TODO {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

axios.get<TODO[]>("https://jsonplaceholder.typicode.com/todos/1", {
    headers: {
        "Content-Type": "application/json",
    }
})
    .then(response => {
        const data = response.data;
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });


fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then<TODO[]>(response => response.json())
    .then(data => printTodo(data))
    .catch(error => console.log(error));

function printTodo(todo: TODO[]) {
    console.log(todo);
}
```

### Type declaration files

Type declaration files (also known as "typings" or "definition files") are used in programming languages, particularly 
in TypeScript, to describe the shape and behavior of external libraries or modules.

When you use an external library or module in your TypeScript project, you need to inform the compiler about the types, 
properties, and methods of the library or module you are using. Type declaration files provide this information to the compiler so it can ensure that your code is type-safe and free from errors.

Type declaration files typically have a ".d.ts" file extension and contain interface declarations, type aliases, and 
other type-related information about the library or module. They can be written manually, but many popular libraries 
have pre-written type declaration files that you can download and use in your project.

Using type declaration files can improve your development workflow by providing autocompletion and type-checking in 
your IDE or code editor. They also help to make your code more maintainable by providing a clear understanding of the 
interfaces and types used in your project, making it easier to update and refactor your code.

Steps to use type declaration files in your project:

1. Create a types folder in the root of your project.
2. Create a file called `index.d.ts` in the types folder.


### What to do better next time

- Make a couple of slides to explain node, http, express, etc.
- Explain development, production, staging, etc.
- You have to focus more on the exercises and homework.
