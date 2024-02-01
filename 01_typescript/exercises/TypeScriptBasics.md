# TypeScript Basic Exercises

1. Basic Types:
    - Define variables with the following types: number, string, boolean, array, and any.

2. Enums:
    - Create a numeric enum for all days of the week.
    - Change a day of the week to a string enums.
    - What else could you use that would be similar to an enum?  

3. Classes:
    - Create a ts class representing a basic person with properties for name, email and age. Make the properties private
      and add getters and setters.
    - Also add a constructor that takes the values for the properties as parameters. Make the email property read-only.
      Create an instance of the class.
    - Now create another class called employee that extends the person class and adds a property for salary. Create an
      instance of the employee class.

4. Type Assertion:
    - Use type assertion to convert a variable from type any to type string.

5. Function with Types:
    - Create a function that takes two numbers as parameters and returns their sum.

6. Tuples:
    - Define 4 tuples representing the http status codes 200, 400, 404 and 500 and their corresponding messages.
    - Define a tuple representing a person with name(string), age(number) and email(string).

7. Union Types:
    - Create a function that can accept either a number or a string as a parameter.
    - Create a type alias for the person tuple from the previous exercise. Where the age property can be either a number
      or a string.
    - call the function with a number and a string.

8. Generics:
    - Create a generic function that takes an array of any type and returns the first element of the array.
    - Create a generic function that takes two parameters that extends the type object and returns both object parameters
      combined.

9. Array Types
    - Create an array of numbers. But instead of using the number type, use the array type.
    - Create a Multidimensional Array of strings to use for the game Tic Tac Toe. The array should have 3 rows and 3
      columns. All string values should be "-".

10. Exclamation Mark
    - Where in code below would you need to use the exclamation mark to tell TypeScript that a variable is not null or
      undefined?
    ```ts
     // Part 1
     // A variable that might be null or undefined
     let nullableValue: string | null | undefined = "Hello";
    
     // Use the exclamation mark to assert that the value is non-null
     let nonNullableValue: string = nullableValue;
    
     console.log(nonNullableValue); // Output: Hello
    
    // Part 2
    // A variable that might be null or undefined
    let myString: string | undefined = possibleUndefinedStringFunction();
    // Use the exclamation mark to assert that the value is non-null
    let lemgth: number = myString.length;
    ```

11. Question mark
    - Where in code below would you need to use the question mark to tell TypeScript that a variable is optional?
    ```ts
    // Part 1
    // A function that takes an optional parameter
    function printName(name: string) {
      console.log(name);
    }
    
    // Call the function without a parameter
    printName(); // Output: undefined
    // Call the function with a parameter
    printName("John"); // Output: John
    
    // Part 2
    // A type alias with an optional age property
    type Person = {
      name: string;
      age: number;
    };
    
    // Create a person object with an age property
    // Create a person object without an age property
    ```       

12. Unions - Narrowing the Type
    - Write a function that takes a string or number as a parameter. If the parameter is a string, return the string. If
      the parameter is a number, return the number multiplied by 2. (use the typeof operator to check the type of the
      parameter)

13. Type Assertion
    - Use type assertion to convert a variable from type any to type string. Use the as keyword and the angle-bracket
      syntax.
    - Call a div element with id="myDiv" and convert it to type HTMLInputElement.

14. Literal Types combined with Union Types
    - Create a function that takes a string called direction as a parameter. Use literal types to narrow the type of the
      parameter.
    - If the direction is "left" return 1, if the direction is "right" return 2, if the direction is "up" return 3, if
      the direction is "down" return 4. (use a switch statement)

15. **in** Operator Narrowing
    - create two simple type aliases for a human and an alien. Both alias should have a specific function like `eat`
      and `fly`.
    - create a function that takes in a `creator` parameter that could be either a person or an alien. Use the **in**
      operator to narrow the type of the parameter. When you use the `in` operator you have to use the function to check
      if the property exists on the object. If the parameter is a human, return the function belonging to the human
      otherwise return the function belonging to the alien.

16. **instanceof** Operator Narrowing
    - create two simple objects for a person and a car.
    - create a function that takes a person or a car as a parameter. Use the **instanceof** operator to narrow the type
      of the parameter. If the parameter is a person, return the name property. If the parameter is a car, return the
      model property.

17. Type Predicates

    ```typescript
    interface Bird {
      fly(): void;
      layEggs(): void;
    }
    
    interface Fish {
      swim(): void;
      layEggs(): void;
    }

    // write a type predicate to narrow the type of the fish parameter

    function howToMove(pet: Fish | Bird) {
      if (isFish(pet)) {
        pet.swim();
      } else {
        pet.fly();
      }
    }
    ```

18. Index Signatures
    - Create an interface for a person with a name property and an index signature that allows the interface to have
      additional properties.
    - Create an object of type person with a name property and an additional property called age.

19. Intersection Types
    - Create two interfaces, one for a person and one for a student. The person interface should have a name property
      and the student interface should have a studentId property.
    - Create a function that takes a person and a student as parameters. Use intersection types to combine the two
      interfaces into one. The function should return an object with the properties from both interfaces.
