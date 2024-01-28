# Node & Npm Guide

## Most common NPM & Node commands

| Description                  | Command                 |
|------------------------------|-------------------------|
| create a simple node project | npm init -y             |
| install dependencies         | npm i <dependency-name> |
| install dev dependencies     | npm i -D <dependency>   |
| install a package globally   | npm i -g <package-name> |
| run a script                 | npm run <script-name>   |

## Npm packages we use

| Description | Command                   |
|-------------|---------------------------|
| express     | API                       |
| cors        | Cors config               |
| dotenv      | Environment variables     |
| typescript  | TypeScript                |
| mongoose    | Orm framework for MongoDb |
| morgan      | Logger                    |
| nodemon     | Watcher                   |

## Most common TS types

| Description | Command        |
|-------------|----------------|
| express     | @types/express |
| cors        | @types/cors    |
| dotenv      | @types/dotenv  |
| node        | @types/node    |
| morgan      | @types/morgan  |


## Package.json script example

```json
{
  "name": "node-express-typescript",
  "version": "1.0.0",
  "description": "Node Express TypeScript",
  "main": "index.js",
  "scripts": {
    "start": "node dist/server.js",
    "start:dev": "nodemon --exec ts-node server.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {

  },
  "devDependencies": {

  }
}
```


