// while loop
let number = 0;
while (number <= 12) {
   console.log (number);
   number = number + 2;
}

// Infinite loop, with a break
while (true) {
   console.log ("This could go on forever");
   if (Math.random() < 0.01) {
      break;
   }
}

// do-while loops are perfect for retrys
let yourName;
do {
   yourName = prompt ("Who are you?");
} while (!yourName);

console.log (yourName);

// as while loop

let yourName;

yourName = prompt("Who are you?");
do {
   yourName = prompt("Who are you?");
} while (!yourName)
console.log (yourName);


// for loops are syntactic sugar
for (let number = 0; number <= 12; number += 2) {
   console.log (number);
}

// You can jump to the next iteration using a continue statement
for (let number = 0; number <= 100; number++) {
   if (flipCoin() == "Heads") {
      continue;
   }
   console.log (number)
}

// Another example
function power(base, exponent) {
   let result = 1;
   for (let count = 0; count < exponent; count++) {
      result *= base;
   }
   return result;
}