// Instructions

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

// refactor this code

function capitalizeWord(word) {
  word[0].toUpperCase();
  return word;
}

// My Solution
// In this example, charAt(0) is used to extract the first character of the string,
// toUpperCase() is used to convert it to uppercase, and slice(1) is used to extract the rest of the string
// starting from the second character. Finally, the modified first character is concatenated with the rest of the string to form the modified word.

function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
