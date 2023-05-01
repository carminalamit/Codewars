// Write a function that takes a list of strings as an argument and returns a filtered list containing
// the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:
// ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// For example, if this array were passed as an argument:
// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// My Solution

function gooseFilter(birds) {
  const geese = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ]; // Array of geese
  return birds.filter((bird) => !geese.includes(bird)); // Filter out the geese from the input array and return the result
}

// We start by defining an array of geese called geese.
// We use the filter() method to create a new array with only the elements
// from the input array that pass a test implemented by the provided function.
// The provided function is an arrow function that takes a parameter bird and
// returns a boolean value indicating whether the bird is not in the geese array
// using the includes() method. We return the resulting filtered array.
