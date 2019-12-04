# Quick Reference: Data Structures

## Complexity

The complexity of an operation is an estimation of the number of steps needed for its execution.
Complexity is described in relation to the size of the input data set, denoted by the letter n.
A common system for notating complexities, is called the big O notation:

Example: Find a book in a bookshelf

- Constant Time: O(1)
   - Pick a random book.
   - .push to an array with capacity left
- Linear: O(n)
   - Check the books one by one.
   - .push as long as no capacity is initialized, or whenever the capacity needs to be doubled (expensive)- .shift
- Logarithmic: O(log(n)) 
   Check the sorted bookshelf. Check one in the middle, decide to go left or right, repeat.
   If n = 128, second step only 64 books are left. So 7 steps needed to find your book.
- Quadratic: O(n^2)
   Naive sorting algorithm
- Exponential: O(2^n)

Complexity of sorting: O(log(n) * n)
   Nothing is faster than that. Read More!

## Data Structures

The two most common kinds of data structures are _sequential_ and _associative_.
In Javascript they are implemented as Arrays (sequential) and Objects (associative).

Many more data structures have been invented and are tailored for very specific use cases.
They differ in terms of their complexity and memory consumption regarding operations like search, traversal, insertion etc...