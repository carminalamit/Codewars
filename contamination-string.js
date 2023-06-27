// Instructions

// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

// My Solution

// First, Add a conditional check to return an empty string if either text or char is empty
// Initialize a variable mutatedText as an empty string to store the mutated text
// Iterate over each character in the text using a loop

function contamination(text, char) {
  if (text === "" || char === "") {
    return "";
  }

  // Inside the loop, append char to mutatedText for each character in the original text
  let mutatedText = "";
  for (let i = 0; i < text.length; i++) {
    mutatedText += char;
  }

  return mutatedText;
}
