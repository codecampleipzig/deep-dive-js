// Equality is ==
1 == 1; // -> true
2 == 1; // -> false
"Hello" == "Hello"; // -> true
NaN == NaN; // false!!!!

// Inequality is !=
1 != 1; // -> false
2 != 1; // -> true

// Objects are compared by reference, not by value
[1, 2, 3] == [1, 2, 3] // -> false!!!

// UNDER THE HOOD:
0xAB3fAA00 == 0xBA541200

// == and != allow type coersion
null == undefined; // -> true

// When mixing types, objects are first converted into strings
// If the types of the two sides still don't match both sides are converted to a number

// Compare strings to numbers: Good thing!
1 == "1";
0 == "";

// Rule 1: if types don't match: Objects are converted to Strings first
// Rule 2: if types still don't match: Primitives are converted to Numbers
// Edge Cases: Should be omitted
[] == ""; // -> true : "" == ""
[1, 2, 3] == "1,2,3"; // -> true : "1,2,3" == "1,2,3"
[] == []; // -> false : 0x2345678 == 0xABC5678
1 == true; // -> true : 1  == 1
"1" == true; // true : 1 == 1
"" == false; // true : 0 == 0
0 == ""; // true : 0 == 0
false == []; // false == "", 0 == 0 -> true
"[object Object]" == {}; // true : "[object Object]" == "[object Object]"
42 == [42]; // 42 == "42", 42 == 42 -> true 

// === and !== don't allow for type coercion. If types don't match, values are not equal

null !== undefined;
1 !== "1";

// More comparisons
1 < 10; // -> true
1 > 10; // -> false
2 <= 2; // -> true
2 >= 2; // -> true

// Strings are compared via the code points. This results in weird behavior:
"A" < "B"; // -> true
"a" < "B"; // -> false

// How can we solve this?