# Agenda for week 4: React with typescript
1. Setup project
    - vite
    - tsconfig.json
    - package.json (dependencies)
2. Handling state
    - useState with initial value inferring a type.
    - compile error: assign a different value with another type
    - assign an object and look at the type inferred (hover over the state variable)
    - assign an array of objects, where one element is missing a property, what is the inferred type now?
    - explicit assign a type to the state variable to cover both cases.
```typescript
interface IState = {
    people: {
        name: string;
        age: number;
        url: string;
        note?: string;
    }[]
}
const [people, setPeople] = useState<IState['people']>([])
```
    - use the state variable in the JSX and see how errors are reported.
3. Handling props
    - create a component with props that take the people state variable/array as input.

```typescript
interface IProps {
    people: IState['people']
}
const List: React.FC<IProps> = ({ people }) => {
    return (
        <div>
            {people.map(person => (
                <div key={person.name}>
                    <h2>{person.name}</h2>
                    <p>{person.age} years old</p>
                    <p>{person.url}</p>
                    <p>{person.note}</p>
                </div>
            ))}
        </div>
    )
}
```

    - use the component in the JSX and see how errors are reported when used wrongly.