const number = Math.random();

if (number >= 0.5){
   console.log ("You won");
}
else {
   console.log ("You lost");
}

// The braces are optional, if there's only one statement in the if block

if (1 + 1 == 2) console.log ("It's true");

// Dispatching on a value

function dispatchWithIf(x) {
   if (x == "Value 1") {
      console.log ("Action 1");
   }
   else if (x == "Value 2") {
      console.log ("Action 2");
   }
   else if (x == "Value 3") {
      console.log ("Action 3");
   }
   else {
      console.log ("Default Action");
   }
}

// You may encounter this, but in general the if else syntax is clearer;
function dispatchWithSwitch(x) {
   switch (x) {
      case "Value 1" :
         console.log ("Action 1");
         break;
      case "Value 2" :
         console.log ("Action 2");
         break;
      case "Value 3" :
         console.log ("Action 3");
         break;
      default:
         console.log ("Default Action");
         break;
   }
}


// If you immediately return a value it looks better
function hello(language) {
   switch (language) {
      case "German" : return "Hallo";
      case "English" : return "Hello";
      case "French" : return "Salut";
      case "Spanish" : return "Hola";
      default: throw new Error ("No translation available to : " + language);
   }
}

// However for these kinds of cases a plain object is the better choice, as long as there are no side-effects invovled
const helloTranslationTable = {
   "German": "Hallo",
   "English": "Hello",
   "French": "Salut",
   "Spanish": "Hola"
}