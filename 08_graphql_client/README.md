# Frontend react with GraphQL
## Objectives
- Understand the benefit of graphql over traditional REST APIs
- Learn how to consume graphql endpoint from the frontend code.
- Use graphql to query data in the client application.
- Use graphql to mutate data from the client application. 

## Agenda
- Introduction to GraphQL and Apollo Client
- Apollo Client Hooks

## How to prepare before class
- Watch the following video before class: https://www.youtube.com/watch?v=opeltYS_D7k&list=PLASldBPN_pkDUuOzyPotAkKmvwqyDoA0g&index=8&ab_channel=willjw3
- Take a look at the documentation: https://www.apollographql.com/docs/react/get-started and https://www.apollographql.com/docs/react/data/queries plus https://www.apollographql.com/docs/react/data/mutations/

## Demo
**[Source](https://www.apollographql.com/docs/react/get-started)**

- Create a new vite project with `npm create vite@latest <project name>` and select the react and typescript options.
- Install the following dependencies: `npm i @apollo/client graphql`.
- In main.tsx, add the following code: `import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';`
- And also: 
```ts
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});
```
- Finally wrap the App component with the ApolloProvider and pass the client as a prop:
```tsx
<ApolloProvider client={client}>
  <App/>
</ApolloProvider>
```
- In App.tsx, add the following code: `import { useQuery, gql } from '@apollo/client';`
- And also:
```tsx
const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
    }
  }
`;
```
- And finally:
```tsx
function App() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      {data.books.map((book: any) => (
        <div key={book.id}>{book.title}</div>
      ))}
    </div>
  );
}
```
- Now run the backend server and the frontend application and see the list of books being displayed in the browser.
- Add a new file called `mutations.ts` and add the following code:
```ts
import { gql } from '@apollo/client';
export const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!, $url: String!, $category: String!) {
    createBook(title: $title, author: $author, url: $url, category: $category) {
      id
      title
    }
  }
`;
```
- In App.tsx, add the following code: `import { useMutation } from '@apollo/client';`
- And also:
```tsx
const [addBook] = useMutation(ADD_BOOK);
```
- And finally:
```tsx
function App() {
    const [book, setBook] = useState({title: '', author: '', url: '', category: ''});
    const [addBook] = useMutation(ADD_BOOK);
    const handleAddBook = () => {
        addBook({ variables: book });
    }
    return (
        <div>
            <input type="text" value={book.title} onChange={(e) => setBook({...book, title: e.target.value})}/>
            <input type="text" value={book.author} onChange={(e) => setBook({...book, author: e.target.value})}/>
            <input type="text" value={book.url} onChange={(e) => setBook({...book, url: e.target.value})}/>
            <input type="text" value={book.category} onChange={(e) => setBook({...book, category: e.target.value})}/>
            <button onClick={handleAddBook}>Add Book</button>
        </div>
    );
}

