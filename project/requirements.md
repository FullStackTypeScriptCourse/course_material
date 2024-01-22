# Fullstack Project Requirements

## Technologies Required

- TypeScript for both Frontend and Backend
- React
- MongoDB
- Mongoose
- Express
- GraphQL
- Apollo
- For Styling: TailwindCSS or MaterialUI (Not Bootstrap)
- For Prototyping: Figma
- For Project Management: Trello or any other Kanban Board

## Project Requirements

- Prototype
  - Must be created in Figma
  - Must be created before starting the project
  - Must be approved by the teacher before starting the project (try to aim higher than the minimum requirements)

- GraphQL 
  - Must be used for both Frontend and Backend
  - Must use mutations and queries to create and update models and relations between models
  - Must use Apollo Server
  - Must use Express

- React
  - Must be used for the Frontend
  - Must use Apollo Client
  - Must use React Router
  - React Hooks, you must use minimum 4 of the following:
    1. `useContext`
    2. `useReducer`
    3. `useCallback`
    4. `useMemo`
    5. `useRef`
    6. `useEffect`
    7. `useState`
    8. `useLayoutEffect`
    9. create your own custom hook or any other hook that is not listed above

- TypeScript
  - Must be used for both Frontend and Backend
  - Create your own types declarations for your Mongoose models `d.ts`
  - Minimize the use of `any` type to maximum 5 occurrences (best practice is to not use it at all)
  - Use `interface` and `type` to define your types
  - Use Type Narrowing to narrow down types
  - Use minimum 5 of the following 
    1. `Generics`
    2. `Union Types`
    3. `Intersection Types`
    4. `Enums`
    5. `Type Guards`
    6. `Type Casting`
    7. `Type Aliases`
    8. `Optional Chaining`

- Mongoose & MongoDB
  - Must be used to create a database and connect to it
  - Must use Mongoose to create models and schemas (at least 4 models)
  - Must use Mongoose to create relations between models (at least 2 relations)
    - One to One
    - One to Many
    - Many to Many
  - Use Mongoose queries to retrieve, update and delete data from the database
  - Use minimum aggregate function to retrieve specific data-set from the database
  - Use minimum 5 of the following

- Error Handling
  - Error handling must be implemented on both Frontend and Backend
  
- Authentication
    - Must use JWT for authentication. (For storage do not use localStorage, use cookies instead.)
    - Must use protected routes on the Frontend
    - Must use protected endpoints on the Backend
    - Passwords must be hashed and salted
    - There should be at least two roles (admin and user)

- Styling
    - Must use TailwindCSS or MaterialUI (Not Bootstrap)
    - Must use CSS Grid or Flexbox for layout
    - Must be responsive

- Deployment
  - Deployment for both frontend and backend is not required but recommended (ask for help)

## Project Presentation

- Must be presented in front of the class

## Project Documentation

- Must be written in Markdown
- It must contain the following:
  - Project Description
  - Project Prototype (Figma)
  - Project Code
  - Project Deployment Links
  - Project Repository Link
  - Project Kanban Board Link
  - Project Team Members
  - Routes Documentation