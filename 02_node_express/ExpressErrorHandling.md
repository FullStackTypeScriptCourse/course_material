### Express Error Handling
- you need tou have completed the `Express Basic Basic` and `Express Routes` Exercise before you can start this part.

- Error handling in Express is done through the use of middleware. The error-handling middleware is defined with four arguments: (err, req, res, next). For example:

```js
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
```
- The error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.

- If you define multiple error-handling middleware functions, they are executed sequentially, just like regular middleware functions. The first error-handling middleware function that calls next() will transfer control to the next error-handling middleware function. If no error-handling middleware function calls next(), the default Express error handler will be invoked, which simply returns an Internal Server Error (500) status code to the client.

- Read the docs for more info: https://expressjs.com/en/guide/error-handling.html