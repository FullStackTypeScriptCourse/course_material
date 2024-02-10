# Course day 9: GraphQL

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
- Resolvers
- Apollo Playground/Sandbox
- Setup files:
  - `server.ts`
  - `graphql_schema.ts`
  - `resolvers/mutations.ts`
  - `resolvers/queries.ts`
  - `nodemon.json`
- TS Types vs GraphQL Types

## How to prepare before class
- Watch the following video before class: https://www.youtube.com/watch?v=h-ZCVUAzR-0&list=PLASldBPN_pkDUuOzyPotAkKmvwqyDoA0g&ab_channel=willjw3
- Take a look at this overview: https://graphql.org/code/#javascript

## Demo
1. Create a new folder called `graphql-demo` and from inside it run `npm init -y` to create a new project and `npx tsc --init`.
2. Install dev dependencies: `npm i -D typescript @types/node ts-node-dev nodemon rimraf`.
3. Install the following dependencies: `npm i @apollo/server graphql express cors dotenv `. To use Apollo Server 4.
4. Create a new file called `server.ts` inside a src folder and add the code here: https://www.apollographql.com/docs/apollo-server/migration/#migrate-from-apollo-server-express. (for version 4)
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
"dev": "nodemon",
"build": "rimraf ./build && tsc",
```
  - The `dev` script will start the server in development mode. and the `build` script will build the project after removing the `build` folder.
7. Run `npm run dev` and go to `http://localhost:4000/graphql` to see the GraphQL playground.
8. Add the following code to a file: `graphql_schema.ts` and export it:
```js
  const typeDefs = `#graphql 
type Query {
    hello: String
    users: [User]
}
type Mutation {
    createUser(name: String!, email: String!, age: Int): User
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
      email: 'john@mail.com',
      age: 25,
      },
      {
      id: '2',
      name: 'Jane Doe',
      email: 'jane@mail.com',
      age: 30,
      },
      {
      id: '3',
      name: 'John Smith',
      email: 'jonny@mail.com',
      age: 35,
      },
  ];

type User = {
    id: string;
    name: string;
    email: string;
    age: number;
}; 

const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      users: () => users,
      user: (parent, args, context, info) => {
        return users.find((user) => user.id === args.id);
    },
},
    Mutation: {
        createUser: (_parent:never, args:User, _context:never, _info:never) => {
          const newUser = {
            id: String(users.length + 1),
            name: args.name,
            email: args.email,
            age: args.age,
          };
          users.push(newUser);
          return newUser;
        },
      },
};
export {typeDefs, resolvers };
```
9. Add the following code to your `server.ts` file:
```js
import { typeDefs, resolvers } from './schema';
```
9. Run `npm run dev` and go to `http://localhost:4000/graphql` to see the GraphQL playground.
10. In the graphql playground: Add a new operation collection called `Users` and add the following query:
```graphql
query {
  users {
    id
    name
    email
    age
  }
}
```
11. In the new operation collection called `Users` add the following mutation:
```graphql
mutation($name: String!, $email: String!, $age: Int) {
  createUser(name: $name, email: $email, age: $age) {
    id
    name
    age
    email
  }
}
```
With parameters:
```json
{ "name": "Thomas","email":"thom@mail.com", "age": 33}
```
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


