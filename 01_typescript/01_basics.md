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
`void` has special meaning in function return types, and is not an alias for undefined. The intent of `void` is that a function's return value will not be observed. So any type will do in a function since it will just be ignored. Like this:
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
  readonly isExpansion: boolean; // can only be read, not changed

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
- TypeScript only allows type assertions which convert to a more specific or less specific version of a type. This rule prevents “impossible” coercions.
- In some cases when this is too strict we can use the double assertion like: `myVariable as any as string`, by first asserting to any and then to the desired type.
```typescript
let myVariable: any = "Hello";
let myString: string = myVariable as string; // type assertion using the "as" keyword
```
### The ```type alias``` type
```typescript
type MyType = string | number;
let myType: MyType = 10; // Type Alias
myType = "Hello";
```
### The ```type inference``` type
Type inference in TypeScript is the ability of the compiler to automatically deduce and assign types to variables based on the values assigned to them. This allows you to write code with less explicit type annotations while still benefiting from the advantages of static typing.
```typescript
// Type inference in action
let message = "Hello, TypeScript!"; // TypeScript infers the type as string

// Explicit type annotation
let count: number = 42;

```
### The ```type guard``` type
A type guard in TypeScript is a way to narrow down the type of a variable within a certain code block. It helps TypeScript understand the specific type of a variable, enabling more precise type-checking. One common scenario is using the typeof or instanceof operator to check types.
```typescript
function printLength(value: string | number): void {
    if (typeof value === 'string') {
        // Inside this block, TypeScript knows that 'value' is a string
        console.log(value.length);
    } else {
        // Inside this block, TypeScript knows that 'value' is a number
        console.log("Cannot determine length for a non-string value.");
    }
}

printLength("Hello"); // Output: 5
printLength(42);      // Output: Cannot determine length for a non-string value.

```
### The ```type narrowing``` type
Type narrowing in TypeScript refers to the process of refining the type of a variable within a certain code block based on specific conditions. It allows you to make more precise assumptions about the type of a variable, enabling TypeScript to provide better type checking.
```typescript
type Shape = "circle" | "square" | "triangle";

function getArea(shape: Shape, radius?: number, side?: number): number | undefined {
    switch (shape) {
        case "circle":
            if (typeof radius === 'number') {
                // Inside this block, TypeScript narrows down the type of 'shape' to 'circle'
                return Math.PI * radius ** 2;
            }
            break;
        case "square":
            if (typeof side === 'number') {
                // Inside this block, TypeScript narrows down the type of 'shape' to 'square'
                return side ** 2;
            }
            break;
        case "triangle":
            // Handle triangle calculation
            break;
    }

    // If shape is not handled or missing parameters
    return undefined;
}

```

### The ```type widening``` type
Type widening in TypeScript refers to the process where TypeScript automatically assigns a broader type to a variable than its initial or expected type. This often happens when TypeScript cannot infer a more specific type, and it defaults to a broader, more general type. This behavior is also known as "type widening."
```typescript
let myVariable: any = "Hello";
let myString: string = myVariable;
```
Type widening is a mechanism that helps maintain flexibility in dynamic scenarios but can sometimes lead to unexpected behavior if not handled carefully. It's important to be aware of type widening and consider explicitly specifying types when a more precise type is desired.

### The literal type
In TypeScript, a literal type is a type that represents exactly one value. Literal types can be strings, numbers, or boolean values specified directly in the code. They provide a way to define and work with specific, exact values within the type system.
```typescript
let myString: "Hello"; // Literal type representing the exact string value "Hello"

let myNumber: 42; // Literal type representing the exact number value 42

let myBoolean: true; // Literal type representing the exact boolean value true

// Union of literal types
let status: "success" | "error"; // Literal type union representing the values "success" or "error"

function printMessage(message: "Hello" | "Goodbye"): void {
    console.log(message);
}

printMessage("Hello"); // Valid
printMessage("Goodbye"); // Valid
// printMessage("Other"); // Error: Argument of type '"Other"' is not assignable to parameter of type '"Hello" | "Goodbye"'

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

###  👇️ Index signature
- The **index signature** specifies that when an object is indexed with a string, it returns a value with any type.
- Looks like this: `{[key: string]: any}`
- Is used when we don't know all the names of a type's properties and the shape of their values ahead of time.
- Example:
```typescript
interface MyDictionary {
    [key: string]: number;
}

