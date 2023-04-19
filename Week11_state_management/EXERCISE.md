# Weekly exercise: State management with context and reducers
Based on this article:  
https://frontbackgeek.com/what-is-usereducer-hook-differences-between-usestate-and-usereducer-hooks/  
and this one:  
https://react.dev/learn/scaling-up-with-reducer-and-context  
- Build on your People app we used throughout the course.

## Part 1: Context
- Add a style theme for the app.
- Make sure it applies to all components in the app.
- In the permanent header of the app add a button that toggles between light and dark theme.

## Part 2: Reducers
- Add login functionality to the app (without any backend. Just a dummy login).
- The user object should be stored in the context.
- The user object should be available to all components in the app.
- The user object should be updated when the user logs in and out.
- The user object should have roles.
- Based on the user roles anywhere in the component tree you should be able to show/hide components of your own choice.