# Class exercises for Design Patterns
## Decorator pattern
1. Create a decorator function that can wrap a function and log the arguments and result of the function.
2. Change the decorator function to wrap a graphql resolver function and log the arguments and result of the function.

## SOLID
Take this code example: 
```typescript
import React, { useState, useEffect } from 'react';

const UserList: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulating data fetching from an API
    fetch('https://api.example.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

```
1. The above component violates the Single Responsibility Principle. Refactor the component to follow the Single Responsibility Principle. Why?
2. Create a React component that violates the Open/Closed Principle. Refactor the component to follow the Open/Closed Principle.
3. Create a React component that violates the Liskov Substitution Principle. Refactor the component to follow the Liskov Substitution Principle.
4. Create a React component that violates the Interface Segregation Principle. Refactor the component to follow the Interface Segregation Principle.
4. Create a React component that violates the Dependency Inversion Principle. Refactor the component to follow the Dependency Inversion Principle.