let number = 0;
while (number <= 12) {
   console.log (number);
   number = number + 2;
}

while (true) {
   console.log ("This could go on forever");
   if (Math.random() < 0.01) {
      break;
   }
}

function flipCoin() {
   return Math.random() < 0.5 ? "Heads" : "Tails";
}

// do-while loops are perfect for retrys
let yourName;
do {
   yourName = prompt ("Who are you?");
} while (!yourName);

console.log (yourName);

// for loops are syntactic sugar
for (let number = 0; number <= 12; number += 2) {
   console.log (number);
}

for (let number = 0; number <= 12; number++) {
   if (flipCoin() == "Heads") {
      continue;
   }
   console.log (number)
}

function power(base, exponent) {
   let result = 1;
   for (let count = 0; count < exponent; count++) {
      result *= base;
   }
   return result;
}