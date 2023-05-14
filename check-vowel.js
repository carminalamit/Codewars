// Instruction
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.
// Return the resulting array.

// My Solution
function isVow(a) {
  return a.map(function (num) {
    return /[aeiou]/.test(String.fromCharCode(num))
      ? String.fromCharCode(num)
      : num;
  });
}

// This code uses the map() method to loop through each element of the input array a. 
// For each element, it checks if it is a character code for a lower case vowel using a regular expression (/[aeiou]/) 
// and the test() method. If it is, it converts the character code to a string using String.fromCharCode(). 
// If it's not a vowel, it returns the original number. The updated array is returned.