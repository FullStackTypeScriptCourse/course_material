# Week 1: Javascript recap ES6

#### spread operator

The spread operator (...) in JavaScript is used to spread the elements of an iterable object, such as an array or a string, into a new array or multiple variables.

```js   
// One common use of the spread operator is to combine multiple arrays into one. For example:
const arr = [1, 2, 3, 4, 5];
const arr2 = [...arr, 6, 7, 8, 9, 10];
console.log(arr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
```js
// Object
const obj = { foo: 'bar', x: 42 };
const clonedObj = { ...obj };
console.log(clonedObj); // Object { foo: "bar", x: 42 }
```

```js
// Function arguments
const func = (a, b, c) => {
  console.log(a, b, c);
};
const args = [0, 1, 2];
func(...args); // 0 1 2
```

#### rest operator
The rest operator (...) in JavaScript is used to gather a variable number of arguments into an array. This operator is used in function parameter and allows to gather the remaining parameters passed to a function.
The syntax for the rest operator is similar to the spread operator, the only difference is that it is used in the function parameter.

```js   
// Useing the rest operator in a function parameter to indicate that it can take any number of arguments
function add(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}
console.log(add(1, 2, 3)); // 6
console.log(add(10, 20, 30, 40)); // 100

```
Another example is when using the rest operator in destructuring

```js
const person = { name: 'John', age: 30, job: 'teacher'};
const { name, ...rest } = person;
console.log(name); // 'John'
console.log(rest); // {age: 30, job: 'teacher'}
``` 

#### destructuring

Destructuring in JavaScript is a feature that allows you to extract data from arrays or objects and assign them to separate variables. 
It allows you to extract values from arrays and objects, and assign them to individual variables.

The syntax for destructuring an array is similar to that of creating an array, but instead of assigning a value to an array, you assign the value to a variable: 

```js
// destructering an object into variables
const obj = { first: 'Jane', last: 'Doe' }; 
const { first, last } = obj;
console.log(first); // Jane
console.log(last); // Doe
```

```js   
// destructering an array into variables
const arr = ['foo', 'bar', 'baz'];
const [first, second, third] = arr;
console.log(first); // foo
console.log(second); // bar
console.log(third); // baz
``` 

#### template literals

```js
const name = 'Jane';    
const greeting = `Hello ${name}!`;
console.log(greeting); // Hello Jane!
```

#### default parameters

```js
const func = (a, b = 2) => {
  console.log(a + b);
};
func(3); // 5
```
In JavaScript, the **for-in** loop is used to iterate over the **properties of an object**, while the **for-of** loop is used
to iterate over the **values of an iterable object**, such as an array or a string.

#### for...of

```js

for (var value of iterable) {
    // code to be executed for each value
}

const arr = ['a', 'b', 'c'];
for (const element of arr) {
  console.log(element);
}
// a
// b
// c
```

#### for...in

```js

for (var property in object) {
    // code to be executed for each property
}


const obj = { a: 1, b: 2, c: 3 };
for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}
// obj.a = 1
// obj.b = 2
// obj.c = 3
```

#### Classes

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
    console.log(this.name + ' barks.');
  }
}

```

## Class Exercise 3 - ES6

a) Change the code to ES6 classes. You should use constructors, the super and extend keyword.

```js
function Employee(name, salary, hireDate) {
    this.name = name;
    this.salary = salary;
    this.hireDate = hireDate; //"01/01/2015"
}

function Manager(jobTitle, descriptionOfJob, employeesManaged) {
    this.jobTitle = jobTitle;
    this.descriptionOfJob = descriptionOfJob; //"Manager of the Sales Department"
    this.employeesManaged = employeesManaged;
}

function Department(departmentName, employees) {
    this.departmentName = departmentName;
    this.employees = employees; // ["Steve", "Marc"]
}

function Contract(name, salary, hireDate, jobTitle, descriptionOfJob, employeesManaged, departmentName, employees) {
    Employee.call(this, name, salary, hireDate);
    Manager.call(this, jobTitle, descriptionOfJob, employees.length);
    Department.call(this, departmentName, employees);
}
```

b) Create a toString() function for each of the Employee, Manager and Department class using the template literal.
In the toString() remember to call the super.toString() method to get the parent class properties.
The toString() function of the Department class should return a string with the following format:

```
 "Employee: Steve Taylor, Salary: 50000, Hire Date: 01/01/2015.
  Job Title: Manager, Description of Job: Manager of the Sales Department, Employees Managed: 2.
  Department Name: Sales, Employees: Steve,Marc"
``` 

c) Loop through the numbers array and the employee object and print out the values using the propper for loop method. (for-in, for-of)

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const employee = new Employee("Steve Taylor", 50000, "01/01/2015");
``` 


```JS
const calculator = function (num1, num2) {
    return num1 + num2;
}
```

da) Change the calculator function to an arrow function.

db) Change the function to a one line function by use the implicit return.

dc) Create a default value for one of the parameters.

dd) Use the rest operator to change the function to accept any number of parameters.

```JS
const manager = new Manager("Manager", "Manager of the Sales Department", ["Steve", "Marc"]);
```
e) Use destructuring to get the jobTitle and descriptionOfJob properties from the manager object.

