# course material

## Schedule

***

| Course day | Date          | Subject                                                                            | Content                                                                 | Teacher |
|------------|---------------|------------------------------------------------------------------------------------|-------------------------------------------------------------------------|---------|
| 01         | 31/10/2023    | [JS Part 1 ](01_js/RECAP_CALLBACKS.md) && [JS part 2 ](01_js/RECAP_ES6.md)         | ES6 recap, Callback, Writing functions that use callbacks               | THA     |
| 02         | 2/11/2023     | [JS Part 3](02_js/PROMISES.md)                                                     | Asynchronous JavaScript with Promises, Async-Await                      | JORG    |
| 03         | 7/11/2023     | [Typescript 1](03_ts/README.md)                                                    | Transpiler, auto-transpile, tsconfig, type, interface, class            | THA     |
| 04<br/>05  | 9/11/2023     | [Typescript 2](04_ts/README.md)                                                    | Using typescript in a react project                                     | JORG    |
| 06         | 14/11/2023    | [Node.js && Express 1](05_express/README.md) && [Exercise](05_express/EXERCISE.md) | Read & write to files, environment variables etc. Rest-api with express | THA     |
| 07         | 16/11/2023    | [MongoDB && Mongoose ](06_mongodb/README.md)                                       |                                                                         | JORG    |
| 08         | 21/11/2023    | [MongoDB Data Modelling](07_data_modelling/README.md)                              |                                                                         | THA     |
| 09         | 23/11/2023    | [GraphQL](08_graphql_backend/README.md)                                            | State management                                                        | JORG    |
| 10         | 28/11/2023    | [React 1](09_graphql_client/README.md)                                             | Hooks (create our own hooks). Recap                                     | THA     |
| 11         | 30/11/2023    | [React 2](10_state_management/README.md)                                           |                                                                         | JORG    |
| 12         | 5/12/2023     | [React 3](11_custom_hooks/README.md) (Frontend GraphQL)                            |                                                                         | THA     |
|            | 14-15/12/2023 | [Frontend design](12_tailwind/README.md) (GUI layout)                              | Security Exam !!                                                        |         |
|            | 20/12/2023    |                                                                                    | Exam project hand-in on Wiseflow                                        |         |
|            | 5/1/2024      |                                                                                    | Exam                                                                    |         |
|            |               |                                                                                    |                                                                         |         |

***

## Links

