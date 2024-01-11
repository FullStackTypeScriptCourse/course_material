# Exercise 1 - Callbacks, lambda and ES6
## Do the 3 class exercises:
- [Ex 1](RECAP_CALLBACKS.md#class-exercise-1)
- [Ex 2](RECAP_CALLBACKS.md#class-exercise-2)
- [Ex 3](RECAP_ES6.md#class-exercise-3---es6)

## Work with city data
```js
const cities = [
    {
    "name": "New York",
    "latitude": 40.6943,
    "longitude": -73.9249,
    "country": "US",
    "population": 18713220,
    "is_capital": false
  },
  {
    "name": "Boston",
    "latitude": 42.3188,
    "longitude": -71.0846,
    "country": "US",
    "population": 4688346,
    "is_capital": false
  },
  {
    "name": "Philadelphia",
    "latitude": 40.0077,
    "longitude": -75.1339,
    "country": "US",
    "population": 5649300,
    "is_capital": false
  },
  {
    "name": "Baltimore",
    "latitude": 39.3051,
    "longitude": -76.6144,
    "country": "US",
    "population": 2106068,
    "is_capital": false
  },
  {
    "name": "Washington",
    "latitude": 38.9047,
    "longitude": -77.0163,
    "country": "US",
    "population": 5379184,
    "is_capital": true
  }
]
```
Based on above data, do the following:

### City Operations with ES6 Features

1. **Class Creation:** Create a class named `City` that encompasses the attributes mentioned in the provided city data.

2. **Object Initialization:** Initialize objects for each city using the `City` class and the data provided above.

3. **Operations:**

    a. **City Information:** Implement a method in the `City` class to display city information using template literals.

    b. **Population Comparison:** Create a function that takes two city objects and compares their populations, displaying the city with the larger population using template literals.

4. **Instructions:**

    - Use the spread operator while initializing the city objects.
    - Implement destructuring for city data access within the class.
    - Test the methods by creating city objects and calling the methods.

Here's an example structure for the exercise:

```javascript
// City class definition
class City {
  constructor({ name, latitude, longitude, country, population, is_capital }) {
    // Your code here: Use destructuring to initialize the city properties
  }

  cityInformation() {
    // Your code here: Display city information using template literals
  }
}

// Function to compare populations
function comparePopulation(city1, city2) {
  // Your code here: Compare populations and display the city with the larger population
}

// City data
const citiesData = [
  {
    "name": "New York",
    "latitude": 40.6943,
    "longitude": -73.9249,
    "country": "US",
    "population": 18713220,
    "is_capital": false
  },
  // ... (Other city data)
];

// Create city objects using the City class and display information
const cities = citiesData.map(city => new City({ ...city }));
cities.forEach(city => {
  city.cityInformation();
});

// Test the population comparison function
comparePopulation(cities[0], cities[1]); // Compare any two cities' populations
```

Using this structure, you can implement the `City` class, populate city objects from the provided city data, and test the functionality of the methods.

Your task is to complete the `City` class by properly initializing the properties, defining the `cityInformation` method to display city details, and implementing the `comparePopulation` function to compare populations and display the city with the larger population using template literals. 