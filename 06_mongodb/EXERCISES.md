# Exercises

## MongoDB

### Preparation

**Part 1**

1. Create a MongoDB database on [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new project and add a new cluster
3. Go to the network access tab and add your IP address or add `0.0.0.0./0` to have access from anywhere.
4. Go to the database access tab and add a new user
5. Go to the database tab and create a new database. Choose `MO(FREE)` as the cloud provider
   and `Stockholm (eu-north-1)` as the region. Name the database `fullstack`. (or something else if you want)
6. At the next step you will be asked to create a username and password for the database. Choose a username and password
   and click `Create User`. Remember to save the username and password.

**Part 2**

1. Add the sample data from MongoDB Atlas to your database
2. Connect to your database using MongoDB Compass. You can find the connection string in the `Connect` tab in MongoDB
   Atlas.
3. We are going to use the `sample_restaurants` collection for all exercises regarding MongoDB. Open the
   `sample_restaurants` collection and explore the data.

### Exercises



## Mongoose

9. Copy the connection string from MongoDB Atlas and paste it into the `DATABASE_DEV` environment variable. Replace the
   `<password>` with the password you created in step 6.
10. Copy the connection string from MongoDB Atlas and paste it into the `DATABASE_PROD` environment variable. Replace
    the
    `<password>` with the password you created in step 6. (That step is not necessary if you are not deploying your app)
11. Now we are ready to connect to our database. In your `server.ts` file import the `mongoose` package and connect to
    the
    database. Remember to use the `DATABASE_DEV` environment variable. To connect to the database use the following
    code:
    ```TypeScript
    const DB = process.env.DATABASE_DEV!.replace(
        '<PASSWORD>',
        process.env.DATABASE_PASSWORD!,
    );
    
    mongoose.connect(DB, {
    }).then(() => console.log('DB connection successful!'));
    ```
12. We need to create a new model for our cars. Create a new file called `carModel.ts` in the `models` folder. In this
    file
    we will create a new Mongoose schema for our cars. The schema should have the following fields:
    - `name` - String, required
    - `price` - Number, required
    - `color` - String, required
    - `createdAt` - Date, default Date.now
13. Now we need to replace the dummy data in our controller with data from our database. In your `carController.ts` file
    import the `Car` model and use the `find()` method to get all cars from the database. (Remember to use `await` when
    you call the `find()` method)
14. Replace the methods from exercise 1 with database methods. Remember to use `await` when you call the database
    methods.
15. Test your routes with Postman

## Data Modelling

