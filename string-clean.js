// Instructions

// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database.
// At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'

// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers.
// Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

// My Solution

// Initialize an empty string variable to store the cleaned text.
// Iterate through each character in the input string.
// Check if the current character is a number. You can use the isNaN() function to check if a character is NaN (not a number).
// If the character is not a number, append it to the cleaned text string.
// After iterating through all the characters, return the cleaned text string.

function stringClean(s) {
  let cleanedText = "";

  for (let i = 0; i < s.length; i++) {
    if (isNaN(parseInt(s[i]))) {
      cleanedText += s[i];
    }
  }

  return cleanedText;
}
