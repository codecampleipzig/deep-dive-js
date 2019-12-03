# Questions

1. Most operators could also be implemented as functions, however with some exceptions. What are those and why?

   Answer
   Comparison operators are the lowest level processing is based on.

2. Write the number 123 as a hexdecimal and as binary number literal
```
123
0x7B
0b1111011
```

3. What is the difference between the functions parseFloat and Number? Which one do you prefer to convert a value into a number?

   Answer:
   parseFloat() because it returns NaN for strings that Number() would interpret as boolean values.

4. Make all of these expressions evaluate to true, by adding a ! to the beginning if necessary
```
!Boolean(false)
Boolean([])
!Boolean(null)
Boolean({})
!Boolean(undefined)
!Boolean("")
Boolean(" ")
!Boolean(0)
!Boolean(NaN)
Boolean(Infinity)
```

5. What's the difference between == and === ?

   Answer
   == compares the values regardless of their type
   === compares the type first and evaluates to false if it

6. Fill in the blanks to make the statement true

```
"Hello World".substring(3) == "lo World"
"Hello World".substring(0, 4) == "Hell"
"Hello World".substring(3, 6) == "lo "
```

7. What do these expressions evaluate to

```
Number(String([])) // -> 0
Boolean(String(0)) // -> true
String(Boolean("")) // -> "false"
```

8. Make all statements true, by switching == to != and === to !== if necessary.

```
null == undefined;
null !== undefined;
[] != [];
[] !== [];
[] == "";
"A" == "A";
"0" == 0;
NaN != NaN;
true != "true";
```

9. What's the difference between var and let? What's the difference between let and const?

   Answer
   var can be defined multiple times
   let can be updated but not be redefined
   const can't be updated

10. Rewrite this while loops as a for loop

```
for (let i = 1; i <= 100; i *= 2) {
   console.log (i)
}
```
