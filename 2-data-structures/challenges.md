# Questions

1. What are the complexities of these array operations

```
- Constant Time: O(1)
- Logarithmic: O(log(n))
- Linear: O(n)
- Quadratic: O(n^2)
- Exponential: O(2^n)

array[i];
// O(i) -> Constant Time

array.push(x)
// O(x) -> Constant Time

array.shift(x)
// O(n) -> Linear

array.map(x => 2 * x)
// O(n) -> Linear

array.includes(x)
// O(n) -> Linear

array.sort()
// O(log(n)) -> Logarithmic
```
