# Week 1: Javascript recap with callbacks

## Objectives

- Understand how to use callbacks
- Understand lambda functions
- Understand how to write functions that take functions as arguments
  - in a useful way

### What is a callback?

A callback is a function that is passed as an argument to another function. The function that takes the callback is called the "higher order function". The callback is called by the higher order function.

### Why use callbacks?

Callbacks are useful when you want to do something asynchronously. For example, you might want to make an HTTP request to a server, but you don't want to wait for the response before continuing with your program. You can pass a callback to the function that makes the HTTP request, and the callback will be called when the response is received.

Also callbacks are useful for when you want to do something after a long running operation. For example, you might want to write a function that reads a file from disk, but you don't want to wait for the file to be read before continuing with your program. You can pass a callback to the function that reads the file, and the callback will be called when the file has been read.

Also callbacks are useful to configure how a function behaves. For example, you might want to write a function that filters an array in a certain way based on some specific criterias. These criterias can be passed as a callback to the function that filters the array as is the case with the array.filter() method in javascript.

### How to use callbacks

Callbacks are functions, so they can be passed as arguments to other functions. For example, the setTimeout function takes a callback as an argument. The callback will be called after the specified amount of time has passed.

```js
console.log("Hello you");
setTimeout(() => {
  console.log("Hello again");
}, 1000);
```

### Lambda functions

Lambda functions are functions that are defined without a name. They are also called anonymous functions. Lambda functions are useful when you want to pass a function as an argument to another function. 

### How to write functions that take functions as arguments

```js
function doSomething(callback) {
  console.log("Doing something");
  callback();
}

doSomething(() => {
  console.log("Callback called");
});
```
