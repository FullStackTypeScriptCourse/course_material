# Week 5: Semester project part 1: React and Typescript

## Objectives
- Deepen your understanding of typescript and react
- Create the first part of your semester project
- Get more routine working with the different react ojbect types
- Do the first part of the project to hand in for the exam.

## Exercise 1 - Getting started
Create a new React project using Vite by running the following command: 
`npm create vite@latest my-project --template react-ts`

Define an interface for a Person type with the following properties: firstName, lastName, and age.

Create a new component called PersonList that displays a list of Person elements. The component should accept an array of Person objects as a prop.

Use the map function to render a list of Person components for each person in the array.

In the Person component, destructure the firstName, lastName, and age properties from the Person object and use them to render the person's information.

In the PersonList component, create some test data for at least 3 people and pass it to the component as the people prop.

Verify that the list of people is displayed correctly in the browser.

Here is some sample code to get you started:

```typescript
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

const PersonList: React.FC<{ people: Person[] }> = ({ people }) => {
  return (
    <ul>
      {people.map((person) => (
        <Person key={person.firstName} {...person} />
      ))}
    </ul>
  );
};

const Person: React.FC<Person> = ({ firstName, lastName, age }) => {
  return (
    <li>
      {firstName} {lastName}, {age} years old
    </li>
  );
};
```

## Exercise 2 Person Form

- Create a new component called PersonForm that accepts a callback function as a prop. The callback function should be called when the form is submitted and should receive the values from the form as an argument.
- The PersonForm component should render a form with three input fields: firstName, lastName, and age. The form should also have a submit button.
- When the form is submitted, the callback function should be called with an object containing the values from the input fields.
- In the PersonList component, pass a callback function to the PersonForm component that adds a new person to the people array.
- Verify that the new person is added to the list when the form is submitted.

## Exercise 3 - Update and Delete

- Create functionality to update and delete people from the list.

## Exercise 4 - Create a json server backend

- Using a json server (installed in the root of the project). Create a backend that can be used to store the people data.
- Use the backend to store the people data.
- Add another property to Person: Address with the following properties: street, city, zipCode, country.
- Add functionality to add, update and delete addresses for a person.
- All the time using typescript and not using the `any type` (since it circumvents the whole purpose of using typescript).

## Hand in
Hand in before next class session by uploading your solution to github and fill out this google [form](https://forms.gle/Yzhcp7raAw3d2J53A) with your details.
The github repo must contain the following:
1. README.md file in project root describing your project.
2. A folder called `src` containing all your source code.
3. All the necessary files and folders created by vite to install and run the project.


