# Type Declaration Exercise

## If you want to read more about type declaration files, go to our Fullstack Moodle page under the Wikipedia section and search for "Type Declaration". 

## Exercise

1. Create a new folder called `typedeclarationexercise`
2. Create a new file called `typeDeclaration.ts`
3. Download the "axios" library from npm.
4. Import the axios library into your `typeDeclaration.ts` file.
5. Use the axios library to make two GET request to the following URLs: 
    - https://jsonplaceholder.typicode.com/users/1 (This will return a user object)
    - https://jsonplaceholder.typicode.com/users (This will return an array of user objects)
5a. If you in doubt how to make a GET request in axios read the doc https://www.npmjs.com/package/axios
6. Use the then catch syntax to handle the response from the GET requests.
7. Create a function that takes a user object as a parameter and console.log's the user's information like this: 
    - "Name: Leanne Graham"
    - "Username: Bret"
    - "Email:
    - ....
8. You will have noticed that TypeScript is not able to infer the type of the user object in the response. Therefor you have to create a type or interface for the user object.
9. How can you make TypeScript infer the type of the user object in the response? Hint: You have to use generics.

## Questions

1. Where do you find axios type declaration file?
2. What is the name of the type declaration file for axios?
3. How do you install a type declaration file for a library that does not have one?
4. What is the difference between a type declaration file and a type definition file?