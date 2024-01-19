# Type Declaration

## Type Declaration Files

- Type declaration files are used to provide types for JavaScript libraries that were not written in TypeScript.
- Type declaration files have a `.d.ts` extension.
- Type declaration files are written in TypeScript.
- A .d.ts file only contains type information. It does not contain any executable code.
- They have to be explicitly included in the compilation process.
- You do this by adding them to the types array in the tsconfig.json file.
- Check out the form-data folder in your node_modules folder. It contains a type declaration file called index.d.ts.


## What if a Type Declaration File is Missing?

If a type declaration file is missing, TypeScript will infer the type of the library as any. This means that you will 
not get any type checking for that library. What if you want to use a library that does not have a type declaration ?

There are two ways to solve this problem:

- You can write your own type declaration file.
- You can install a type declaration file from the @types scope.

If you for example, look at the npm package lodash, you will not find a type declaration file. Have a look what
TypeScript write about that here on this [LINK](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html)

Install Types Separately

Not all type declaration files are included in the @types scope. You can install them separately using the npm install command.

```bash
npm install @types/<package-name>
```

You can find all the type declaration files that are available in the @types scope here: https://www.npmjs.com/~types or
on GitHub here: https://github.com/DefinitelyTyped/DefinitelyTyped