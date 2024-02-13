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

