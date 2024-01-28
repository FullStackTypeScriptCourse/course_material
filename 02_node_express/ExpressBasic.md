
### Express Project Part 1
- Create a basic TypeScript Npm project ( See Fullstack-Moodle for details)

**Following packages are required:**
```BASH
  npm install express dotenv
  npm install -D ts-node @types/node @types/express nodemon
```

If you have not installed TypeScript globally you need to install it as well:
```BASH
  npm install -g typescript
```

- Create a `dist` folder and src folder. Add a `server.ts` file inside the `src` folder containing the following code:
```TypeScript
    import express, { Express, Request, Response , Application } from 'express';
    import dotenv from 'dotenv';
    
    //For env File 
    dotenv.config();
    
    const app: Application = express();
    const port = process.env.PORT || 3000;
    
    app.get('/', (req: Request, res: Response) => {
      res.send('Welcome to Express & TypeScript Server');
    });
    
    app.listen(port, () => {
      console.log(`Server is Fire at http://localhost:${port}`);
    });
```

- Create a nodemon.json file with the following:
```JSON
{
  "watch": ["src"],
  "ext": "ts,js,json",
  "ignore": ["node_modules/**/*"],
    "exec": "npx ts-node ./src/server.ts"
}
```

- Add the following scripts to the package.json file and add `"type": "module",` to the package.json file as well (in the root of the file) in order to use ES6 modules and import statements.

```JSON
{
  "scripts": {
    "dev": "nodemon"
  }
}
```

- Run the server
```BASH
  npm run dev
```


That is it! You have a basic Express server running with TypeScript. You can now start building your API. 🚇