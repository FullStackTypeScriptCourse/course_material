// Example of using a type for the person object
type Person1 = {
    name: string;
    age: number;
    occupation: string;
    salary: number;
};
  
const alice: Person1 = {
    name: "Alice",
    age: 32,
    occupation: "Engineer",
    salary: 80000,
};
  
  // Example of using an interface for the person object
interface Person2 {
    name: string;
    age: number;
    occupation: string;
    salary: number;
}
  
const bob: Person2 = {
    name: "Bob",
    age: 45,
    occupation: "Manager",
    salary: 100000,
};
  
// Example of using a union type in a type alias for the person's occupation
type JobTitle = "Engineer" | "Manager" | "Designer" | "Developer" | "Product Manager" | "Data Analyst" | "UI/UX Designer" | "CTO" | "Marketing Manager" | "Junior Developer";
  
const david: Person2 & { occupation: JobTitle } = {
    name: "David",
    age: 39,
    occupation: "Developer",
    salary: 90000,
};

// Example of using a type assertion to specify the type of the person object. This means you are overriding the type inference of the compiler (Dont worry about this. I know what I am doing)
const eve = {
    name: "Eve",
    age: 27,
    occupation: "Product Manager",
    salary: 85000,
} as Person2;
