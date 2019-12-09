// **********************************
// # Barebones iteration
// **********************************

const array = ["A", "B", "C", "D", "E", "F"]

// Traditional for loop
for (let i = 0; i < array.length; ++i) {
   const element = array[i];
   // do something with element, e.g.
   console.log (element);
}

// New style: for of
for (const element of array) {
   // do something with element, e.g.
   console.log (element);
}

// Functional style
array.forEach((element) => {
   // do something with element, e.g.
   console.log (element);
})

// const myConsoleLog = element => console.log (element);

// myConsoleLog ("Hello World");

array.forEach(console.log);

// Note: early exit via break; is not possible

// **********************************
// # Linear Search
// **********************************
// Looking for an element

const drinks = ['beer', 'wine', 'water', 'beer', 'wine', 'water']

drinks.indexOf('water') // -> 2
drinks.indexOf('vodka') // -> -1


// You can give a second argument to indexOf to tell it at what index to start
drinks.indexOf('beer', 2)
drinks.lastIndexOf('wine')

// Equivalent implementation:
function indexOf (array, element, startIndex = 0) {
   for (let i = startIndex; i < array.length; ++i) {
      if (array[i] === element) {
         return i;
      }
   }
   return -1;
}
// includes just checks whether an element is part of the array or not
drinks.includes('beer'); // true
drinks.includes('vodka'); // false
// it also takes a second argument: an index to start the search from.
drinks.includes('beer', 4); // false

const drinks = ['beer', 'wine', 'water', 'beer', 'wine', 'water']

// find will look for an element, which satisfies a predicate
drinks.find(drink => drink.length > 4); // water
drinks.find(drink => drink.endsWith('eer')); // beer

// **********************************
// # Predicates
// **********************************
// If you want to check if all or some elements match a certain condition.

const words = ["Rectangle", "America", "Megaphone", "Monday", "Butthole"]

words.every(word => typeof word == "string");
words.every(word => word.length > 5);

words.some(word => word.startsWith("Mega"));
words.some(word => word.charAt(1) == 'f');

// **********************************
// # Data Transformations
// **********************************

const cities = [
{name: "Leipzig", population: 600000},
{name: "Dresden", population: 550000},
{name: "Berlin", population: 3750000},
{name: "Hamburg", population: 1850000},
{name: "Köln", population: 1080000}];

['Leipzig', "Dresden", "Berlin", "Hamburg", "Köln"]

// filter
// Select all elements from an array, that fullfill a certain condition
const bigCities = cities.filter(city => city.population >= 1000000);
// [{name: "Berlin", population: 3750000},
// {name: "Hamburg", population: 1850000},
// {name: "Köln", population: 1080000}]]

// map

// transform one array into another array, by applying a function to each element individually

cities.map(city => city.name);
cities.map(city => ({...city, country: "Germany"}));

// [{name: "Leipzig", population: 600000, country: "Germany"},
// {name: "Dresden", population: 550000, country: "Germany"}, ...]

// **********************************
// # String Array
// **********************************

// Create a string from an array
const ingredients = ["chicken", "potatoes", "carrots", "peas", "onions"];
const shoppingList = ingredients.join("\n");
// "chicken\npotatoes\ncarrots\n..."