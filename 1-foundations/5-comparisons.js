// Equality is ==
1 == 1; // -> true
2 == 1; // -> false
"Hello" == "Hello"; // -> true

// Inequality is !=
1 != 1; // -> false
2 != 1; // -> true

// Objects are compared by reference, not by value
[1, 2, 3] == [1, 2, 3] // -> false!!!

// == and != allow type coersion
null == undefined;

// When mixing types, objects are first converted into strings
// If the types of the two sides still don't match both sides are converted to a number

// Compare strings to numbers: Good thing!
1 == "1";
0 == "";

// Edge Cases: Should be omitted
[] == "";
[1, 2, 3] == "1,2,3";
1 == true;
"1" == true;
"" == false;
0 == "";
false == [];
"[object Object]" == {};
42 == [42]

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