## Implementing a many-to-many relation between the models in Mongoose

In this exercise, you will implement a many-to-many relation between the models in Mongoose. 

Here's an example of how you could implement a many-to-many relationship between a "Person" and "Hobby" in Mongoose 
using a "join table" approach:

```JS
// Define the Person schema
const personSchema = new mongoose.Schema({
  name: String,
  hobbies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hobby'
  }]
});

// Define the Hobby schema
const hobbySchema = new mongoose.Schema({
  name: String,
  persons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person'
  }]
});

// Define the join table schema
const personHobbySchema = new mongoose.Schema({
  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person'
  },
  hobby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hobby'
  }
});

// Define the Person model
const Person = mongoose.model('Person', personSchema);

// Define the Hobby model
const Hobby = mongoose.model('Hobby', hobbySchema);

// Define the join table model
const PersonHobby = mongoose.model('PersonHobby', personHobbySchema);

```

In this example, the "Person" schema has an array of "Hobby" references, and the "Hobby" schema has an array of "Person" 
references. The "join table" is represented by the "personHobbySchema", which has references to both the "Person" and 
"Hobby" models.

To create a many-to-many relationship between a person and their hobbies, you would create a new "Person" document and 
add references to their hobbies in the "hobbies" array. Similarly, to create a many-to-many relationship between a hobby 
and the people who enjoy it, you would create a new "Hobby" document and add references to the people who enjoy it in 
the "persons" array.

Here's an example of how you could create a new "Person" document with references to their hobbies:

```JS
Person.create({
    name: 'John Doe',
    hobbies: [
        { name: 'Reading' },
        { name: 'Playing guitar' }
    ]
}, (err, person) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Person saved successfully!');
    }
});


```

In this example, we're creating a new "Person" document with the name "John Doe" and adding two new "Hobby" 
documents to their "hobbies" array. We then save the "Person" document to the database, which will also save the 
"Hobby" documents and create the appropriate references in the "PersonHobby" join table.
