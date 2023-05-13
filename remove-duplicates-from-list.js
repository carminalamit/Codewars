// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

// My Solution
function distinct(a) {
  return [...new Set(a)];
}

// This implementation uses the spread operator (...) to convert the Set object to an array.
// It first creates a new Set object from the input array a, which automatically removes duplicates.
// Then, it uses the spread operator to convert the set to an array and returns the resulting array,
// which contains only the distinct elements of the input array in the order in which they appeared.
