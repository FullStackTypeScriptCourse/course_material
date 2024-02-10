# Exercise: GraphQL Backend
<img src="https://www.encora.com/hs-fs/hubfs/Picture1-Jul-28-2022-04-18-46-78-PM.png?width=983&name=Picture1-Jul-28-2022-04-18-46-78-PM.png" width="300">


1. Create a new node project with express and include graphql and apollo as shown [here](https://www.apollographql.com/docs/apollo-server/api/express-middleware/).
2. Add a new file called `schema.ts` with a Person type.
3. Setup resolvers for your Person type. (you can just return the data from an in-memory array.)
4. Setup a query to get all people.
5. Test your server with the GraphQL playground.
6. Add Addresses to Person and Persons to Address.
7. Add a new query to get all addresses with the persons that live there.
8. Add mutations to add a new person and a new address.
9. Add a mutation to add a person to an address.
10. Add a mutation to remove a person from an address.
11. Add a mutation to delete a person.
12. Add a query to get a person by phone number.
13. Add a query to get all addresses by zip code.