// Instructions

// We need a simple function that determines if a plural is needed or not. It should take a number,
// and return true if a plural should be used with that number or false if not.
// This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata,
// where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

// My Solution

// Check if the number is equal to 1
// If the number is not equal to 1, return true

function plural(n) {
  if (n === 1) {
    return false;
  } else {
    return true;
  }
}
