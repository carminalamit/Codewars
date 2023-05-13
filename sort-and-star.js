// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars)
// and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// My Solution

function twoSort(s) {
  const sorted = s.sort()[0]; // Sort the array and get the first element
  return sorted.split("").join("***"); // Split the string into an array of letters, join with "***" between each letter, and return the result
}
