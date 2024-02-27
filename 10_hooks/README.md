# Custom hooks in React
## Objectives
- Know the built-in hooks in React (useState, useEffect, useContext, useReducer, useRef).
- Understand the benefit of using custom hooks.
- Learn how to create custom hooks.
- Use custom hooks to share logic between components.
- Understand the benefit of using signals as an alternative to react hooks.

## Agenda
- Introduction to the react hooks
- Introduction to react signals
- Introduction to custom hooks
- How to create custom hooks
- How to use custom hooks

## How to prepare before class
- Read the [documentation](https://react.dev/learn/reusing-logic-with-custom-hooks)
- See this video [tutorial](https://www.youtube.com/watch?v=TNhaISOUy6Q&ab_channel=Fireship)
- [Read about signals](https://preactjs.com/guide/v10/signals/)
- [Video about signals](https://www.youtube.com/watch?v=SO8lBVWF2Y8&ab_channel=WebDevSimplified)

## 1. Introduction

## 2. Preact Signals
- Benefits of signal: 
  - No need to use the setter function to update the state.
  - No need to use the dependency array in the effect function.
  - No need to use the context API to share state between components.
  - Can be used with preact or react.
  - Can be used outside of components.
  - Can be used anywhere in the component tree and the state is only updated in the affected components.
  - Can be used anywhere in the code, no need to put it as first statement in the component function.
- Install preact: `npm i @preact/signals-react`
- Import : `import {signal} from '@preact/signals-react'`
- Instead of useState, use signal: `const myVar = signal('initial value')`
- Look at the signal object in console: `console.log(myVar)` and see the `value` property.
- Assign new value: `myVar.value = 'new value'` instead of the useState setter function. And see how the component updates.
- add console.log to all components in the tree to see that only the affected component gets re-rendered.
- effect() instead of useEffect(): `effect(() => {console.log('effect being run: ', myVar.value)} )` and see how it only runs when the value changes. Dependency array is built in, so it runs when relevanted (utilized) state is updated.
- Using `computed` to create a derived state: `const myDerivedVar = computed(() => myVar.value + ' derived')` and see how it updates when the original state updates. We have now created a new signal based on the original signal.
- 
