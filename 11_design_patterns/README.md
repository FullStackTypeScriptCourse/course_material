# Design patterns with Typescript
Design patterns in javascript are a way to solve common problems in software development. They are not a solution to a problem, but a template for solving a problem. They are a way to solve a problem in a way that is easy to understand and maintain. Take a look at the following design article: https://www.freecodecamp.org/news/javascript-design-patterns-explained

## Learning objectives
1. **Understanding Design Patterns**: Gain a comprehensive understanding of design patterns, including their purpose, benefits, and common types.
2. **Typescript Fundamentals**: Master the fundamentals of TypeScript, including its syntax, data types, and object-oriented features.
3. **Creational Patterns**: Learn various creational patterns such as Singleton, Factory, Builder, and Prototype, and understand when and how to apply them in TypeScript projects.
4. **Structural Patterns**: Explore structural patterns like Adapter, Decorator, Proxy, and Composite, and learn how to utilize them to organize code and enhance flexibility in TypeScript applications.
5. **Behavioral Patterns**: Dive into behavioral patterns like Observer, Strategy, Command, and Iterator, and grasp their implementation in TypeScript to improve code maintainability and extensibility.
6. **Implementing Patterns**: Practice implementing design patterns in TypeScript by building small-scale projects or solving coding challenges, focusing on code readability, scalability, and reusability.

## Agenda
- Catch up from last
  - How to use mongoose in our graphql resolvers.
  - GraphQL quiz

- Design patterns
  - Creational patterns
  - Structural patterns
  - Behavioral patterns
## SOLID principles
- [SOLID principles](https://en.wikipedia.org/wiki/SOLID)
- [SOLID in React video](https://www.youtube.com/watch?v=MSq_DCRxOxw&ab_channel=CoderOne)
- [SOLID example code](https://github.com/HartmannDemoCode/design_patterns_demo/tree/main/src/components/solid)

  - **Single Responsibility Principle**: A software entity should have only one reason to change.
  - **Open/Closed Principle**: A class should be open for extension but closed for modification.
  - **Liskov Substitution Principle**: Objects of a superclass should be replaceable with objects of its subclasses without affecting the functionality of the program. [Article](https://reflectoring.io/lsp-explained/)
  - **Interface Segregation Principle**: A client should never be forced to implement an interface that it doesn't use or clients shouldn't be forced to depend on methods they do not use.
  - **Dependency Inversion Principle**: High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.

## Original Gang of Four (GoF) design patterns
[Original Gang of Four (GoF) design patterns](https://www.geeksforgeeks.org/gang-of-four-gof-design-patterns/)

### Decorator pattern
- [Decorator pattern](https://en.wikipedia.org/wiki/Decorator_pattern)
- Code example:
```typescript
// function to be decorated
const add = (a: number, b: number) => a + b;

// decorator function
const log = (fn: Function) => {
    return (...args: any[]) => {
        console.log(`Arguments: ${args}`);
        const result = fn(...args);
        console.log(`Result: ${result}`);
        return result;
    };
};

// decorated function
const logAdd = log(add);

// test
logAdd(1, 2);
```
### Factory pattern
- [Factory pattern](https://en.wikipedia.org/wiki/Factory_method_pattern)
- Code example:
```typescript
// factory function
const carFactory = (model: string) => {
    return {
        model,
        make: 'Tesla',
    };
};

const myCar = carFactory('Model 3');
console.log(myCar);
```

### Observer pattern
- [Observer pattern](https://en.wikipedia.org/wiki/Observer_pattern)
- Code example:
```typescript
const observerable = () => {
    const observers: Function[] = [];
    return {
        subscribe: (fn: Function) => {
            observers.push(fn);
        },
        notify: () => {
            observers.forEach((fn) => fn());
        },
    };
};

const obs = observerable();
obs.subscribe(() => console.log('Hello'));
obs.subscribe(() => console.log('World'));
obs.notify();
```

### Demo 
- Take a look at the authenticate decorator in the Math App.
