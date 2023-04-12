# Exercise: GraphQL Backend
<img src="https://www.encora.com/hs-fs/hubfs/Picture1-Jul-28-2022-04-18-46-78-PM.png?width=983&name=Picture1-Jul-28-2022-04-18-46-78-PM.png" width="300">


1. Take you project from last week (the person backend project) and install apollo-server and graphql.
2. Create a new instance of apollo-server to work with your existing express app as shown [here](https://www.apollographql.com/docs/apollo-server/api/express-middleware/).
3. Setup schema and resolvers for your Person type. (In the first iteration, you can just return the data from an in-memory array.)
4. Setup a query to get all people.
4. Test your server with the GraphQL playground.
5. Create a new branch called `graphql` and push your changes to GitHub.
6. Add Addresses to Person and Persons to Address.
7. Add a new query to get all addresses with the persons that live there.
8. Add mutations to add a new person and a new address.
9. Add a mutation to add a person to an address.
10. Add a mutation to remove a person from an address.
11. Add a mutation to delete a person.
12. Finally change your resolvers to use the database instead of an in-memory array.