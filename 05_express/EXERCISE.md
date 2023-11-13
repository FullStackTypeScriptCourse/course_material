## Express Exercise

In this exercise, you will be creating an Express server that will act as an REST API for the `PEOPLE` exercise from the previous lesson.

The exercise is pretty straight forward. You will be creating a server that will have the following routes:

- `GET /people` - This route will return a list of people
- `GET /people/:id` - This route will return a single person
- `POST /people` - This route will create a new person
- `PUT /people/:id` - This route will update a person (entire object)
- `PATCH /people/:id` - This route will update a person (partial object)
- `DELETE /people/:id` - This route will delete a person

Because  we haven't covered databases yet, you will be using a `people.json` file to store the data. 
You will be using the `fs` module to read and write to the file.

I want you to use all the tools you have learned so far to create this server. You will be using the `express` module 
to create the server, the `body-parser` module to parse the request body, and the `fs` module to read and write to the `people.json` file.

NPM packages you will need to install:

- `express` // server
- `lo4js` // logging
- `morgan` // debugging
- `nodemon` // development
- `dotenv` // environment variables

Remember to use the `dotenv` package to store your environment variables and the `morgan` package to log the requests to the console. Also remember to use `log4js` for logging.

### Middleware

- [What the heck is middleware?](https://www.youtube.com/watch?v=MIr1oxQ3pao)

You will be using the following middleware:

- `express.json()` - parses the request body as JSON
- `morgan` - logs the request to the console

Example of using middleware:

```js   
// is adding a timestamp to the request object
app.use((req,res, next) => { // middelware
    req.requestTime = new Date().toISOString();
    next();
});

app.get("/", (req, res) => {

    const date = req.requestTime;
    res.status(200)
        .json({
            status: "success",
            message: "Hello World!",
            date: date
        })
});


```

We haven't covered middleware yet in details, but you can read more about it [here](https://expressjs.com/en/guide/using-middleware.html).
Next Course day we will be covering middleware in more details.

**Remember to upload your code to GitHub.**
