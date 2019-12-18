# Expressing ProgramsSolution

## Memoize
Create a function [***memoize***](https://en.wikipedia.org/wiki/Memoization) that caches another function. 

Example:

    function expensiveOperation() {
      console.log('expensiveOperation function is called!');
      return 22;
    }
    
    const memoized = memoize(expensiveOperation); // <- memoize function
    console.log(memoized());
    console.log(memoized());

The console should show:

    expensiveOperation function is called!
    22
    22

## ConvertToRoman
Write a function that converts integers into their equivalent [roman numerals.](http://en.wikipedia.org/wiki/Roman_numerals)

### Example -

    convertIntToRoman(12)
    // XII

## Flatten
Write a function that takes an array and flattens all the nested arrays.

The default flattening level is 1.

### Example —

    flatten([1, 2, [3, 4, [5, 6]]]);
    // [1, 2, 3, 4, [5, 6]]

## Sum of Fibs
**Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.**

The first two numbers in the Fibonacci sequence are 1 and 1.

Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example,  `sumFibs(10)` should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.