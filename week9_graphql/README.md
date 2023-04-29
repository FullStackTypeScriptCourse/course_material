<<<<<<< HEAD
# Week 9: GraphQL

## Objectives
- Understand the benefit of graphql over traditional REST APIs
- Learn how to create a graphql server with Apollo.
- Use graphql to query data from the server.
- Use graphql to mutate data on the server. 


## Agenda
- Introduction to GraphQL
- GraphQL vs REST
- GraphQL Schema
- GraphQL Queries
- GraphQL Mutations
- GraphQL Subscriptions
- Apollo Server
- Apollo Client
- Apollo Client Hooks
- Apollo Client Cache
- Apollo Client State
- Apollo Client Error Handling
- Apollo Client Pagination

## How to prepare before class
- Watch the following video before class: https://www.youtube.com/watch?v=h-ZCVUAzR-0&list=PLASldBPN_pkDUuOzyPotAkKmvwqyDoA0g&ab_channel=willjw3
- Take a look at this overview: https://graphql.org/code/#javascript

## Demo
1. Create a new folder called `graphql-demo` and from inside it run `npm init -y` to create a new project and `npx tsc --init`.
2. Install dev dependencies: `npm i -D typescript @types/node ts-node-dev nodemon rimraf`.
3. Install the following dependencies: `npm i @apollo/server graphql express cors dotenv `. To use Apollo Server 4.
4. Create a new file called `server.ts` inside a src folder and add the code from Step 3-6 in this guide: https://www.apollographql.com/docs/apollo-server/getting-started alternatively you can use express and apollo side by side by using this guide: https://www.apollographql.com/docs/apollo-server/migration.
5. Create a new file called `.env` and add the following code:
```
PORT=4000
```
5. Create a new file called `nodemon.json` and add the following code:
```json
{
  "watch": ["src"],
  "ext": "js,json,ts",
  "ignore": ["node_modules/**/*"],
    "exec": "npx ts-node ./src/server.ts"
}
```
6. Add the following script to your `package.json` file:
```json
"dev": "nodemon src/server.ts",
"build": "rimraf ./build && tsc",
```
  - The `dev` script will start the server in development mode. and the `build` script will build the project after removing the `build` folder.
7. Run `npm run dev` and go to `http://localhost:4000/graphql` to see the GraphQL playground.
8. Add the following code to your `server.js` file:
```js
const typeDefs = gql`
  type Query {
    hello: String
    users: [User]
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }
`;

const users = [
  {
    id: '1',
    name: 'John Doe',
    email: '
    age: 25,
    },
    {
    id: '2',
    name: 'Jane Doe',
    email: '
    age: 30,
    },
    {
    id: '3',
    name: 'John Smith',
    email: '
    age: 35,
    },
];

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    users: () => users,
  },
};
```
9. Run `npm run dev` and go to `http://localhost:4000/graphql` to see the GraphQL playground.
10. Add the following code to your `server.js` file:
```js
const typeDefs = gql`
  type Query {
    hello: String
    users: [User]
    user(id: ID!): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }
`;

const users = [
  {
    id: '1',
    name: 'John Doe',
    email: '
    age: 25,
    },
    {
    id: '2',
    name: 'Jane Doe',
    email: '
    age: 30,
    },
    {
    id: '3',
    name: 'John Smith',
    email: '
    age: 35,
    },
];

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    users: () => users,
    user: (parent, args, context, info) => {
      return users.find((user) => user.id === args.id);
    },
  },
};
```
11. Run `npm run dev` and go to `http://localhost:4000/graphql` to see the GraphQL playground.


## Class Exercise 1
- Setup a new project with the following dependencies: `apollo-server-express graphql express cors dotenv` 
- Create a server.ts file that starts an Apollo server to serve Person objects.
- Create a Person type with the following fields: id, name, age, email, address, phone.
- Create a Query type with the following fields: person(id: ID!): Person, people: [Person].
- In the graphql playground, query the people field and see the results. 

## Class Exercise 2
- Add a mongoose connection to your project.
- Create a Person model with the following fields: id, name, age, email, address, phone.
- Create a Query type with the following fields: person(id: ID!): Person, people: [Person].
- Create a Mutation type with the following fields: createPerson(name: String!, age: Int!, email: String!, address: String!, phone: String!): Person, updatePerson(id: ID!, name: String!, age: Int!, email: String!, address: String!, phone: String!): Person, deletePerson(id: ID!): Person.
- Create a Subscription type with the following fields: personCreated: Person, personUpdated: Person, personDeleted: Person.
- Create a resolver for each of the fields in the Query type.
- Create a resolver for each of the fields in the Mutation type.
- Create a resolver for each of the fields in the Subscription type.
=======
# Week 4: Typescript 2

## Objectives

- 

## How to prepare before class


## Class Exercise 1

## Class Exercise 2
>>>>>>> 2d3ffb5 (additional commit)

## Topic 1:

