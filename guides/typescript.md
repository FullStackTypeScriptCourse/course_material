# TypeScript Guide

## Most common TS commands

| Description                                 | Command             |
|---------------------------------------------|---------------------|
| install typescript globally                 | npm i -g typescript |
| compiles a typescript file into a js file   | tsc fileName.ts     |
| compiles typescript file(s) into js file(s) | tsc                 |
| watch mode                                  | tsc -w fileName.ts  |
| watch all files in a directory              | tsc -w              |

## How to create a new TS project

| Description                         | Command                |
|-------------------------------------|------------------------|
| creates a simple typescript project | tsc --init             |
| creates a ts project through vite   | npm create vite@latest |

## Most common TS config options

TS config options are set in the `tsconfig.json`

- TSConfig:    https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
- TSReference: https://www.typescriptlang.org/tsconfig

| Description   | Section         | Command                                                        |
|---------------|-----------------|----------------------------------------------------------------|
| include       |                 | includes all the files in the array in the compilation process |
| exclude       |                 | excludes all the files in the array from the compilation       |
| files         |                 | includes all the files in the array in the compilation process |
| outDir        |                 | specifies the output directory for the compiled files          |
| target option | compilerOptions | specifies the ECMAScript target version                        |
| strict option | compilerOptions | enables all strict type checking options                       |
| skipLibCheck  | compilerOptions | skips type checking of all the type declaration files          |
| types         | compilerOptions | specifies the type declaration files to be included            |

## Basic TS config

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "skipLibCheck": true,
    "types": [
      "node"
    ]
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules"
  ]
}
```



