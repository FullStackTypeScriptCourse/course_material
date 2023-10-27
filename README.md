# course material

## Schedule

***

| Course day | Date | Subject | Content | Teacher |
|--|--|--|--|--|
| 1 | 31/10/2023 | [JS Part 1 ](01_js/RECAP_CALLBACKS.md) && [JS part 2 ](01_js/RECAP_ES6.md) | ES6 recap, Callback, Writing functions that use callbacks                | THA |
| 2 | 2/11/2023  | [JS Part 3](02_js/PROMISES.md)                                              | Asynchronous javascript with Promises (lave egne promises), Async await | JORG|
| 3 | 7/11/2023  | [Typescript 1](03_ts/README.md)                                             | transpiler, autotranspile, tsconfig, type, interface, class             | THA |
| 4 | 9/11/2023  | [Typescript 2](04_ts/README.md)                                             | Using typescript in a react project                                     | JORG|
| 5 | 14/11/2023 | [NodeJS/Express 1](05_node/README.md) && [Exercise](05_node/EXERCISE.md)    | Node.js: Read & Write to files, enviroment variables, server, REST API  | THA |
| 6 | 16/11/2023 | [Middleware & Error handling & Refactoring & MongoDB ](06_express/README.md)|                                                                         | JORG|
| 7 | 21/11/2023 | [MongoDB Data Modelling](07_data_modelling/README.md)|                                                                                                | THA |
| 8 | 23/11/2023 | [GraphQL](08_graphql_backend/README.md)|                                                                                                              | JORG|
| 9 | 28/11/2023 | [React 1](09_graphql_client/README.md)| State management                                                                                              | THA |
| 10 | 30/11/2023 | [React 2](10_state_management/README.md)| Hooks (lav egne hooks). Recap                                                                              | JORG|
| 11 | 5/12/2023 | [React 3](11_custom_hooks/README.md) (Frontend GraphQL)|                                                                                              | THA |
| 12 | 7/12/2023 | [Frontend design](12_tailwind/README.md) (GUI layout)  |                                                                                              | JORG|
|  | 14-15/12/2023| Security Exam !! |||
|  | 20/12/2023| Exam project handin on wiseflow |||
|  | 5/1/2024| Exam |||
||||||

***

## Links

- [Moodle](https://cphbusiness.mrooms.net/course/view.php?id=11091)
- [Backend StartCode](https://github.com/FullStackTypeScriptCourse/fullstack_backend_startcode)

***

## Hand-in and Exam.
1. Create a GitHub repo for all your work in this course and link to it [here](https://docs.google.com/spreadsheets/d/1IKFYbYwqUlZ0sUaFcLaxl154NgoaRl0g57yY6k3ipo0/edit?usp=sharing)
2. The repo should contain a folder for each Course day. Each folder should contain a README.md file with the answers to the exercises.
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
- The exam is a 30 min **individual** oral exam with no preparation time based on your code (primaryly the semester project)
- You will be asked to explain and/or extend your code
- You will be asked questions about the course curriculum like the ones below.

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