- [Moodle](https://cphbusiness.mrooms.net/course/view.php?id=11091)
- [Backend StartCode](https://github.com/FullStackTypeScriptCourse/fullstack_backend_startcode)

***

## Hand-in and Exam.

1. Create a GitHub repo for all your work in this course and link to
   it [here](https://docs.google.com/spreadsheets/d/1IKFYbYwqUlZ0sUaFcLaxl154NgoaRl0g57yY6k3ipo0/edit?usp=sharing)
2. The repo should contain a folder for each week. Each folder should contain a README.md file with the answers to the
   exercises.
3. There should also be a folder for the semester project which you will work on gradually over the course.
4. All your code in the repo will be used for the exam.

## Semester project requirements

- The project should be a fullstack typescript project with a frontend and a backend.
- The project should use a mongodb database.
- The project should use graphql for communication between frontend and backend.
- The graphql should make use of mutations and queries, that can create and update Models and relations between models.
- The project should use react for the frontend.
- The project should use node.js, express, mongoose and apollo server for the backend.
- The project should use typescript for both frontend and backend.
- Depending on the size of your group, the project should have a minimum of 3-4 models (more if you are 3-4 people)

### Optional requirements

- The project could be deployed on a docker container on Digital Ocean.
- The project could use a CI/CD pipeline for deployment.
- The project could use a frontend library for routing (react router, etc.)
- The project could use a frontend library for styling (styled components, material ui, etc.)
- The project could expose som rest endpoints alongside the graphql endpoint.
- The project could use JWT for authentication and some of the endpoints could be protected.
- The frontend could have rolebased routing (admin, user, etc. only visible to logged in users with the correct role).

## Exam details

- The exam is primaryly based on your group semester project.
- The exam is a 30 min **individual** oral exam with no preparation time based on your code (primaryly the semester
  project)
- You will be asked to explain and/or extend your code
- You will be asked questions about the course curriculum like the ones below the learning objectives.

## Learning objectives

### Flow 1

Course day 1: Javascript recap with callbacks

- Knowing the difference between synchronous and asynchronous code
- Knowing how to write functions that use callbacks
- Knowing how to write functions that take functions as arguments
- Be able to explain the event loop
- Be able to explain the call stack
  Course day 2: Asynchronous javascript with Promises
- Knowing how to write functions that return promises
- Knowing how to use the "then" and "catch" methods on promises
- Knowing how to use the "Promise.all" method
- Knowing how to use the "async" and "await" keywords
- Knowing how to use the "try" and "catch" keywords
- Be able to explain the difference between asynchronous and synchronous code
- Be able to explain the difference between callbacks and promises
  Course day 3: Typescript 1
- Knowing how to use the TypeScript compiler
- Knowing how to configure the TypeScript compiler
- Knowing the most common types in TypeScript
- Knowing how to use the "interface" keyword in TypeScript
- Knowing how to use the "unknown" type in TypeScript
- Be able to explain the difference between the "any" and "unknown" types in TypeScript
  Course day 4: Typescript 2
- Knowing how to use the "strict" mode in TypeScript
- Knowing the most important types in used in React
- Be able to code a simple React application using TypeScript with strict mode enabled

### Flow 2

Course day 5: Node.js 1

- Knowing how to use the "Node Package Manager" (npm) in Node.js
- Knowing how to create a new Node.js project using npm
- Knowing how to run a Node.js script
- Knowing how to use the "require" keyword in Node.js
- Knowing how to use the "module.exports" keyword in Node.js
- Be able to explain the difference between "require" and "import" in Node.js
- Be able to start a web server in Node.js
  Course day 6: Node.js 2
- Knowing how to use the "Express" framework in Node.js
- Knowing how to define a route in Express
- Knowing how to handle query parameters in Express
- Knowing how to handle POST requests in Express
- Knowing how to use middleware to handle errors in Express
- Be able to explain the difference between "res.send" and "res.json" in Express
  Course day 7: MongoDB with Mongoose
- Knowing how to use MongoDB with Mongoose in Node.js
- Knowing how to create a new document in Mongoose
- Knowing how to find a document in Mongoose
- Knowing how to update a document in Mongoose
- Knowing how to delete a document in Mongoose
- Knowing how to define a relationship between two models in Mongoose
- Be able to explain the difference between embedded and referenced relationships in Mongoose
  Course day 8: GraphQL
- Knowing how to use GraphQL in Node.js
- Knowing how to define a schema in GraphQL
- Knowing how to define a resolver in GraphQL
- Knowing how to define a mutation in GraphQL
- Knowing how to define a query in GraphQL
- Be able to design a GraphQL query in the GraphQL Playground
- Be able to design a GraphQL mutation in the GraphQL Playground

### Flow 3

Course day 9: React 1 graphql client

- Knowing how to use React in a TypeScript project
- Knowing how to use the "useState" hook in React
- Knowing how to use the "useEffect" hook in React
- Knowing how to use the "useContext" hook in React
- Knowing how to use the "useReducer" hook in React
- Be able to code a simple React application using TypeScript
- Be able to explain the difference between "useState" and "useReducer" in React
- Be able to setup a GraphQL client in React
  Course day 10: React 2: state management
- Knowing how to use the "useContext" hook in React
- Knowing how to use the "useReducer" hook in React
- Knowing how to use the "useMemo" hook in React
- Knowing how to use the "useCallback" hook in React
- Be able to explain the difference between "useState" and "useReducer" in React
- Be able to explain the difference between "useMemo" and "useCallback" in React
  Course day 11: React 3: custom hooks
- Knowing how to create custom hooks in React
- Knowing how to use custom hooks in React
- Be able to explain the difference between a custom hook and a regular function in React
  Course day 12: Frontend design
- Knowing how to use Tailwind CSS in a React project
- Knowing how to use styled components in a React project
- Knowing how to use Material UI in a React project
- Be able to explain the difference between Tailwind CSS, styled components, and Material UI
- Be able to explain the difference between a CSS framework and a CSS library

### Flow 2

### Flow 3

#### Typescript

- What is the difference between typescript and javascript?
- What is the difference between "interface" and "type" in TypeScript?
- What is the "never" type in TypeScript and when is it useful?
- How can you declare an optional property in an interface or type?
- What is the difference between "const" and "readonly" in TypeScript?
- What is the difference between "null" and "undefined" in TypeScript?
- What is the "keyof" keyword in TypeScript and how is it used?
- What is the "in" operator in TypeScript and how is it used?
- What is a type assertion in TypeScript and when is it useful?
- How can you declare a generic type in TypeScript?
- What is a type alias in TypeScript and how is it used?

#### Node.js

- What is Node.js and how is it different from other JavaScript frameworks?
- What is the package.json file in Node.js and what is its purpose?
- How do you create a new Node.js project using npm?
- How do you run a Node.js script?
- What is a callback function in Node.js and how is it used?
- What is the difference between "require" and "import" in Node.js?
- What is the difference between synchronous and asynchronous code in Node.js?
- What is the "Node Package Manager" (npm) and how is it used in Node.js?

#### Express

- How do you use the "Express" framework in Node.js?
- What is middleware in Express and how is it used?
- What is a router in Express and how is it used?
- How do you define a route in Express?
- How do you handle query parameters in Express?
- What is the difference between req.params and req.query in Express?
- How do you handle POST requests in Express?
- How do you use middleware to handle errors in Express?
- What is the difference between res.send and res.json in Express?
- What is the difference between PUT and PATCH requests in Express?
- How do you use the body-parser middleware in Express?

#### MongoDB with Mongoose

- What is MongoDB and how is it different from a relational database?
- What is a document in MongoDB?
- What is a collection in MongoDB?
- What is the difference between a schema and a model in Mongoose?
- How do you create a new document in Mongoose?
- How do you find a document in Mongoose?
- How do you update a document in Mongoose?
- How do you delete a document in Mongoose?
- How do you define a relationship between two models in Mongoose?
- What is the difference between embedded and referenced relationships in Mongoose?
- How do you populate a document in Mongoose? With referenced relationships?
- How do you use the "mongoose-validator" in Mongoose?

#### GraphQL

- What is GraphQL and how is it different from REST?
- What is a schema in GraphQL?
- What is a resolver in GraphQL?
- What is a mutation in GraphQL?
- What is a query in GraphQL?
- What is the difference between a mutation and a query in GraphQL?
- What is the difference between a type and an input type in GraphQL?
- How do you design a GraphQL query in the GraphQL Playground?
- How do you design a GraphQL mutation in the GraphQL Playground?

