## Node & Express

### Agenda

- Node
- Express
- Exercises
- Homework
- Resources

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
