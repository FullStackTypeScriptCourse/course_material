# Course day 1: Javascript recap with callbacks

## Objectives

- Understand how to use callbacks
- Understand lambda functions
- Understand how to write functions that take functions as arguments
  - in a useful way
- Understand the most common used  features of ES6 

## How to prepare before class

1. See video on [callbacks: **6.43**](https://www.youtube.com/watch?v=kz_vwAF4NHI&ab_channel=JamesQQuick)
2. See video on [eventloop: **7.19**](https://www.youtube.com/watch?v=lqLSNG_79lI&ab_channel=JamesQQuick)

### What is a callback?

A callback is a function that is passed as an argument to another function. The function that takes the callback is called the "higher order function". The callback is called by the higher order function.
A callback function in JavaScript is a function that is passed as an argument to another function and is executed after some kind of event or operation has completed. The function that takes the callback
function as an argument is often referred to as the "parent" function, and the callback function is often referred to as the "child" function.

### Why use callbacks?

Callbacks are useful when you want to do something asynchronously. For example, you might want to make an HTTP request to a server, but you don't want to wait for the response before continuing with your program. You can pass a callback to the function that makes the HTTP request, and the callback will be called when the response is received.

Callbacks are useful for when you want to do something after a long-running operation. For example, you might want to write a function that reads a file from disk, but you don't want to wait for the file to be read before continuing with your program. You can pass a callback to the function that reads the file, and the callback will be called when the file has been read.

Callbacks are also useful to configure how a function behaves. For example, you might want to write a function that filters an array in a certain way based on some specific criteria. These criteria can be passed as a callback to the function that filters the array as is the case with the array.filter() method in javascript.


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

### Class Exercise 1

Look at the following javascript code: 
```js
function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function operateOnNumbers(operator, x, y) {
  return operator(x, y);
}

console.log(operateOnNumbers(add, 3, 4));   // 7
console.log(operateOnNumbers(multiply, 3, 4));   // 12
````
1. Look at the code above and try to explain what the code does.
2. Run the operateOnNumbers function with a different operator (use lambda here) to subtract the numbers.
3. Based on above code example write a function that takes two functions and an array of numbers, and returns an array with the result of applying each function to each number in the array. E.g. lift to the power of 2 and then divide by 10 or something like that.

### Class Exercise 2
1. Write a function that can take a reference to a csv file and a callback function as arguments.
  - The calback function dertemines what to do with the data from the csv file.
  - Create a function that can produce an html table from the data in the csv file.
  - Create a function that can produce a json object from the data in the csv file.
  - Create a function that can produce a markdown table from the data in the csv file.
2. Run the function with different callbacks to produce different results with csv like this: 
```csv
name, studentId, phoneNumber, email, address
Abraham Doe, 123456, 12345678, ad@mail.com, 1234 Street
Beth Hart, 123457, 12345679, bh@mail.com, 1235 Street
Cain Jansen, 123458, 12345680, cj@mail.com, 1236 Street
Diane Smith, 123459, 12345681, ds@mail.com, 1237 Street
Eve Fullrow, 123460, 12345682, ef@mail.com, 1238 Street
```
