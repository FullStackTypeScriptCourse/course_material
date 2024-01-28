# Snake Game

## Context and Objectives

This is a simple snake game made with JavaScript and HTML5 Canvas.

The goal of this exercise is to convert the JavaScript code to TypeScript.

## Setup and Instructions

1. Create a simple npm project with a `package.json` file.
2. Install the following dependencies:
    ```json
       "ts-node": "^10.9.1",
       "lite-server": "^2.6.1"
    ```
3. Create two files `snake.ts` and `index.html` in the root of your project.
4. Copy the code from [Git-Gist](https://gist.github.com/tysker/95ad7acdc42469b9006e1166014e0415) into the `snake.ts` file.
5. Copy the code from [Git-Gist](https://gist.github.com/tysker/71d02b4e249a62c45b6f39c9264ee21f) into the `index.html` file.
6. Create a script in your `package.json` file with the following command:
    ```json
    "start": "lite-server snake.js"
    ```
7. Fix all the errors in the `snake.ts` file.
8. Run `npm start` and open your browser at `http://localhost:3000` to see the game.

- add types to all the variables
- add types to all the functions
- add types to all the function parameters
- add types to all the function return values
- add types to all event listeners and Html elements
- add types to all classes (and their properties and methods)
- remember to add `public/private` modifiers to the properties and methods of the classes
- in some cases you will need to use the `!` operator to tell TypeScript that a variable is not null or undefined


Have fun! 🐍