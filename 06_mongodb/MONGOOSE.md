# Mongoose

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

In Mongoose, a schema is a blueprint or a structure that defines the shape and organization of documents in a MongoDB
collection.

A Mongoose schema defines the fields, data types, and validation rules for the documents that will be stored in a
collection.
It is essentially a way of defining a specific data model for a MongoDB collection.

Here's an example of a simple Mongoose schema definition for a blog post:

```JS
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    createdAt: {
        type: Date, default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);

```

In this example, the `postSchema` defines a `Post` model with four fields: `title`, `content`, `author`,
and `createdAt`.
The `title` and `content` fields are required strings, the `author` field is a reference to a `User` model, and
the `createdAt`
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