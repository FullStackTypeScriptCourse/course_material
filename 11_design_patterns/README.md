# Design patterns with Typescript
Design patterns in javascript are a way to solve common problems in software development. They are not a solution to a problem, but a template for solving a problem. They are a way to solve a problem in a way that is easy to understand and maintain. Take a look at the following design article: https://www.freecodecamp.org/news/javascript-design-patterns-explained

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

