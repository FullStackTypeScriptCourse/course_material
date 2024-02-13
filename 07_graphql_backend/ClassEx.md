# Books 
## Part 1: Just books
1. Create a new node project with express and include graphql and apollo. Use expressMiddleware to attach the Apollo server to your express app.
2. Add a new file called `schema.ts` with a Book type.
  - The Book type should have the following fields: `id`, `title`, `author`, `publishedDate`, `category`, `rating`.
3. Add a query type to the schema with the following fields: `book(id: ID!): Book` and `books: [Book]`.
4. Setup resolvers for your Book type. (you can just return the data from an in-memory array.)

## Part 2: Adding Categories
1. Add a Category type to your schema with the following fields: `id`, `name`.
2. Add a query type to the schema with the following fields: `category(name: String!): Category`.
3. Setup a query resolver for your Category type. (When we query for a category, we should get the category and all the books in that category.)

## Part 3: Adding Mutations
1. Add a mutation type to the schema with the following fields: `createBook(title: String!, author: String!, publishedDate: String!, category: String!, rating: Int!): Book`.
2. Setup a mutation resolver for your mutation type. (When we create a book, we should add it to the in-memory array.)
3. Add a mutation type to the schema with the following fields: `updateBook(id: ID!, title: String, author: String, publishedDate: String, category: String, rating: Int): Book`. The purpose of this mutation is to update a book so we can change any of the fields.

## Part 4: Moving data to context
1. Move the in-memory arrays to a new file called `data.ts` and export them.
2. In server.ts, import the in-memory arrays and add them to the context object.
3. In your resolvers, use the context object to access the in-memory arrays.