# Week 3: Typescript 1

## Objectives

- Understand how to use typescript
- Understand how to use interfaces, classes, generics, enums and types
- Write a simple typescript program and transpile it with the tsc compiler
- Setup project to autotranspile while running code

## How to prepare before class


## Class Exercise 1
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
  <body></body>
  <script src="./index.js"></script>
</html>
```
- Create an empty index.ts file at the same level as index.html.
- Open a terminal and type tsc --init (assuming you have installed global TypeScript) this will create for you a tsconfig.json 
- Run `tsc` in the terminal to transpile the typescript code to javascrip`. This will create a index.js file.
- Run `tsc --watch` or `tsc -w` to watch for changes in the typescript code and transpile it to javascript on the fly.
- Open the index.html file in the browser and open the console to see the output of the transpiled code.


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

## Class Exercise 2

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

### The ```any``` type
```typescript
let myVariable: any = 10;
myVariable = "Hello";
myVariable = true;
```
### The ```unknown``` type
With `unknown` you can assign any type as in any, but this time the compiler gets the error when you try to assign to another type. So if you don't know what type it will be, try using unknown instead of any.
```typescript
let myVariable: unknown = 10;
myVariable = "Hello";
myVariable = true;
```
### The ```never``` type
```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```
### The ```void``` type
```typescript
function log(message: string): void
```
### The ```null``` and ```undefined``` types
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
### The ```type``` type
```typescript
type MyType = string | number;
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
```typescript
let myVariable: any = "Hello";
let myString: string = myVariable as string;
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

### Generic types in TypeScript
```typescript
type Player = {
  name: string;
  hp: number;
};

type Enemy = {
  name: string;
  hp: number;
};

type Spell = {
  name: string;
  power: number;
};

const getPartyLeader = <T extends { hp: number }>(memberList: T[]) => {
  return memberList[0];
};

const playerPartyLeader = getPartyLeader(partyOfPlayers); // Ok
const enemyPartyLeader = getPartyLeader(partyOfEnemies); // Ok
const whatAreYouTrying = getPartyLeader(spellList); // Error
```
- We can now only pass types containing the hp property.

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
