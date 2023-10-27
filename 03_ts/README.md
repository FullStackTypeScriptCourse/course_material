# Week 3: Typescript 1
structurally typed type system 

## Objectives

- Understand how to use typescript
- Understand how to use interfaces, classes, generics, enums and types
- Write a simple typescript program and transpile it with the tsc compiler
- Setup project to autotranspile while running code

## How to prepare before class
1. See [this video (appr. 1 hour)](https://www.youtube.com/watch?v=d56mG7DezGs&ab_channel=ProgrammingwithMosh)
2. Skim this [TS Intro (appr 30 min.)](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

## Class Exercise 1 - together
- Install typescript globally with `npm install -g typescript`
- Create a new empty folder
- Place an index.html with the basic HTML5 structure inside.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body><div id="root"></div></body>
  <script src="./index.js"></script>
</html>
```
- Create an index.ts file at the same level as index.html, with the following code:
```typescript
const helloWorld = (name: string):string => {
  return `Hello from ${name}`;
};
document.getElementById("root")!.innerHTML = helloWorld("TypeScript");
```

- Open a terminal and type tsc --init (assuming you have installed global TypeScript) this will create for you a tsconfig.json 
- Run `tsc` in the terminal to transpile the typescript code to javascript. This will create a index.js file.
- Run `tsc --watch` or `tsc -w` to watch for changes in the typescript code and transpile it to javascript on the fly.
- Open the index.html file in the browser.
- Change the code in index.ts to insert an input field and a button to the html page. When the button is clicked, the text from the input field should be displayed inside the root element of the html page.

### Tsconfig.json

- `target` Should be ES6 or higher. It is the version of JS we are converting our TS code to. Depending on the browsers you want to support, you may need to set some older version. It can be a good learning resource too – try playing with different versions and see what JS code is generated.
- `module` Should be `es2015` or higher. It defines what kind of syntax you will use for modules. commonjs which is the default uses require/module.exports and modern JS (ES6+) uses import/export. If you want to use import/export you need to change target to ES6 or higher. In the example project we will use this syntax so check the rest of the article for this.
- `lib` You need it to specify additional libraries you will use in your project and check additional types, for example DOM related.
- `jsx` In React you will need to set it to at least preserve. This mode assumes that another tool will compile that part (Babel in this case) but TSC will do the type checking. You can set this property to react or react-native. You use this if you want TSC to compile your JSX code into regular JS code. In most cases we will leave this property to preserve which will send the file as regular JSX and Babel/Webpack will do the rest.
- `outDir` where the files will be placed after the compilation, for example in most React projects it will be placed in a build folder.
- `rootDir` where the files will be taken for compilation. On most React projects this will be ./src.
- `strict` enables a set of rules for type checking which results in a stronger check for what is considered "correct"/ I recommend starting with this on false when you are learning. Then when you feel confident enough turn it on and check what new red flags you have. But remember you will get the full potential of TS with this option enabled. This option also enables all the strict options below, which you can disable individually.
- `include` the folder(s) you want to include to be compiled, for example the src folder
- `exclude` the folder(s) you want to prevent from being compiled, for example the node_modules folder.

## Class Exercise 2 - individually
1. Rewrite the code from the previous exercise to do the following:
- Create a class called `Person` with the following properties:
  - `name` (string)
  - `age` (number)
  - `gender` (string)
- Create a populator function to populate an array of 10 Person objects.
- Create a function that can map the array of Person object to an html table with headers and 10 rows
- Attach the table to the root element of the html page.
- Add a button to the page that when clicked will sort the table by age in ascending order. 
- Change the button so it can toggle the sort order between ascending and descending.

## Why typescript?
- Being coherent in typing and consistent with static types
- Providing documentation and IntelliSense of the available possibilities
- Detecting bugs early

### Arrays in TypeScript
```typescript
let job = "Red Mage";
let level = 75;
let isExpansionJob = false;
let jobAbilities = ['Chainspell', 'Convert'];

jobAbilities.push('Composure'); // OK
jobAbilities.push(2); // Error
jobAbilities[0] = 2; // Error
```
In the example above, we declared an array of strings jobAbilities. We can add more strings, but we cannot add other types or change the current values to values of other types. This is because in the declaration we have made the inference of type string[].

If you want to explicitly declare the types for the arrays we saw in the examples:
```typescript
let jobAbilities: string[] = ['Chainspell', 'Convert'];
let swordSkill: (string | number)[] = ["B", 5, 144, 398];
```
The `|` character is for doing a union of different types.

### The `any` type
The `any` type is used when we deal with third-party programs and expect any variable but we don’t know the exact type of variable. Any data type is used because it helps in opt-in and opt-out of type checking during compilation. 

```typescript
let myVariable: any = 10;
myVariable = "Hello";
myVariable = true;
```
### The `unknown` type
`unknown` is the set of all possible values. Any value can be assigned to a variable of type `unknown`. This means that `unknown` is a supertype of every other type. `unknown` is called the top type for that reason.
With `unknown` you can assign any type as in `any`, but this time the compiler gets the error when you try to assign to another type. So if you don't know what type it will be, using `unknown` is a much better (a lot safer) than using `any`.

```typescript
let myVariable: unknown = 10;
myVariable = "Hello";
myVariable = true;
```
### The ```never``` type
The type that should never happen. E.g. in conditionals if we return something from a callback, but what was sent in as a calllback was not a function. see more at: https://blog.logrocket.com/when-to-use-never-and-unknown-in-typescript-5e4d6c5799ad/.

```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```
### The ```void``` type
`void` has special meaning in function return types, and is not an alias for undefined. The intent of `void` is that a function's return value will not be observed. So any type will do in a function since it will jus be ignored. Like this:
```typescript
declare function forEach<T>(arr: T[], callback: (el: T) => void): void;
let target: number[] = [];
forEach([1, 2, 3], el => target.push(el)); //array.push returns a number, but foreach does not care (if the return type had been defined to `unknown` then that would have caused an error.)
```

### The ```null``` and ```undefined``` types
- `undefined`: The value `undefined` means value is not assigned & you don’t know its value. It is an unintentional absence of value. It means that a variable has been declared but has not yet been assigned a value. `undefined` is the default value assigned to a variable that is declared but never assigned a value.
- `null`: The value `null` indicates that you know that the field does not have a value. It is an intentional absence of value. We have to assign Null to variable to make it null.

The JSON standard has support for encoding null but not undefined.
`JSON.stringify({willStay: null, willBeGone: undefined}); // {"willStay":null}`

```typescript
let u: undefined = undefined;
let n: null = null;
```
### The ```object``` type
```typescript
let myObject: object = { name: "John" };
```
### The ```string``` type
```typescript
let myString: string = "Hello";
```
### The ```number``` type
```typescript
let myNumber: number = 10;
```
### The ```boolean``` type
```typescript
let myBoolean: boolean = true;
```
### The ```array``` type
```typescript
let myArray: number[] = [1, 2, 3];
let myArray: Array<number> = [1, 2, 3];
```
### The ```tuple``` type
This is an array-like type, which cares about where the types are placed.
```typescript
let myTuple: [string, number] = ["Hello", 10];
```
### The ```enum``` type
```typescript
enum Color {
  Red,
  Green,
  Blue,
}
let myColor: Color = Color.Green;
```
### The ```union``` type
```typescript
let myUnion: string | number = 10;
myUnion = "Hello";
```
### The ```type alias``` 
```typescript
type MyType = string | number; // Type Alias
let myType: MyType = 10;
myType = "Hello";
```
### The ```interface``` type
When to choose it over the `type` type`?
- If you write object-oriented code, use interfaces.
- If you write functional code, use type aliases.
- Use interfaces for public API libraries and types for components, state, JSX, etc.
- [source](https://www.freecodecamp.org/news/typescript-for-react-developers/)

```typescript
interface MyInterface {
  name: string;
  age: number;
}
let myInterface: MyInterface = { name: "John", age: 30 };
```
### The ```class``` type
```typescript
class Job {
  public name: string;
  private level: number;
  readonly isExpansion: boolean;

  constructor(name: string, level: number, isExpansion: boolean) {
    this.name = name;
    this.level = level;
    this.isExpansion = isExpansion;
  }
}

const whiteMage = new Job("White Mage", 75, false);

console.log(whiteMage.name); // "White Mage"
console.log(whiteMage.level); // Error
console.log(whiteMage.isExpansion); // false

whiteMage.name = "Blue Mage"; // Ok
whiteMage.level = 50; // Error
whiteMage.isExpansion = true; // Error
```
- Above we have a class called Job. We have declared the properties of the class as public, private and readonly. Public properties can be accessed from outside the class, private properties can only be accessed from inside the class and readonly properties can only be accessed from inside the class and cannot be changed.

### The ```function``` type
Here we can specify the types of the parameters and the return type.
```typescript
function myFunction(name: string, age: number): string {
  return `Hello ${name}, you are ${age} years old`;
}
```
### The ```type assertion``` type
- To specify a more specific type for a variable, we can use the `as` keyword.
- TypeScript only allows type assertions which convert to a more specific or less specific version of a type. This rule prevents “impossible” coercions like:
- In some cases when this is too strict we can use the double assertion like: `myVariable as any as string`, by first asserting to any and then to the desired type.
```typescript
let myVariable: any = "Hello";
let myString: string = myVariable as string; // type assertion using the "as" keyword
```
### The ```type alias``` type
```typescript
type MyType = string | number;
let myType: MyType = 10;
myType = "Hello";
```
### The ```type inference``` type
```typescript
let myVariable = "Hello";
```
### The ```type guard``` type
```typescript
function isString(value: any): value is string {
  return typeof value === "string";
}
function log(value: any) {
  if (isString(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log(value);
  }
}
```
### The ```type narrowing``` type
```typescript
function log(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value);
  }
}
```

### The ```type widening``` type
```typescript
let myVariable: any = "Hello";
let myString: string = myVariable;
```

### The literal type
```typescript
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
```

### Optional parameters in TypeScript
We can define optional parameters in functions with ?.

```typescript
let heal = (target: Player | Enemy, spell: Spell, message?: string) => {
  if (message) console.log(message);
  return target.hp + spell.power;
};

heal(player1); // Error
heal(player1, cure, "Healing player1"); // OK
heal(skeleton, cure); // OK
```
- The first call won't work because we need to pass at least two parameters, but the second and third are fine. message is an optional parameter. When not passed it will be received as undefined.

### // 👇️ Index signature
[Source](https://bobbyhadz.com/blog/typescript-key-string-any)
- The **index signature** specifies that when an object is indexed with a string, it returns a value with any type.
- Looks like this: `{[key: string]: any}`
- Is used when we don't know all the names of a type's properties and the shape of their values ahead of time.
- Example:
```typescript
// function returning index signature
// (a key-value structure with key string and value any)
function getObj(): { [key: string]: any } {
  return { name: 'Tom', age: 30, pizza: true };
}

// 👇️ Interface using index signature
interface Person {
  [index: string]: any;
}

// 👇️ const p1: Person
const p1: Person = { name: 'Tom', age: 30 };

// 👇️ Type using index signature
type Animal = {
  [index: string]: any;
};

const a1: Animal = { name: 'Alfred', age: 3 };
```


### Generic types in TypeScript
[Guide](https://www.digitalocean.com/community/tutorials/how-to-use-generics-in-typescript)
- When to use genric types in typescript:
  - Generics can appear in functions, types, classes, and interfaces
  - When using functions and you have some code that is not easily typed for all use cases.
  - 
```typescript
function identity<T>(value: T): T {
  return value;
}
const result = identity(123); // number type is inferred here
const result2 = identity<number>(123); // number type is explicitly given here
``` 
- The above function is made type safe in that it must return the same type as its first argument
- Another more complex example:
```typescript
function pickObjectKeys<T, K extends keyof T>(obj: T, keys: K[]) { // K becomes a union of the keys of T
  let result = {} as Pick<T, K> // Pick<T, K> is a Typescript language utility type.
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key]
    }
  }
  return result
}

