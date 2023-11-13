# MongoDB && Mongoose


**Until next class you need to have signed up for a MongoDB Atlas account. The link can be found in the `Link` section below.**

## Links

**MongoDB**

- [MongoDB Atlas](https://www.mongodb.com/atlas)
- [Learn MongoDB](http://learnmongodbthehardway.com/schema/)

**Mongoose**

- [Mongoose Documentation](https://mongoosejs.com/)


## MongoDB

MongoDB is a type of database that is designed to store and manage large volumes of unstructured or semi-structured
data.
Unlike traditional relational databases, which organize data into tables with strict relationships between them, MongoDB
stores data in flexible, JSON-like documents that can have different fields and structures.

In a document database like MongoDB, data is organized into collections, which are analogous to tables in a relational
database. Each document in a collection is a self-contained unit of data, with its own set of fields and values. Because
the documents are stored in a JSON-like format, it is easy to store complex data structures, such as arrays and nested
objects, within a single document.

One of the benefits of using a document database like MongoDB is its flexibility. You can add new fields to documents
or change the structure of the documents themselves without having to modify the underlying database schema. This makes
it easier to adapt to changing business requirements and data models.

Another advantage of MongoDB is its scalability. MongoDB can scale horizontally by distributing data across multiple
servers, which allows it to handle large volumes of data and high levels of traffic.

Overall, MongoDB is a powerful tool for managing large volumes of unstructured data in a flexible, scalable, and
efficient manner.

### Collections instead of tables

In MongoDB, a collection is a grouping of MongoDB documents. It is analogous to a table in a relational database.
A collection exists within a single database and stores documents that have a similar structure, but not necessarily
the same fields.

Collections in MongoDB can be created implicitly or explicitly. When you insert a document into a collection,
MongoDB will create the collection if it doesn't already exist. You can also create a collection explicitly using the
createCollection() method or by using the shell command "db.createCollection()".

Once a collection has been created, you can perform various operations on it, such as inserting documents, updating
documents, deleting documents, and querying for data. Collections in MongoDB are schema-free, meaning that documents
within a collection can have different structures and fields. This makes it easy to work with data that may not have a
fixed schema or that changes frequently.

MongoDB also provides various tools and features for managing collections, such as indexing for faster querying,
aggregation pipelines for data processing, and sharding for horizontal scaling across multiple servers.

Overall, collections are a fundamental component of MongoDB's document-based data model and provide a flexible and
efficient way to store and manage data.

### Key differences between MongoDB(document database) and relational databases

Relational databases and document databases are two different types of databases, each with their own strengths and
weaknesses. Here are some key differences between them:

- **Data structure:** Relational databases store data in tables with a fixed schema, where each row represents a record
  and each column represents a field. Document databases, on the other hand, store data in flexible JSON-like documents,
  where each document can have its own unique structure and fields.
- **Querying:** In a relational database, data is typically accessed using SQL queries, which involve joining tables
  together to retrieve data. In a document database, data is accessed using queries that match documents based on their
  fields and values.
- **Scalability:** Relational databases scale vertically, meaning that they require increasingly powerful hardware as
  the amount of data grows. Document databases scale horizontally, meaning that they can distribute data across multiple
  servers to handle large amounts of data and traffic.
- **Transactions:** Relational databases are known for their support of ACID transactions, which ensure that multiple
  database operations are executed atomically and consistently. Document databases generally have weaker support for
  transactions, but some offer more advanced features like multi-document transactions.
- **Schema flexibility:** Relational databases have a fixed schema, meaning that the structure of the data is defined
  before data is inserted. Document databases are schema-less, meaning that data can be inserted without a pre-defined
  schema, making them more flexible and easier to change.
- **Data normalization:** In a relational database, data is often normalized to eliminate redundancy and improve
  performance. In a document database, denormalization is common, where data is duplicated or embedded within a document
  to improve query performance.

Overall, the choice between a relational database and a document database depends on the specific requirements of your
application. If your data has a fixed schema and requires complex queries, a relational database may be the best choice.
If your data is flexible and requires high scalability, a document database may be more suitable.

***

## Mongoose

Mongoose is an Object Data Modeling (ODM) library for Node.js and MongoDB. It provides a higher-level, schema-based API
for interacting with MongoDB, making it easier to work with MongoDB in a Node.js application.

Mongoose allows you to define schemas for your MongoDB documents, which can enforce data validation rules and provide
a consistent structure for your data. With Mongoose, you can define complex document schemas with nested properties,
defaults, and validation rules. This makes it easier to work with complex data structures and maintain data integrity.

Mongoose also provides a rich set of features, including support for middleware functions, virtual properties, and
query builders. Middleware functions allow you to define pre- and post-save hooks that can perform custom operations
on your data before or after it is saved to the database. Virtual properties allow you to define computed properties
on your documents that are not persisted to the database. Query builders provide a fluent interface for constructing
MongoDB queries, making it easier to write complex queries.

Overall, Mongoose is a powerful and flexible library that simplifies working with MongoDB in a Node.js application.
It provides a higher-level, schema-based API that can improve productivity and maintainability of your code.

### Schemas

In Mongoose, a schema is a blueprint or a structure that defines the shape and organization of documents in a MongoDB collection.

A Mongoose schema defines the fields, data types, and validation rules for the documents that will be stored in a collection.
It is essentially a way of defining a specific data model for a MongoDB collection.

Here's an example of a simple Mongoose schema definition for a blog post:

```JS
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);

```
In this example, the `postSchema` defines a `Post` model with four fields: `title`, `content`, `author`, and `createdAt`.
The `title` and `content` fields are required strings, the `author` field is a reference to a `User` model, and the `createdAt`
field is a date that defaults to the current time.

Once a Mongoose schema has been defined, it can be used to create and manipulate documents in a MongoDB collection
using Mongoose's API.

### Key differences between Mongoose and MongoDB

MongoDB and Mongoose are two different things that serve different purposes. MongoDB is a NoSQL document-oriented
database, while Mongoose is an Object Data Modeling (ODM) library for MongoDB.

Here are some key differences between MongoDB and Mongoose:

1. Database vs. library: MongoDB is a database system that stores data in a document-oriented manner. Mongoose is a
   library that provides a schema-based API for interacting with MongoDB.
2. Data storage: MongoDB stores data in a flexible JSON-like format called BSON. Mongoose provides a higher-level
   schema-based API for defining and working with MongoDB documents.
3. Querying: MongoDB provides a rich query language for querying data stored in its database. Mongoose builds on top of
   MongoDB's query language, providing additional functionality and a more expressive API.
4. Validation: MongoDB provides basic data validation capabilities, such as the ability to enforce data types and simple
   constraints. Mongoose provides a more powerful schema-based validation system that allows you to define complex
   validation rules for your data.
5. Middleware: MongoDB does not provide a middleware system. Mongoose provides a middleware system that allows you to
   define pre- and post-save hooks, middleware functions, and other custom operations on your data.

Overall, MongoDB and Mongoose serve different purposes. MongoDB is a powerful NoSQL document-oriented database system
that provides a flexible and scalable platform for storing and querying data. Mongoose is a library that provides a
higher-level, schema-based API for working with MongoDB, making it easier to define and interact with MongoDB documents.

***

## Class Exercises 1 MongoDB

1. Create a MongoDB database on [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new project and add a new cluster
3. Go to the network access tab and add your IP address or add `0.0.0.0./0` to have access from anywhere.
4. Go to the database access tab and add a new user
5. Go to the database tab and create a new database. Choose `MO(FREE)` as the cloud provider and `Stockholm (eu-north-1)` as the
   region. Name the database `fullstack`.
6. At the next step you will be asked to create a username and password for the database. Choose a username and password
   and click `Create User`. Remember to save the username and password.
7. Choose `My Local Environment` as the connection method and click `Connect`.
8. In your `config.env` file create the following environment variables:
    - `DATABASE_DEV`
    - `DATABASE_PROD`
    - `DATABASE_PASSWORD`
9. Copy the connection string from MongoDB Atlas and paste it into the `DATABASE_DEV` environment variable. Replace the
   `<password>` with the password you created in step 6.
10. Copy the connection string from MongoDB Atlas and paste it into the `DATABASE_PROD` environment variable. Replace the
    `<password>` with the password you created in step 6. (That step is not necessary if you are not deploying your app)
11. Now we are ready to connect to our database. In your `server.ts` file import the `mongoose` package and connect to the
    database. Remember to use the `DATABASE_DEV` environment variable. To connect to the database use the following code:
    ```TypeScript
    const DB = process.env.DATABASE_DEV!.replace(
        '<PASSWORD>',
        process.env.DATABASE_PASSWORD!,
    );
    
    mongoose.connect(DB, {
    }).then(() => console.log('DB connection successful!'));
    ```
12. We need to create a new model for our cars. Create a new file called `carModel.ts` in the `models` folder. In this file
    we will create a new Mongoose schema for our cars. The schema should have the following fields:
    - `name` - String, required
    - `price` - Number, required
    - `color` - String, required
    - `createdAt` - Date, default Date.now
13. Now we need to replace the dummy data in our controller with data from our database. In your `carController.ts` file
    import the `Car` model and use the `find()` method to get all cars from the database. (Remember to use `await` when you call the `find()` method)
14. Replace the methods from exercise 1 with database methods. Remember to use `await` when you call the database methods.
15. Test your routes with Postman

***