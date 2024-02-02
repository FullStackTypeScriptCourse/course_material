### Express Handling Forms Part 1

1. Create a new or use the existing project from the previous exercise.
2. Create a simple HTML form with the following fields: (shown below)
   - First Name
   - Last Name
   - Email
   - Password
   - Confirm Password
3. Create a new POST endpoint `/users` that console.log the data from the form.
4. We are going to test the form in the next exercise called `Express Serving Static Files`.


Hints:
- use the `let data = req.query;` to get the data from the form.
- use the `bodyParser.urlencoded({extended: true})` middleware to be able to parse the form data.


### Express Serving Static Files Part 2

1. Create a new or use the existing project from the previous exercise.
2. Create a new folder called `public` in the root of the project.
3. Create a new file called `index.html` inside the `public` folder.
4. Add the following content to the `index.html` file:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8" />
   <title>Form</title>
</head>
<body>
<form action="/users" method="POST">
   <label for="firstName">First Name</label>
   <input type="text" name="firstName" id="firstName" />
   <br />
   <label for="lastName">Last Name</label>
   <input type="text" name="lastName" id="lastName" />
   <br />
   <label for="email">Email</label>
   <input type="email" name="email" id="email" />
   <br />
   <label for="password">Password</label>
   <input type="password" name="password" id="password" />
   <br />
   <label for="confirmPassword">Confirm Password</label>
   <input type="password" name="confirmPassword" id="confirmPassword" />
   <br />
   <button type="submit">Submit</button>
</form>
</body>
</html>
```

5. Create a new GET endpoint `/` that serves the `index.html` file.
6. 
