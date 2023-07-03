// Instructions

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

// My Solution

// Initialize an empty string result to store the doubled characters.
// Iterate over each character in the input str using a loop.
// For each character, concatenate it twice to the result string.
// After the loop completes, return the result string.

function doubleChar(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return result;
}
