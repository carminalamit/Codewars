// Instructions

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// My Solution

// Define the function position that takes a parameter letter
// Convert the letter parameter to lowercase using the toLowerCase() function to handle both uppercase and lowercase letters:
// Calculate the ASCII value of the letter using the charCodeAt() function:
// Subtract 96 from the asciiValue to get the position in the alphabet
// Return the position as a string:

function position(letter) {
  letter = letter.toLowerCase();
  const asciiValue = letter.charCodeAt(0);
  const position = asciiValue - 96;
  return "Position of alphabet: " + position;
}

// Test case
console.log(position("a")); // Output: Position of alphabet: 1
