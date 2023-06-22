// Instructions

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// My Solution

// Initialize an empty string to store the result.
// Declare a variable, let's call it result, and set it to an empty string.
// Iterate through each character in the given string.
// Use a loop, such as a for loop, to iterate through each character in the string
// Check if the current character is a lowercase vowel.
// Use an if statement to check if the current character is any of the lowercase vowels: "a", "e", "i", "o", or "u
// If the current character is not a lowercase vowel, add it to the result string.
// Inside the if statement from Step 3, if the current character is not a lowercase vowel, concatenate it to the result string
// Return the final result string.
// After iterating through all the characters in the string, use the return statement to return the result string

function shortcut(string) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];

    if (
      currentChar !== "a" &&
      currentChar !== "e" &&
      currentChar !== "i" &&
      currentChar !== "o" &&
      currentChar !== "u"
    ) {
      result += currentChar;
    }
  }

  return result;
}

// simplified version

function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}
