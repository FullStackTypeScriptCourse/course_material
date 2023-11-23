# State management in react with context and reducers
- Solution to props drilling hell where we have to send state down the component tree through props and then back up the tree to update the state through many levels of components. Even through components that have no use for the state.
- State is stored in a central place and can be accessed by any component in the tree.
- State can be updated by any component in the tree.
- Use only when you need to share state between components, because it makes component reuse more difficult.

<img src="https://www.oreilly.com/api/v2/epubs/9781491996744/files/assets/wrct_0101.png" width=400>

## Objectives
- Understand the benefit of using context and reducers.
- Learn how to use context and reducers to manage state in react.
- What is the Context API?
- How to use Context and Provider

## Agenda
- Composition vs Inheritance
- Introduction to Context API
- Using Context and Provider
- Using Reducers

## How to prepare before class
- Read the [documentation](https://react.dev/reference/react/useContext)
- Read this [article](https://legacy.reactjs.org/docs/composition-vs-inheritance.html)
- See this video [tutorial (especially #18-21)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI).

## 1. Composition
Take a look at the following [article](https://legacy.reactjs.org/docs/composition-vs-inheritance.html)

### Class Exercise 30 min.
- Create a Component called Table that uses composition to get rows and headers and has props: headers and rows, where headers is a react component and rows is an array of components.
- Create Headers component that has props: headers, where headers is an array of strings.
- Create Row component that has props: row, where row is an array of strings.
- Use this data to create a table:
```js
people = [
  {id:1, name: "Helle", age: 20 },
  {id:2, name: "Ib", age: 30 },
  {id:3, name: "Bodil", age: 40 },
  {id:4, name: "Yasmin", age: 32 },
];
```

## 2. Context
Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

- Take a look at the following [article](https://react.dev/reference/react/useContext#examples-basic)
- Take a look at the https://github.com/FullStackTypeScriptCourse/graphql_simple.git projects context branch.

### Class Exercise 50 min.
- Use the https://github.com/FullStackTypeScriptCourse/graphql_simple.git project and add the theme context to be able to style the Content component with the theme context.
- Implement a (dummy) login component like the one from here: https://react.dev/reference/react/useContext#updating-an-object-via-context.

## 3. Reducers
- Take a look at the following [article](https://frontbackgeek.com/what-is-usereducer-hook-differences-between-usestate-and-usereducer-hooks/)
- Take a look at the following [article](https://react.dev/learn/scaling-up-with-reducer-and-context)


### Class Exercise 50 min.
- Build the todo list from above article into the graphql_simple project.
- Use the theme context to style the todo list.
