
### Express base project [TS & Express](https://dev.to/cristain/how-to-set-up-typescript-with-nodejs-and-express-2023-gf

- Run the following commands:
```BASH
mkdir node-express-typescript
cd node-express-typescript
npm init -y
```
- Install dependencies
```BASH
npm install express cors dotenv
npm install -D typescript ts-node-dev @types/express @types/cors
```
- Generate the tsconfig.json file
```BASH
npx tsc --init
```

- Change the tsconfig.json file to the following:
```JSON
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "rootDirs": ["src"],
    "outDir": "./dist",
    "lib": ["es2020"],
    "target": "es2020",
    "module": "esnext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "types": ["node"]
  },
  "ts-node": {
    "esm": true,
    "experimentalSpecifierResolution": "node"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}

```

- Create a dist folder and create a src folder and server.ts file inside (in the root of the project) containing the following code:
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

- Install nodemon
```BASH
  npm install nodemon
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

- Add the following scripts to the package.json file
```JSON
{
  "scripts": {
    "dev": "nodemon",
    "demo": "ts-node ./src/demo.ts",
    "build": "rimraf ./build && tsc"
  }
}
```

- and add `"type": "module",` to the package.json file as well (in the root of the file) in order to use ES6 modules and import statements.
- Run the server
```BASH
  npm run dev
```
