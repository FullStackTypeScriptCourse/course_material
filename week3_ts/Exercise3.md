# Week 3 Exercise: Typescript vs Javascript
## Part 1: Working in the browser
Check out [stackblitz](https://blog.stackblitz.com/posts/vite-new-templates/)
1. Try creating a new project with the `vanilla-ts` template
2. Take a look at the counter.ts and see how it works
3. Now create your own file with an input field and a button. When the button is clicked, it should alert a `Hello <inputname` to the user.
  - Hints: 
    - use `document.createElement('input');` and `document.createElement('button');` to create the elements.
    - Send a div element `(container: HTMLDivElement)` to the function as a container for both the input and the button.
    - use `container.appendChild(element)` to add the elements to the container.

## Part 2: Making your own project
1. Create a new typescript project with `vite init project-name -- --template vanilla-ts`
2. Create a class called Person that has the following properties and methods:

Properties:
`name`: string
`age`: number
`occupation`: string
`private_salary`: number
`Constructor`:
- The constructor should take in three arguments: name, age, and occupation.
- It should initialize the properties with the provided values
- It should also have a default value of salary 0.
*Methods*:
`introduce`: a method that returns a string introducing the person, in the format "Hello, my name is {name} and I am a {occupation}. I earn {salary}$"
`incrementAge`: a method that increases the person's age by one
`setSalary`: a method that takes in a number as an argument, and sets the value of salary to that number.
`getSalary`: a method that returns the value of salary
Here's an example of how the class should be used:

```typescript
const john = new Person("John Smith", 30, "software developer");
console.log(john.introduce()); // "Hello, my name is John Smith and I am a software developer. I earn 0$"
console.log(john.age); // 30
john.incrementAge();
console.log(john.age); // 31
john.setSalary(100000);
console.log(john.getSalary()); //100000
console.log(john.introduce()); // "Hello, my name is John Smith and I am a software developer. I earn 100000$"
```

#### Upload your solutions to github 
1. Create a new folder on your github repo called `week3_ts`
2. Part 1 of ther exercise should be available as a link in the README.md file in the `week3_ts` folder.
3. Part 2 of the exercise should be available as a full project in the `week3_ts` folder.
