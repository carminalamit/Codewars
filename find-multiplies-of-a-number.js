// In this simple exercise, you will build a program that takes a value, integer ,
// and returns a list of its multiples up to another value, limit .
// If limit is a multiple of integer, it should be included as well.
// There will only ever be positive integers passed into the function, not consisting of 0.
// The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6),
// the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// My Solution
function findMultiples(integer, limit) {
  return Array.from(
    { length: Math.floor(limit / integer) },
    (_, i) => (i + 1) * integer
  );
}

// An array of the specified length is created using the Array.from() method.
// The length of the array is calculated as the result of dividing limit by integer and then rounding down using Math.floor().
// The second argument to Array.from() is a mapping function that maps each element of the new array to a multiple of integer.
// The mapping function takes two arguments: the current value (which is not used in this case, hence the _ placeholder)
// and the current index i. The mapping function multiplies the current index i by integer and adds integer to get the next multiple of integer.
// The resulting array of multiples is returned.
