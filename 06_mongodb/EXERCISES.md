# Exercises

## MongoDB

### Preparation

1. Create a MongoDB database on [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new project and add a new cluster
3. Go to the network access tab and add your IP address or add `0.0.0.0./0` to have access from anywhere.
4. Go to the database access tab and add a new user
5. Go to the database tab and create a new database. Choose `MO(FREE)` as the cloud provider
   and `Stockholm (eu-north-1)` as the region. Name the database `fullstack`. (or something else if you want)
6. At the next step you will be asked to create a username and password for the database. Choose a username and password
   and click `Create User`. Remember to save the username and password.

### Exercises

1. Before we start using MongoDb and Mongoose, we will together explore
   the [MongoDB documentation](https://docs.mongodb.com/manual/).
   We will explore some of the following topics:
    - [MongoDB CRUD Operations](https://docs.mongodb.com/manual/crud/)
    - [MongoDB Query Documents](https://docs.mongodb.com/manual/tutorial/query-documents/)
    - [MongoDB Aggregation](https://docs.mongodb.com/manual/aggregation/)
    - [MongoDB Indexes](https://docs.mongodb.com/manual/indexes/)
    - [MongoDB Data Models](https://docs.mongodb.com/manual/core/data-modeling-introduction/)
    - [MongoDB Atlas](https://docs.mongodb.com/manual/atlas/)

We are going to this in order to get a better understanding of how MongoDB works and how we can use it in our projects.

```bash
    # Connect to the database
    mongo "mongodb+srv://cluster0.9qj0t.mongodb.net/<dbname>" --username <username>
    
    # Show all databases
    show dbs
    
    # Create a new database
    use <database name>
    
    # Create a new collection
    db.createCollection("<collection name>")
    
    # Show all collections
    show collections
    
    # Insert a new document into a collection
    db.<collection name>.insertOne({name: "John Doe", age: 25})
    
    # Find all documents in a collection
    db.<collection name>.find()
    
    # Find all documents in a collection and format the output
    db.<collection name>.find().pretty()
    
    # Find all documents in a collection that matches a query
    db.<collection name>.find({name: "John Doe"})
    
    # If we want to find the first document that matches a query we can use findOne
    db.<collection name>.findOne()
    
    # If we want to update a document we can use the updateOne method
    db.<collection name>.updateOne({name: "John Doe"}, {$set: {age: 26}})
    
    # If we want to update all documents that matches a query we can use the updateMany method
    db.<collection name>.updateMany({name: "John Doe"}, {$set: {age: 26}})
    
    # If we want to delete a document we can use the deleteOne method
    db.<collection name>.deleteOne({name: "John Doe"})
    
    # If we want to delete all documents that matches a query we can use the deleteMany method
    db.<collection name>.deleteMany({name: "John Doe"})
    
    # Using the aggregation pipeline we can perform more complex queries
    db.<collection name>.aggregate([
        {$match: {name: "John Doe"}},
        {$group: {_id: "$name", total: {$sum: "$age"}}}
    ])
    
    # We can use $inc to increment a value
    db.<collection name>.updateOne({name: "John Doe"}, {$inc: {score: 1}})
    db.<collection name>.updateOne({name: "John Doe", age: 25}, {$inc : { score: 20}})
    
    # using limit we can limit the number of documents returned
    db.<collection name>.find().limit(5)
    
    # using sort we can sort the documents
    db.<collection name>.find().sort({name: 1}) # 1 for ascending and -1 for descending
    
    # using $lte and $gte we can find documents that are less than or equal to a value
    db.<collection name>.find({age: {$lte: 25}})
```

2. Create a new project and install the following packages:
    - `mongodb`
    - `dotenv`
    - `mongoose`
    - `nodemon`

3. Create a new file called `app.ts` in the root of your project. In this file we will create our first connection
   to the database.Use the following code:

   [Connect To MongoDb](https://www.mongodb.com/developer/languages/javascript/node-connect-mongodb/)

```TypeScript
const {MongoClient, ServerApiVersion} = require('mongodb');

const uri = "mongodb+srv://<username>:<password>@<db-name>.zn6fvc2.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("bank-db").command({ping: 1});
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);
```

4. Replace the `uri` with your own connection string.
5. Run the code and check the console to see if you successfully connected to the database.
6. Now try to run all the examples from part 1 in your `app.ts` file. Remember to use `await` when
   you call the methods.

**example:**

```TypeScript
   let query = await client.db("test").collection("name").find().limit(10).toArray();
   console.log(query)
```

## Mongoose

[MongoDB & Mongoose](https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/)

1. Create a new directory called `mongoose` and create a new file called `app.ts` in the directory.
2. In this file we will create our first connection to the database. Use the following code:
3. If you need info about Typescript in connection with Mongoose you can check out the following link:
    - [Mongoose Typescript](https://mongoosejs.com/docs/typescript.html)
