# Course day 3 Exercise: Typescript vs Javascript
## Part 1: Working in the browser
Check out [stackblitz](https://blog.stackblitz.com/posts/vite-new-templates/)
1. Try creating a new project with the `vanilla-ts` template (in browser: vite.new/vanilla-ts)
2. Take a look at the counter.ts and see how it works
3. Now create your own file with an input field and a button. When the button is clicked, it should alert a `Hello <inputname>` to the user.
  - Hints: 
    - use `document.createElement('input');` and `document.createElement('button');` to create the elements.
    - Send a div element `(container: HTMLDivElement)` to the function as a container for both the input and the button.
    - use `container.appendChild(element)` to add the elements to the container.

## Part 2: Making your own project
1. Create a new typescript project with `npm create vite@latest my-new-app` and choose vanilla and typescript from the menu.
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
`introduce()`: a method that returns a string introducing the person, in the format "Hello, my name is {name} and I am a {occupation}. I earn {salary}$"
`incrementAge()`: a method that increases the person's age by one
`setSalary(salary:int)`: a method that takes in a number as an argument, and sets the value of salary to that number.
`getSalary():int`: a method that returns the value of salary
Here's an example of how the class could be used:

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

## Part 3: Working with the DOM
- Use the following [data](./people.json).
- Create a module called `people.ts` that exports a function called `getPeople()`. This function should return a promise that resolves to an array of Person objects.
- Create a module called `peopleList.ts` that exports a function called `renderPeopleList()`. This function should take in a container element and a list of people. It should render a list of people in the container element. Each person should be rendered as a div element with the following structure:
```html
<div class="person">
  <h2 class="person__name">John Smith</h2>
  <p class="person__occupation">Software Developer</p>
  <p class="person__age">30</p>
  <p class="person__salary">100000</p>
</div>
```
- Create a module called `app.ts` that imports the `getPeople()` function from `people.ts` and the `renderPeopleList()` function from `peopleList.ts`. It should then call the `getPeople()` function and render the list of people in the container element.
- Import it in the index.ts file and call the `renderPeopleList()` function.
- Make sure it shows up right in the browser.

## Part 4:
Using this starting point: 
```typescript
type Role = 'Developer' | 'Manager' | 'Designer' | 'HR'; // this is a union type

type Employee = {
  // Define Employee type here
};

const employees: Employee[] = [
  { name: 'Alice', age: 30, role: 'Developer', salary: 60000, department: 'Engineering' },
  { name: 'Bob', age: 35, role: 'Manager', salary: 40400, department: 'Management' },
  { name: 'Charlie', age: 28, role: 'Designer', salary: 55000, department: 'Design' },
  // Include more employee records here with null salary values
];

function getAverageSalary(...): ... {
  // Calculate average salary, considering null as 0
}

function findEmployeesByRole(...): ... {
  if (typeof role !== 'string' || !['Developer', 'Manager', 'Designer', 'HR'].includes(role)) {
    throw new Error('Invalid role');
  }

  // filter employees by role
}

// Usage
const averageSalary = getAverageSalary(employees);
console.log('Average Salary:', averageSalary);

const developers = findEmployeesByRole(employees, 'Developer');
console.log('Developers:', developers);
```
Do the following:
1. Define the `Employee` type that includes the following properties:
   - `name` (string)
   - `age` (number)
   - `role` (union type of specific roles)
   - `salary` (number)
   - `department` (string)
2. Create an array of `Employee` objects with a minimum of 6 employees. Include some `null` values in a few employee records for salary.
3. Implement a function `getAverageSalary` that takes an array of `Employee` objects and returns the average salary of all employees. If the salary for an employee is `null`, consider it as zero while calculating the average.
4. Implement a function `findEmployeeByRole` that takes an array of `Employee` objects and a `role` (using `unknown` type) as input and returns an array of employees with the provided role.
5. Integrate the above functions in the `main.ts` file and print the results in the browser console.
6. Make a display of the employees in the browser (as a table)
7. Display the average salary in the browser
8. Make an input field to filter employees in the table by role (use the `findEmployeeByRole` function)

#### Upload your solutions to github 
1. Create a new folder on your github repo called `Course day3_ts`
2. Part 1 of ther exercise should be available as a link in the README.md file in the `Course day3_ts` folder.
3. Part 2 of the exercise should be available as a full project in the `Course day3_ts` folder.
