# Course day 9: GraphQL

## Objectives
- Understand the benefit of graphql over traditional REST APIs
- Learn how to create a graphql server with Apollo.
- Use graphql to query data from the server.
- Use graphql to mutate data on the server. 



## How to prepare before class
- Watch the following video before class: https://www.youtube.com/watch?v=h-ZCVUAzR-0&list=PLASldBPN_pkDUuOzyPotAkKmvwqyDoA0g&ab_channel=willjw3
- Take a look at this overview: https://graphql.org/code/#javascript

## Demo
1. Create a new folder called `graphql-demo` and from inside it run `npm init -y` to create a new project and `npx tsc --init`.
2. Add the following line to package.json: `"type": "module",`
2. Change the content of tsconfig.json to the following:
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "rootDirs": ["src"],
    "outDir": "dist",
    "lib": ["es2020"],
    "target": "es2020",
    "module": "esnext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "types": ["node"]
  },
  "ts-node": {
    "esm": true,
    "experimentalSpecifierResolution": "node"
  },
  "include": ["src/**/*.ts", "src/resolvers"],
  "exclude": ["node_modules"]
}
```
2. Install dev dependencies: `npm i -D typescript @types/node ts-node-dev nodemon rimraf`.
3. Install the following dependencies: `npm i @apollo/server graphql express cors dotenv `. To use Apollo Server 4.
4. Create a new file called `server.ts` inside a src folder and add the code here: https://www.apollographql.com/docs/apollo-server/migration/#migrate-from-apollo-server-express. (for version 4)
5. Create a new file called `shema.ts` and add the following code:
```js
const typeDefs = `#graphql
    type Query {
        hello: String
    }
    `;
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};
export { typeDefs, resolvers };
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
7. Run `npm run dev` and go to `http://localhost:4000/graphql` to see the GraphQL playground. Run the query `query { hello }` to see the result.
8. Replace the content in the file: `schema.ts` in the `src`:
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
{ "name": "Holger","email":"holger@mail.com", "age": 33}
```
