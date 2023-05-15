// Instructions
// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

// My Solution
// The provided solution is incorrect because it is returning the elements after the first n elements,
// instead of the first n elements themselves. Here's a corrected implementation:

function first(arr, n = 1) {
  return arr.slice(0, n);
}

// This function takes an array arr and an optional parameter n which defaults to 1.
// It returns a new array containing the first n elements of arr. If n is 0, it returns an empty array [].
