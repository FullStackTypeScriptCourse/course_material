### Express Routes 
- you need tou have completed the `Express Basic Exercise` before you can start this part.

**Following packages are required:**
```BASH
  npm install body-parser morgan log4js
  npm install -D @types/body-parser @types/morgan @types/log4js
```

1. add the `body-parser` and `morgan` middleware to the `server.ts` file:

```TypeScript
    import express, { Express, Request, Response , Application } from 'express';
    import dotenv from 'dotenv';
    import bodyParser from 'body-parser';
    import morgan from 'morgan';
    import log4js from 'log4js';
    
    //For env File 
    dotenv.config();
    
    const app: Application = express();
    const port = process.env.PORT || 3000;
    
    // Middleware
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    
    app.get('/', (req: Request, res: Response) => {
      res.send('Welcome to Express & TypeScript Server');
    });
    
    app.listen(port, () => {
      console.log(`Server is Fire at http://localhost:${port}`);
    });
```
    - Understand the `morgan` and the `body-parser` middleware. What is the purpose of each middleware?

2. Add Data
   - add a json file called persons.json to the root of the project with the following content:

```JSON
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 25
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "age": 24
  }
]
```
- use the `json-server` package to serve the `persons.json` file. [Link](https://www.npmjs.com/package/json-server)

3. Creating new routes and implement the logic for each route:
 - Create a new GET endpoint `/persons` that returns all persons from the `persons.json` file.
 - Create a new GET endpoint `/persons/:id` that returns a single person from the `persons.json` file.
 - Create a new POST endpoint `/persons` that creates a new person in the `persons.json` file.
 - Create a new PUT endpoint `/persons/:id` that updates a person in the `persons.json` file.

**Get by id example:**
```TypeScript
    app.get('/persons/:id', (req: Request, res: Response) => {
      const id = req.params.id;
      const person = persons.find(p => p.id === parseInt(id));
      if (person) {
        res.status(200).json(person);
      } else {
        res.status(404).send('Person not found');
      }
    });
```

4. Test if the endpoints work with Postman a http file or a similar tool.