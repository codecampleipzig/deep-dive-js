const array = [
   {name: "Leipzig", population: 600000},
   {name: "Dresden", population: 550000},
   {name: "Berlin", population: 3750000},
   {name: "Hamburg", population: 1850000},
   {name: "Köln", population: 1080000}];

function populationSum(array) {
   let result = 0;
   for (let i = 0; i < array.length; ++i) {
      const element = array[i];
      result = result + element.population;
   }
   return result;
}

function cityList(array) {
   let result = "";
   for (let i = 0; i < array.length; ++i) {
      const element = array[i];
      result = result + `${i + 1}. ${element.name}\n`
   }
   return result;
}

function bigCities(array) {
   let result = [];
   for (let i = 0; i < array.length; ++i) {
      const element = array[i];
      result = element.population >= 1e6 
         ? [...result, element]
         : result;
   }
   return result;
}


function cityListLoopBody (result, element, i) {
   return result + `${i + 1} ${element.name}\n`;
}

function bigCityLoopBody (result, element) {
   return element.population >= 1e6
   ? [...result, element]
   : [result];
}

function populationSumLoopBody (result, element) {
   return result + element.population;
}

function reduce(array, loopBody, initialValue) {
   let result = initialValue;
   for (let i = 0; i < array.length; ++i) {
      const element = array[i];
      result = loopBody(result, element, i);
   }
   return result;
}

const popSum = reduce(array, populationSumLoopBody, 0);
const bigCities = reduce (array, bigCityLoopBody, []);
const cityList = reduce(array, cityListLoopBody, "");

function biggestCity(array) {
   return reduce(array, (result, element, i) => {
      if (result.population > element.population) {
         return result;
      }
      else {
         return element;
      }
   })
}

array.reduce((result, city) => {
   return [...result, city.name];
}, []);

array.map(city => city.name);
