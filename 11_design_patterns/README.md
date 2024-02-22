# Design patterns with Typescript
Design patterns in javascript are a way to solve common problems in software development. They are not a solution to a problem, but a template for solving a problem. They are a way to solve a problem in a way that is easy to understand and maintain. Take a look at the following design article: https://www.freecodecamp.org/news/javascript-design-patterns-explained

## Learning objectives
1. **Understanding Design Patterns**: Gain a comprehensive understanding of design patterns, including their purpose, benefits, and common types.
2. **Typescript Fundamentals**: Master the fundamentals of TypeScript, including its syntax, data types, and object-oriented features.
3. **Creational Patterns**: Learn various creational patterns such as Singleton, Factory, Builder, and Prototype, and understand when and how to apply them in TypeScript projects.
4. **Structural Patterns**: Explore structural patterns like Adapter, Decorator, Proxy, and Composite, and learn how to utilize them to organize code and enhance flexibility in TypeScript applications.
5. **Behavioral Patterns**: Dive into behavioral patterns like Observer, Strategy, Command, and Iterator, and grasp their implementation in TypeScript to improve code maintainability and extensibility.
6. **Implementing Patterns**: Practice implementing design patterns in TypeScript by building small-scale projects or solving coding challenges, focusing on code readability, scalability, and reusability.

## SOLID principles
- [SOLID principles](https://en.wikipedia.org/wiki/SOLID)
- [SOLID in React video](https://www.youtube.com/watch?v=MSq_DCRxOxw&ab_channel=CoderOne)

## Decorator pattern
- [Decorator pattern](https://en.wikipedia.org/wiki/Decorator_pattern)
- Code example:
```typescript
const log = (fn: Function) => {
    return (...args: any[]) => {
        console.log(`Arguments: ${args}`);
        const result = fn(...args);
        console.log(`Result: ${result}`);
        return result;
    };
};

const add = (a: number, b: number) => a + b;
const logAdd = log(add);
logAdd(1, 2);
```
## Factory pattern
- [Factory pattern](https://en.wikipedia.org/wiki/Factory_method_pattern)
- Code example:
```typescript
const car = (model: string) => {
    return {
        model,
        make: 'Tesla',
    };
};

const myCar = car('Model 3');
console.log(myCar);
```

## Observer pattern
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

## Demo 
- Take a look at the authenticate decorator in the Math App.
