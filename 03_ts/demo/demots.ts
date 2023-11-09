import { Person, Student } from "./myTypes";
let job = "Red Mage";
let level = 75;
let isExpansionJob = false;
let jobAbilities: string[] = ["Chainspell", "Convert"];

jobAbilities.push("Composure"); // OK
// jobAbilities.push(2); // Error
// jobAbilities[0] = 2; // Error

// let myVariable: any = 10;
// myVariable = "Hello";
// // myVariable = true;
// myVariable.toUpperCase(); // OK

let myVariable: unknown = 10;
myVariable = "Hello";
// myVariable = true;

if (myVariable instanceof String) myVariable.toUpperCase();

function throwError(message: string): never {
  throw new Error(message);
}

// declare function forEach<T>(arr: T[], callback: (el: T) => void): void;
// let target: number[] = [];
// forEach([1, 2, 3], (el) => target.push(el)); //array.push returns a number, but foreach does not care (if the return type had been defined to `unknown` then that would have caused an error.)

let myObject: object = { name: "John" };
let myObject2: { name: string; age: number } = { name: "John", age: 3 };
myObject2.age = 4; // OK

let myTuple: [string, number] = ["Hello", 10];

enum Color {
  Red,
  Green,
  Blue,
}
let myColor: Color = Color.Green;

let myUnion: string | number = 10;
myUnion = "Hello";

myUnion.toUpperCase(); // Error

// type Person = { name: string, age: number };
let myStringVariable: any = "Hello";
let myString: string = myStringVariable as string; // type assertion using the "as" keyword

myString.toUpperCase(); // OK

let myNumberVariable = 10;
let myNumber = myNumberVariable as unknown as string; // type assertion using the "as" keyword

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

const exportFunction = () => {
  let myPerson: Person = { name: "John", age: 3 };
  let myStudent: Student = { name: "John", age: 3, grade: 3 };
  console.log(myPerson, myStudent);
console.log('IS STRING: ',isString("Hello")); // false
};

export default () => {exportFunction()};