const language = {
  name: "TypeScript",
  age: 8,
  extensions: ['ts', 'tsx']
}

const ageAndExtensions = pickObjectKeys(language, ['age', 'extensions']) // since language is given a first argument ageAndExtensions is inferred to be { age: number, extensions: string[] }
```
- And another example with async function:
```typescript
async function fetchApi<ResultType>(path: string): Promise<ResultType> {
  const response = await fetch(`https://example.com/api${path}`);
  return response.json();
}
```
- In the above code the ResultType could not be inferred from the return type of the fetchApi function.
- So we MUST specify the type of the result when calling the function:

```typescript
type User = {
  name: string;
  age: number;
}

const data = await fetchApi<User[]>('/users')
```
#### Generic Default Types
```typescript
async function fetchApi<ResultType = Record<string, any>>(path: string): Promise<ResultType> {
  ...
}
```

#### Generic Default Types
```typescript
async function fetchApi<ResultType = Record<string, any>>(path: string): Promise<ResultType> {
  ...
}
```
- The above code is the same as the previous example, but the default type is Record<string, any> which is a generic type that represents an object with string keys and any values.
- So if we don't specify the type of the result when calling the function, the default type will be used.



### The exclamations mark (!) in TypeScript
```typescript
// HTMLFormElement
const form = document.querySelector("form")!; 
```
With `!` you tell TS not to worry, it will find it, and it can't be null.

### The question mark (?) in TypeScript
```typescript

const form = document.querySelector("form");

form?.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(e);
});
```
- The questionmark means: Do it only if it is not null:

### Type casting in TypeScript
```typescript

const otherForm = document.getElementById("myFancyForm") as HTMLFormElement;

otherForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(e);
});
```
- Above is typecasting to tell TS that it is a HTMLFormElement and not null.
