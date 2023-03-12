## Express Middleware

### What is middleware? (from the express docs)

Express is in its self a routing and middleware web framework that has minimal functionality of its own: 
An Express application is essentially a series of middleware function calls.

Middleware functions are functions that have access to the request object (req), the response object (res), 
and the next middleware function in the application’s request-response cycle. The next middleware function is commonly 
denoted by a variable named `next()`.

Middleware functions can perform the following tasks:

- Execute any code. 
- Make changes to the request and the response objects. 
- End the request-response cycle. 
- Call the next middleware function in the stack.


If the current middleware function does not end the request-response cycle, it must call next() to pass control to the 
next middleware function. Otherwise, the request will be left hanging.

An Express application can use the following types of middleware:

- Application-level middleware // app.use()
- Router-level middleware // router.use()
- Error-handling middleware  // app.use()
- Built-in middleware // express.json()
- Third-party middleware // morgan

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```


### Links

- [What the heck is middleware?](https://www.youtube.com/watch?v=MIr1oxQ3pao)
- [Express Middleware](https://expressjs.com/en/guide/using-middleware.html)











### Links

- [Express Middleware](https://expressjs.com/en/resources/middleware.html)
- [What the heck is middleware?](https://www.youtube.com/watch?v=MIr1oxQ3pao)

