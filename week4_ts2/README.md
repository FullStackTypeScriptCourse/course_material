# Week 4: Typescript 2 setup react project

## Objectives
- Understand how to setup a react project with typescript using vite
- Understand how to run a react project with typescript
- Get a bit of routine working with the different react ojbect types
- Understand how to use typescript with react hooks
- Understand how to use typescript with react state as props

## How to prepare before class

## Class Exercise 1
1. Start a new react project with typescript using vite: `npm init vite@latest my_react_ts_app -- --template react-ts`
2. Run the project: `npm run dev`
3. Open the project in your editor and open the `App.tsx` file.
4. Change the text in the `App.tsx` file to something else.
5. Save the file and see the changes in the browser.
6. Open the `App.tsx` file again and change the to render a Person component, that can show details about a person based on the props that you pass to it. Let a person have the following properties:
  - name: string
  - age: number
  - email: string

## Class Exercise 2
1. Find your old *lifting state up* code like e.g. the [temperature converter app](https://github.com/HartmannDemoCode/converter_demo2023.git)
2. Create a new react typescript project with vite
3. Copy the old code into the new project and make sure it works as js
4. Convert the code to typescript using [these 7 steps](https://www.sitepoint.com/how-to-migrate-a-react-app-to-typescript/)
5. Make sure the code works as typescript


## Topic 2: 

### Getting started
`npm init vite@latest my_react_ts_app -- --template react-ts`

### Write props for a component
- To write the component props, you need to specify what properties you are accepting on the component, the type, and if it is required or not using the `?` operator.

```typescript
type Person = {
  name: string
  age?: number
}

export default function PersonDisplay({ name, age }: Person) {
  // component code here.
}
```
#### Benefits of using types on props:
- Actual validation of the prop type from the consumer's side.
  - Especially useful with third-party components.
  - No more guessing what a component needs.
  - No more opening a component's source code to check what it does with the data.
- Auto-completion and documentation

#### React return types
- React components can return a ReactElement, a string, or null.
- React.ReactElement, React.ReactNode and JSX.Element are all the same type.
- React.ReactNode is the most generic type that can be returned from a component.
- But it is not recommended to return a string from a component, because it is not a valid ReactElement and it is generally best to just let TypeScript automatically infer the return type.

#### React specific types
In react there are a lot of pre-build types that you can use to define your components like:
```typescript   
type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  // ...
}
```
The above code shows how send a component as a prop to another component in react.
- 

#### Creating type with template literals
- You can create a type with template literals like this:
```typescript
type VPosition = 'top' | 'bottom'
type HPositon = 'left' | 'right'

export type PositionValues = `${VPosition}-${HPositon}`
```
- The above code creates a type that can only be one of the following values: `top-left`, `top-right`, `bottom-left`, `bottom-right`.

##### `exclude` and `extract` type`:
- You can use the `exclude` and `extract` type to create a type that excludes or extracts a type from another type.
```typescript
type VPosition = 'top' | 'bottom'
type HPositon = 'left' | 'right'

export type PositionValues = `${VPosition}-${HPositon}`
export type ExcludePositionValues = Exclude<PositionValues, 'top-left'>
export type ExtractPositionValues = Extract<PositionValues, 'top-left'>
```
- The last 3 lines of code creates a type that excludes `top-left` from `PositionValues` so that ExcludePositionValues can have 3 possible values and a type that extracts `top-left` from `PositionValues` so that ExtractPositionValues can only have the value `top-left`.

### Hooks
- `useState()` Typing useState will often not require any typing from os, because TypeScript will try to infer the type. 
  - In other scenarios, for example when the initial value is different from future values, you need to specify it directly.
- We never hav to type state setter methods since they are automatically typed as React.Dispatch<React.SetStateAction<number>> with number being replaced by the inferred/specified type.

```typescript
export default function myFunc() {
  // 3 different ways to type useState
  const [personList, setPersonList] = useState<Person[] | null>(null)   // using a Person type or null
  const [personList, setPersonList] = useState<Person[]>([])            // using a Person type or an empty array
  const [person, setPerson] = useState<Person>({} as Person)            // type casting an empty object to the Person type.
}
```

### State as props
One of the more cumbersome parts of React is passing state around. In React, you can pass state as props to other components. This is a bit cumbersome, because you have to pass the state and the setter method for that state to the component, and specify the type of the state.
```typescript
type PersonProps = {
  person: Person,
  setPerson: React.Dispatch<React.SetStateAction<Person>> // if you dont know the type vs code will show you the type if you hover over it.
}

const PersonComponent = ({person, setPerson}: PersonProps) => {
  // ...
}
```
- To make this a bit easier, you can create a custom hook that returns the state and the setter method for that state.
```typescript
export const usePerson = () => {
  const [person, setPerson] = useState<Person>({} as Person)
  return { person, setPerson }
}
```
- Now you can use the custom hook in your component like this:
```typescript
import { usePerson } from '../hooks/usePerson'
const PersonComponent = () => {
  const { person, setPerson } = usePerson()
  // ...
}
```

### useReducer
- `useReducer` is a hook that is used for state management. It is similar to `useState`, but it is more flexible and allows you to manage more complex state.
- It is similar to useState, but it is more flexible and allows you to manage more complex state.
- `useReducer` takes a reducer function and an initial state as arguments.
- The reducer function takes the current state and an action as arguments and returns the new state.
- The action is an object that has a type property and optionally a payload property.
- The type property is a string that describes the action that is being performed.
- The payload property is an object that contains the data that is needed to perform the action.
- The reducer function is called every time an action is dispatched.
- The reducer function should be pure, meaning that it should not have any side effects.
- The reducer function should not mutate the state, but instead return a new state object.
- The reducer function **should be defined outside of the component**, so that it is not redefined every time the component is rendered.

```typescript
import React, { useReducer } from 'react';

interface State {
    count: number;
}

interface Action {
    type: 'increment' | 'decrement';
}

const initialState: State = {
    count: 0
};

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>
                Decrement
            </button>
        </>
    );
}

export default Counter;
```
- The above example shows a simple counter component that uses the useReducer hook to manage its state.
- The component has two buttons, one to increment the count and another to decrement it.
The component's state is defined by an State interface that has a single property count of type number. 
- Additionally, the component uses an Action interface that defines the possible actions that can be dispatched to the reducer. 
- The reducer function takes the state and action as arguments, and it uses a switch statement to determine what to do based on the action-type. 
- The useReducer hook takes the reducer function and the initialState as arguments, and it returns an array with the current state and a dispatch function that can be used to trigger an action.

### useReducer with typescript example 2
```typescript
import React, { useReducer } from 'react';

interface State {
    isAdult: boolean;
}

interface Action { // Specifying which actions the reducer will be able to handle with unions
    type: 'setAge' | 'setAdult';
    payload: number | boolean; // now with a payload
}

const initialState: State = {
    isAdult: false
};

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'setAge':
            return { isAdult: action.payload >= 18 };
        case 'setAdult':
            return { isAdult: action.payload };
        default:
            return state;
    }
};

function Person() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <p>Is adult: {state.isAdult ? "Yes" : "No"}</p>
            <button onClick={() => dispatch({ type: 'setAge', payload: 25 })}>
                Set age 25
            </button>
            <button onClick={() => dispatch({ type: 'setAge', payload: 15 })}>
                Set age 15
            </button>
            <button onClick={() => dispatch({ type: 'setAdult', payload: true })}>
                Set as Adult
            </button>
            <button onClick={() => dispatch({ type: 'setAdult', payload: false })}>
                Set as Not Adult
            </button>
        </>
    );
}

export default Person;
```

- The above example shows a simple component that uses the useReducer hook to manage the state of a person being an adult or not. 
- The component has four buttons, one to set the age of the person, another to set the person as adult, another to set the person as not adult. 
- The component's state is defined by an State interface that has a single property isAdult of type boolean. 
- Additionally, the component uses an Action interface that defines the possible actions that can be dispatched to the reducer. 
- The reducer function takes the state and action as arguments, and it uses a switch statement to determine what to do based on the action.type. 
- The useReducer hook takes the reducer function and the initialState as arguments, and it returns an array with the current state and a dispatch function that can be used to trigger an action.
- In this example the payload of the action can be number or boolean, depending on the action type, it will be used to set the age or adult status of the person, and the reducer will update the state accordingly.
- `state type` could instead be set with the `typeof`. Take the codeline from above: `const reducer = (state: State, action: Action) => {` could instead be written as: `const reducer = (state: typeof initialState, action: Action) => {` Then we would not need to define the `State` interface.
- If you want to pass something from useReducer as a prop, you will have to write the consumer props accordingly.
  - state will be the type you have defined in your initialState and/or a custom State type. 
  - dispatch will be React.Dispatch<Action> where Action is the custom type for actions.

### useContext
- Usually, in a React application, data is passed top-down (parent to child) via props. The reason third party state management libraries like Redux became so popular is due to the prop drilling problem of React.
  - Prop drilling consists of passing a prop to the nested child components, and as a result, children who do not need this prop, still end up getting it even though they might never use it.
- `useContext()` hook makes it easy to pass data throughout your app without manually passing props down the tree. It allows to create a global state and the required child components can consume it.
- `useContext()` can prove to be a simple alternative to other state management libraries if your data is **not complicated** and the application is **small**.

#### Very simple example:
```typescript
import React, { createContext, useContext } from 'react';

const CountContext = createContext(0);

function Counter() {
    const count = useContext(CountContext);

    return <p>Count: {count}</p>;
}

function App() {
    return (
        <CountContext.Provider value={5}>
            <Counter />
        </CountContext.Provider>
    );
}

export default App;
```
#### More realistic example:
```typescript
import React, { createContext, useContext } from 'react';

interface Person {
  name: string;
  age: number;
}

interface PersonContextProps {
  person: Person;
  setPerson: React.Dispatch<React.SetStateAction<Person>>;
}

const PersonContext = createContext<PersonContextProps>({
  person: { name: '', age: 0 },
  setPerson: () => {}
});

const PersonProvider: React.FC<{ person: Person }> = ({ person, children }) => {
  const [state, setState] = React.useState<Person>(person);
  return (
    <PersonContext.Provider value={{ person: state, setPerson: setState }}>
      {children}
    </PersonContext.Provider>
  );
};

const PersonConsumer = PersonContext.Consumer;

const PersonDisplay: React.FC = () => {
  const { person } = useContext(PersonContext);
  return <div>{person.name} is {person.age} years old</div>;
};

const App: React.FC = () => {
  return (
    <PersonProvider person={{ name: 'John', age: 30 }}>
      <PersonDisplay />
    </PersonProvider>
  );
};

export default App;
```
- In this example, the Person interface defines the shape of the person object that we want to use throughout our application. We then create a PersonContext using createContext and provide it with default values for the person and setPerson properties.
- The PersonProvider component is then used to wrap the components that need access to the person object. It uses the useState hook to keep track of the current person object and makes it available to its children via the PersonContext.Provider.
- The PersonConsumer component and useContext hook can be used to access the current person object and setPerson function in any component that is a child of the PersonProvider.
- In this example, the PersonDisplay component uses the useContext hook to access the current person object and display their name and age.

### useRef
- useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
- A common use case is to access a child imperatively:
```typescript
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
``` 
- Note that useRef() does not notify you when its content changes. Mutating the .current property does not cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.

#### DOM references
- One of the uses of useRef is to keep a reference to a DOM element.
```typescript
import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef<HTMLInputElement>(null); //If the DOM element is always present, we can set the initial value to null! and avoid the if check in line 8.

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export default TextInputWithFocusButton;
```
- In this example, we use the useRef hook to create a reference to the input element. We then use the ref attribute to pass the reference to the input element. This allows us to access the input element in the onButtonClick function and call the focus method on it.

#### mutable values 
The second use of useRef is when you want to keep mutable values between renders. For example, in cases where you need a unique variable for each instance of a component that survives between renders and does not trigger a re-render.
```typescript
import React, { useRef } from 'react';

function Counter() {
  const countRef = useRef(0);
  const increment = () => {
    countRef.current++; //This will not trigger a re-render but the value will persist between re-renders. It is now a React.MutableRefObject instead of RefObject
  };
  return <button onClick={increment}>Count: {countRef.current}</button>;
}

export default Counter;
```
- In this example, we use the useRef hook to create a reference to a variable that will be used to keep track of the current count. We then use the ref attribute to pass the reference to the button element. This allows us to access the count variable in the increment function and increment it even between renders.

### Forwarding Refs
- Ref forwarding is a technique for automatically passing a ref through a component to one of its children. This is typically not necessary for most components in the application. However, it can be useful for some kinds of components, especially in reusable component libraries.
- To pass the reference you will need to wrap your component with React.forwardRef. That will inject along with the regular props of the component the ref (which will be any HTML element wrapped in the React.Ref type).
- In the example below, `FancyButton` uses `React.forwardRef` to obtain the `ref` passed to it, and then forward it to the DOM `button` that it renders:
```typescript
import React from 'react';

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```
- Here is a step-by-step explanation of what happens in the above example:
  - We create a [React ref](https://reactjs.org/docs/refs-and-the-dom.html) by calling `React.createRef` and assign it to a `ref` variable.
  - We pass our `ref` down to `<FancyButton ref={ref}>` by specifying it as a JSX attribute.
  - React passes the `ref` to the `(props, ref) => ...` function inside `forwardRef` as a second argument.
  - We forward this `ref` argument down to `<button ref={ref}>` by specifying it as a JSX attribute.
  - When the ref is attached, `ref.current` will point to the `<button>` DOM node.

  ### Generics
  - Generics are a way of creating reusable components that can work with different types of data. They allow you to define a component once and use it many times with different types of data.
  - In the example below, we create a generic component called Box that can be used to display any type of data. We can then use the Box component to display a string, a number, or an array of strings.
  ```typescript
  import React from 'react';

  interface BoxProps<T> {
    value: T;
  }

  function Box<T>(props: BoxProps<T>) {
    return <div>{props.value}</div>;
  }

  export default function App() {
    return (
      <>
        <Box value="Hello" />
        <Box value={123} />
        <Box value={['a', 'b', 'c']} />
      </>
    );
  }
  ```
  - In this example, we create a generic component called Box that can be used to display any type of data. We can then use the Box component to display a string, a number, or an array of strings.

  ### Generic Types
  - Generic types are types that can be used with other types. For example, the Box component we created in the previous example can be used with any type of data. We can also create a generic type that can be used with any type of data.
  ```typescript
  import React from 'react';

  interface BoxProps<T> {
    value: T;
  }
  
  type Box<T> = React.FC<BoxProps<T>>;

  export default function App() {
    return (
      <>
        <Box value="Hello" />
        <Box value={123} />
        <Box value={['a', 'b', 'c']} />
      </>
    );
  }
  ```
  - In this example, we create a generic type called Box that can be used with any type of data. We can then use the Box type to display a string, a number, or an array of strings.

  ### Generic Interfaces
  - Generic interfaces are interfaces that can be used with other types. For example, the Box component we created in the previous example can be used with any type of data. We can also create a generic interface that can be used with any type of data.
  ```typescript
  import React from 'react';

  interface BoxProps<T> {
    value: T;
  }

  interface Box<T> extends React.FC<BoxProps<T>> {}

  export default function App() {
    return (
      <>
        <Box value="Hello" />
        <Box value={123} />
        <Box value={['a', 'b', 'c']} />
      </>
    );
  }
  ```
  - In this example, we create a generic interface called Box that can be used with any type of data. We can then use the Box interface to display a string, a number, or an array of strings.

  ### Another Example

```typescript
import React from 'react';

interface Props<T> {
  data: T;
}

const MyComponent = <T extends {}>(props: Props<T>) => {
  return <div>{JSON.stringify(props.data)}</div>;
}

export default MyComponent;
```
- And then use it like this:

```typescript
const data = { name: "John Doe", age: 30 };
<MyComponent<typeof data> data={data} />
```
- As we can see we need to define the type of T while calling the component.

### Yet another example which extends React.ElementType

```typescript
type TextOwnProps<T extends React.ElementType> = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'base' | 'primary' | 'secondary'
  as?: T | 'div'
}

type TextProps<T extends React.ElementType> = TextOwnProps<T> &
  React.ComponentPropsWithoutRef<T>

export default function Text<T extends React.ElementType = 'div'>({
  size = 'md',
  variant = 'base',
  children,
  as = 'div',
}: TextProps<T>) {
  // ...
}
```
- In this example, we create a generic type called Text that can be used with any type of data. We can then use the Text type to display a string, a number, or an array of strings.
- It has 3 optional props: size, variant and `as`. The `as` prop is the most interesting one. It is a generic type that extends React.ElementType. T extends from React.ElementType which is the most generic type for HTML elements. So we know that whatever is passed to the component is based on an HTML element rather than a manually typed union of all possible HTML elements. This means that it can be any valid React element type. It can be a string, a function, a class, etc. The default value is 'div'.
- The TextProps type is a combination of TextOwnProps and React.ComponentPropsWithoutRef. The React.ComponentPropsWithoutRef type is a generic type that returns the props of a component without the ref prop. This is useful because we don't want to allow the user to pass a ref to the Text component. We want to use the ref internally to the component.
- We can use the component like this:

```typescript
import Text from './Text';

const Example = () => {
  return (
    <div>
      <Text size="lg" variant="primary" as="p">This is a large primary text</Text>
      <Text as="h1">This is a heading text</Text>
      <Text size="sm" variant="secondary" as="span">This is a small secondary text</Text>
    </div>
  )
}
```
Or like this with a custom component:

```typescript
import Text from './Text';

const CustomComponent = () => {
  return <div>Custom component</div>
}

const Example = () => {
  return (
    <div>
      <Text size="lg" variant="primary" as={CustomComponent}>This is a large primary text</Text>
      <Text as="h1">This is a heading text</Text>
      <Text size="sm" variant="secondary" as="span">This is a small secondary text</Text>
    </div>
  )
}
```



