# Exercise: Frontend with GraphQL
<img src="https://jsonworld.com/content/uploads/image/what-is-graphql-and-difference-with-REST-API.jpg" width="300"> . 

1. Create a new project using `npm create vite@latest client --template react-ts` and install the following dependencies: `npm install @apollo/client graphql`, `npm install -D @types/react-router-dom` and `npm install --save-dev typescript @types/node`. 
2. Create a view with list of people using the backend created in the previous exercise.
3. Create a view with person details showing the address of a person and an image of the person (change the backend to return an image url).
4. Create a view with a form to create a new person. Using the graphql mutation `createPerson` to create a new person.
5. Create a view with a form to create a new address. Using the graphql mutation `createAddress` to create a new address.
6. Create a view with a form to add a person to an address. Using the graphql mutation `addPersonToAddress` to add a person to an address.
7. In the people view create a delete button next to each person. Using the graphql mutation `removePerson` delete the person from the server and make sure to remove the person from the address.
8. Add any functionality you can think of to the application.