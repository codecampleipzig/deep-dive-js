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
for (element of array) {
   // do something with element, e.g.
   console.log (element);
}

// Functional style
array.forEach((element) => {
   // do something with element, e.g.
   console.log (element);
})
// Note: early exit via break; is not possible

// **********************************
// # Linear Search
// **********************************
// Looking for an element

const drinks = ['beer', 'wine', 'water', 'beer', 'wine', 'water']

drinks.indexOf('water')
drinks.indexOf('vodka')

// You can give a second argument to indexOf to tell it at what index to start
drinks.indexOf('beer', 2)
drinks.lastIndexOf('wine')

// includes just checks whether an element is part of the array or not
drinks.includes('beer');
drinks.includes('vodka');
// it also takes a second argument: an index to start the search from.
drinks.includes('beer', 4);

// find will look for an element, which satisfies a predicate
drinks.find(drink => drink.length > 4);
drinks.find(drink => drink.endsWith('eer'));

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

// filter
// Select all elements from an array, that fullfill a certain condition
cities.filter(city => city.population >= 1000000);

// map
// transform one array into another array, by applying a function to each element individually

cities.map(city => city.name);
cities.map(city => ({...city, country: "Germany"}));

// reduce
// King of array operations

function reduceImpl(array, loopBodyFunction, initialValue) {
   let result = initialValue;
   for (let i = 0; i < array.length; ++i) {
      const element = array[i];
      result = loopBodyFunction(result, element, i)
   }
   return result;
}

// Can be used to implement filter
cities.reduce((result, city) => {
   if (city.population >= 1000000) {
      result.push (city);
   }
   return result;
}, []);

// or map
cities.reduce((result, city) => {
   result.push (city.name);
   return result;
}, []);

// and many other things
cities.reduce((result, city) => {
   if (city.population > result.population) {
      return city;
   }
   else {
      return result;
   }
}, cities[0])

// **********************************
// # String Array
// **********************************

// Create a string from an array
const ingredients = ["chicken", "potatoes", "carrots", "peas", "onions"];
const shoppingList = ingredients.join("\n");