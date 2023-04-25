// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// My Solution

function invert(array) {
  return array.map((num) => -num);
}

// The invert() function takes an array of integers as input and uses the map() method to apply the negation operator (-) to each number in the array, which returns a new array with the additive inverse of each number.
// For example, invert([1,2,3,4,5]) will return [-1,-2,-3,-4,-5], and invert([1,-2,3,-4,5]) will return [-1,2,-3,4,-5]. If the input array is empty, the function will return an empty array [].