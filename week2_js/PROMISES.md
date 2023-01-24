# Week 2: PROMISES AND ASYNC/AWAIT (CALLBACK RECAP)


## Objectives

- Understand what a promise is
- Understand how to use promises
- Understand how to use async/await
- Understand how to use callbacks

## How to prepare before class

1. Go to [https://www.youtube.com/watch?v=2d7s3spWAzo](https://www.youtube.com/watch?v=2d7s3spWAzo) and watch the video
   about promises
2. Go to [https://www.youtube.com/watch?v=568g8hxJJp4](https://www.youtube.com/watch?v=568g8hxJJp4) and watch the video
   about async/await
3. Create an API KEY on [openweathermap.org](https://openweathermap.org/) **!!!--IMPORTANT--!!!**
4. Read the [differences-between-nodejs-and-the-browser](https://nodejs.dev/en/learn/differences-between-nodejs-and-the-browser/)

### What is promises in JavaScript?

A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it's not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. 
Promise users can attach callbacks to handle the fulfilled value or the reason for rejection. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise 
to supply the value at some point in the future. 

### Promise Instantiation

```JS
const promise = new Promise((resolve, reject) => {
   /*
     Your code logic goes here and you call  resolve(value)
     or reject(error) to resolve or reject the promise
   */ 
})

promise.then((value) => {
   // Code logic on success of an operation
}).catch(error => {
  // Code logic on failure of an operation
}).finally(() => {
  // Code logic to be executed after completion of operation
})
```

### How to use promises

A promise is created using the new Promise constructor function. This function takes a single argument, a callback with two parameters, resolve and reject. 
Do something within the callback, perhaps asynchronously, then call resolve if everything worked, otherwise call reject.


### How to use async/await

Async functions are a new feature in ES2017 that allow you to write asynchronous code in a synchronous way.
Async functions are functions that return a Promise. They can be written in a more concise way than a promise.

### How to use callbacks

A callback is a function that is to be executed after another function has finished executing-hence the name ‘call back’.

### Why do we need promises?

Promises are a way to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple 
asynchronous operations where callbacks can create callback hell leading to unmanageable code. 

### What is callback hell?

Callback hell is a problem with asynchronous code. It is a situation where you have a series of functions that call each other, 
where each function is dependent on the previous function’s result. This can lead to a lot of nested callbacks, which makes
the code hard to read and maintain. 

### What is the difference between a promise and a callback? SUMMARY!

Callbacks are a way to handle asynchronous operations in JavaScript. They are easy to manage when dealing with a single 
asynchronous operation. However, they can create callback hell leading to unmanageable code. Promises are a way to handle
asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where
callbacks can create callback hell leading to unmanageable code.


### Exercises

- [Class Exercises 1](#class-exercises-1)
- [Class Exercises 2](#class-exercises-2-implement-your-own-promises)
- [Class Exercises 3](#class-exercises-3)
- [Class Exercises 4](#class-exercises-4-weather-app)

- a) open your favorite code editor and create a new folder javascriptWeek2

### Class Exercises 1

Let's start with a simple callback example to warm up:

- a) Create a new folder called callbacks and create a new file called callbacks.js
- b) Create a function called calculate that takes 3 parameters: x, y and a callback called operation
- c) Create another function called add that takes 2 parameters: x and y and returns the sum of x and y
- d) The calculate function should return the result of the operation function
- e) Call the calculate function with the appropriate parameters to test your code

Right now our calculator only supports addition, that makes that calculator pretty
useless.
Let's add some more operations by adding some more functions:

    - subtraction
    - multiplication
    - division

- f) call the function calculate with the appropriate parameters to test your code.

### Class Exercises 2 Implement your own Promises

- a) Create a new folder called promises and create a new file called promises.js
   
     The above calculator exercise was a good warm up, but we can do better.
     Let's create our own promise that will do the same thing as the calculate function
     from the previous exercise.

- b) Change the calculate function to return a promise instead of a value and call the
     appropriate resolve or reject function depending on the result of the operation function call.
     Make sure to reject the promise if the operation function throws an error like divide by zero!
- c) Call the new calculate function with the appropriate parameters to test your code.
- d) Now try to chain add, subtract, divide and multiply using the .then syntax to the new calculator functions that returns a promise. 
     How is that possible?? Explain!! 
- e) Change the calculate function to use the async/await syntax instead of promises



### Class Exercises 3

Great!! Now that we are warmed up, let's try to make a litte weather app that will get the user's location and then
   get the weather for that location

- a) Create a new folder called weather-app and create a new file called weather.js

- b) Inside the weather folder create a new node project with the following command:

```BASH
npm init - y
```

- c) We will need to use the following npm packages:
   - npm install node-navigator
   - npm install xmlhttprequest
   - npm install lite-server
   - in package.json add the following line to the scripts object:
     "start": "lite-server weather.js"

- d) First we need to get the user's location:

```JS

const {Navigator} = require("node-navigator");
const navigator = new Navigator();

function getLocation(callback) {
    navigator.geolocation.getCurrentPosition(function (position) {
        callback(position);
    });
}
```

 - Now we need to get the weather for that location:

```JS
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getWeather(coords, callback) {
    const apiKey = "YOUR KEY HERE";
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
        if (req.status == 200) {
            callback(JSON.parse(req.responseText));
        } else {
            callback(new Error(req.statusText));
        }
    };
    req.send();
}
```

- Now let's call the functions:

```JS
getLocation(function (coords) {
    getWeather(coords, function (weather) {
        console.log(weather);
    });
});
```

- e) Your assignment is now to make the above code more readable and understandable. You can do this by using promises.
Both functions above needs to return a promise. You can use the following code as a starting point:

```JS
function getLocation() {
    return new Promise(function (resolve, reject) {
        try {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve(position);
            });
        } catch (e) {
            reject(e);
        }
    });
}
```

The getWeather function you need to create yourself.

- f) Now call both functions and log the weather to the console using the .then() and .catch() methods.

- g) Now I want you to make the code even more readable by using async/await. You can use the following code as a starting point:

```JS
async function getWeather() {
    try {
    // your code here
    } catch (e) {
    // your code here
    }
}
```

### Class Exercises 4 Weather APP

- a) Now that you have the weather, you can display it to the user. Create a new file called index.html and add the
   following code:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Weather App</title>
</head>
<body>
<h1>Weather App</h1>
<div id="weather"></div>
<script src="weather.js"></script>
</body>
</html>
```

- b) Now add the following code to the weather.js file:

```JS
document.getElementById('weather').innerHTML = weather.main.temp;
```

- c) Now run the following command to start a local server:

```BASH 
npm start
```

- d) Now open your browser and go to localhost:3000, and you should see the temperature of your location.

## WARNING:

You may get an error message in your browser console saying that require is not defined. Why do you think that is ??
Remember the text you read before class! Think about it for a minute and then read on.

***

The problem that arises here is that the browser doesn't know what require is.  To fix this you need to change the following to the weather.js file:


- delete the following lines:

```JS
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const {Navigator} = require("node-navigator");
```

and change the following line in getLocation() og getWeather():

```JS
// the change below has noting to do with the require problem, it is the way the position object is structured
// FROM
resolve(position);
callback(JSON.parse(req.responseText));
//TO
resolve(position.coords);
callback(JSON.parse(req.response));
``` 

Now it should work in the browser. (HOPEFULLY!!)

- e) Now that you have the temperature, you can add some more information to the page. Add the following code to the
   weather.js file:

```JS
document.getElementById('weather').innerHTML = weather.main.temp + ' ' + weather.weather[0].description;
```


- f) Now add some styling to the page. Add the following code to the index.html file:

```HTML 
<style>
    body {
        background-color: #f2f2f2;
        font-family: Arial, Helvetica, sans-serif;
    }

    h1 {
        text-align: center;
        color: #333;
    }

    #weather {
        width: 300px;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
</style>
```

Feel free to add more functionality to the app. For example, you can add a background image that changes depending on the weather.













