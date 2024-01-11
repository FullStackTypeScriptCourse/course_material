### Generic types in TypeScript
[Guide](https://www.digitalocean.com/community/tutorials/how-to-use-generics-in-typescript)
- When to use generic types in typescript:
    - Generics can appear in functions, types, classes, and interfaces
    - When using functions, and you have some code that is not easily typed for all use cases.
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