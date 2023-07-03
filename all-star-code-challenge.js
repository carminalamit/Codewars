// Instructions

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

// Initialize a variable count to 0. This variable will keep track of the number of occurrences of the second argument in the first argument.
// Iterate over each character in the str using a loop.
// Check if the current character is equal to the letter. If it is, increment the count variable by 1.
// After the loop completes, return the count variable.

function strCount(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

// other solution
function strCount(str, letter) {
  return str.split(letter).length - 1;
}