let myObject: MyDictionary = {
    apples: 5,
    bananas: 10,
    oranges: 7,
};

console.log(myObject.apples); // Accessing a known property
console.log(myObject["grapes"]); // Accessing a dynamically named property

myObject["pears"] = 8; // Assigning a value to a dynamically named property

```
In this example, the MyDictionary interface uses an index signature [key: string]: number;, which means that any string property key can be used, and the corresponding value must be of type number. This allows you to have a flexible object structure with dynamic property names.
You can also use index signatures with other data types, such as string or any, depending on your requirements.


### The exclamations mark (!) in TypeScript
In TypeScript, the exclamation mark (!) is used as the non-null assertion operator. It tells the TypeScript compiler to treat an expression as non-null or non-undefined, even if the type system would normally consider it nullable.

```typescript
let possiblyNull: string | null = "Hello";

// The following line would result in a compilation error because possiblyNull might be null
// let length: number = possiblyNull.length; // Error: Object is possibly 'null'.

// By using the non-null assertion operator, you tell TypeScript to treat possiblyNull as non-null
let length: number = possiblyNull!.length;

console.log(length); // No compilation error, as you've asserted that possiblyNull is non-null

```
In this example, possiblyNull is declared as a string or null. Without the non-null assertion (!), TypeScript would generate a compilation error when trying to access the length property, as it recognizes that possiblyNull might be null.
The non-null assertion operator should be used with caution because it essentially tells TypeScript to trust you that the value is indeed non-null. If used incorrectly, it might lead to runtime errors if the value is, in fact, null or undefined. It's generally better to use proper type checks or nullish coalescing (??) when dealing with nullable types to ensure safer code.

### The question mark (?) in TypeScript
In TypeScript, the question mark (?) is used to denote optional properties in object types or function parameters. When a property or parameter is marked as optional, it means that it may or may not be present in the object or function call.
```typescript
interface Person {
    name: string;
    age?: number; // The question mark makes 'age' optional
}

let person1: Person = {
    name: "John",
};

let person2: Person = {
    name: "Jane",
    age: 25,
};
```
In this example, the age property in the Person interface is marked as optional using the question mark. This allows objects of type Person to be created with or without the age property.

Similarly, you can use the question mark for optional parameters in function declarations:
```typescript
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greet("John")); // Output: Hello, John!
console.log(greet("Jane", "Good morning")); // Output: Good morning, Jane!
    
```

In this function, the greeting parameter is marked as optional using the question mark. This allows you to call the function with one or two arguments.
Using the question mark for optional properties and parameters is a convenient way to make certain elements in your types or functions flexible, providing more flexibility when working with different variations of objects or function calls.

### Type casting in TypeScript
Type casting in TypeScript is the process of explicitly changing the type of a value from one type to another. TypeScript provides two main ways to perform type casting: using the as keyword and using angle brackets (<>).
```typescript
let myVariable: any = "Hello, TypeScript!";
let stringLength: number = (myVariable as string).length;

console.log(stringLength); // Output: 17

```
In this example, myVariable is initially of type any. The (myVariable as string) syntax is used to cast it explicitly to a string type, allowing access to the length property.
You can also use angle brackets (<>), which is the equivalent of the `as` keyword:
```typescript
let myVariable: any = "Hello, TypeScript!";
let stringLength: number = (<string>myVariable).length;

console.log(stringLength); // Output: 17
    
```

It's important to note that type casting doesn't change the underlying structure of the object; it only tells the TypeScript compiler to treat the value as a different type for the purpose of type checking.

Type casting is often necessary when working with values of a less specific type (e.g., any) or when dealing with union types. However, it's recommended to use type casting sparingly and prefer safer type-checking mechanisms provided by TypeScript whenever possible. Misusing type casting may lead to runtime errors if the casted type is incorrect.
