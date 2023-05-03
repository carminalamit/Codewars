// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

// My Solution
function multipleOfIndex(array) {
  return array.filter((num, i) => num % i === 0 && i !== 0);
}

// This implementation uses the filter method to create a new array that contains only the elements that are multiples of their own index.
// It passes a callback function to filter that takes two arguments: num, which is the current element of the array being processed, and i, which is the index of the current element.

// The callback function checks if the current element is a multiple of its own index (num % i === 0) and also checks that the index is not zero (i !== 0). The latter check is necessary to avoid a divide-by-zero error.

// The filter method then returns a new array that contains only the elements that passed the test in the callback function.

// You can test this implementation with the same example as before:
