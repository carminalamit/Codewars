// Instruction
// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty,
// return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

// My Solution
// Split the input string into an array of character sequences using the comma separator.
// Check if the resulting array has a length of 0 or 1. If it does, return null.
// Remove the first and last elements of the array using the shift() and pop() methods.
// Join the remaining elements of the array into a new string using a space separator.
// Return the new string.

function array(string) {
  const arr = string.split(",");

  if (arr.length <= 2) {
    return null;
  }

  arr.shift();
  arr.pop();

  const newString = arr.join(" ");

  return newString;
}
