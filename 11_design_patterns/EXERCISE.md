# Exercise
## Assignment: Building a Task Management Application with Design Patterns

**Objective:**  
Build a task management application using TypeScript and React. Apply appropriate design patterns to ensure clean, scalable, and maintainable code.

**Requirements:**

1. **Overall purpose:**
   - Implement a react view (user interface) where users can view, add, update, and delete tasks.
   - Display a list of tasks with options to mark tasks as completed, edit task details, and delete tasks.
   - Include input fields for adding new tasks and editing existing tasks.

2. **Functionality:**
   - Implement functionality to add a new task with a title, description, and due date.
   - Allow users to edit task details including title, description, and due date.
   - Provide options to mark tasks as completed or incomplete.
   - Allow users to delete tasks.
   - Implement sorting and filtering options for tasks, such as sorting by due date or filtering by completed status.

3. **TypeScript:**
   - Utilize TypeScript throughout the project to enforce strong typing and improve code quality.
   - Define interfaces or types for task objects and use them consistently throughout the application.
   - Use TypeScript features such as interfaces, types, enums, and generics where appropriate.

4. **Design Patterns:**
   - **Singleton Pattern:**
     - Use a singleton pattern for managing global application state, such as the list of tasks or user authentication status.
     - *Hint: In javascript, you can use a module to create a singleton instance like this:*
```typescript
const taskManager = (() => {
    let tasks: Task[] = [];
    return {
        getTasks: () => tasks,
        // ... other methods
    };
})();
```

   - **Factory Pattern:**
     - Implement a factory pattern for creating instances of task objects.
     - *Hint: In javascript you can use a factory function to create task objects like this:*
```typescript
const createTask = (title: string, description: string, dueDate: Date) => {
    return {
        title,
        description,
        dueDate,
        completed: false,
    };
};
```
   - **Observer Pattern:**
     - Apply an observer pattern for handling event notifications, such as notifying components when tasks are updated or deleted. The TaskManager can be the subject and the components can be the observers.
     - *Hint: 
```typescript
class TaskManager {
    private observers: TaskObserver[] = [];
    // ... other methods
    addObserver(observer: TaskObserver) {
        this.observers.push(observer);
    }
    removeObserver(observer: TaskObserver) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notifyObservers(task: Task, action: string) {
        this.observers.forEach(observer => observer.update(task, action));
    }
}
```
   - **Strategy Pattern:**
     - Optionally use a strategy pattern for implementing sorting and filtering algorithms for tasks.
   - **Container/Presentation (or Smart/Dumb) Pattern:**
     - Separate logic from presentation components by following the container/presentation pattern.

**Additional Considerations:**
- Focus on code quality, readability, and maintainability.
- Break down the project into manageable tasks and allocate time for each task accordingly.
- This assignment is designed to be completed within 8 hours, but you may adjust the scope or timeline as needed based on your preferences and constraints.