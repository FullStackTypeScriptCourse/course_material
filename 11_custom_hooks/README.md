# Custom Hooks in React (Changed to recap)
## Objectives
- Catch up on the full semester
  - Typescript
  - Express
  - Mongoose
  - GraphQL
    - Apollo Server
    - Apollo Client
  - React State management
    - Context

## Agenda
- Recap of the semester: What is most difficult?
  - Server
    - Typescript
    - Express
    - Mongoose
    - GraphQL
      - Apollo Server
  - Client
    - React State management
      - Context
    - GraphQL
      - Apollo Client
- Typescript
  - ts-node
  - types module to import
  - react types
- Express
  - express
  - cors
  - dotenv
- Mongoose
  - Models
  - CRUD operations
  - getById, getAll, create, update, delete
- GraphQL
  - Apollo Server
    - schema and gql
    - queries and mutations
    - resolvers
      - create, update, delete
      - query and property resolvers
    - GraphQL Playground
  - Apollo Client
    - ApolloProvider
    - useQuery
    - useMutation
- React State management
  - Context
    - Context.Provider
    - useContext
  - Reducers
    - useReducer
    - dispatch
    - action
    - reducer
    - initialState

## Demo
https://github.com/FullStackTypeScriptCourse/graphql_simple.git   
branches: main, mongoose and context

## How to prepare before class

## Class exercise
### Part 1
While doing this exercise, you can use the code from the demo as a reference. Also try and keep a log of the steps you take to create the backend server.
1. Create a backend server with express, mongoose and graphql.
2. Create a connection to an Atlas mongodb database.
3. Create a graphql schema with a type of Pet and a query of getAllPets.
4. Create a mongoose model for Pet.
5. Create a resolver for getAllPets.
6. Test in GraphQL Playground.

### Part 2
1. Create an Owner type and a query of getAllOwners.
2. Create mutations to create Owners and Pets.
3. Create mutation to update an Owner with a pet.

### Part 3
1. Create a frontend with React and Apollo Client.
2. Create a component to display all Pets.
3. Create a component to display all Owners and their Pets.
4. Create a component to create a Pet.
5. Create a component to create an Owner with a Pet. (Make sure to update the view after creating the Owner and Pet.)

