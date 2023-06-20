// Instructions

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// My Solution
// Split the input string into an array of words using the split method and space as the separator.
// Iterate over each word in the array.
// Check if the word contains any non-alphabetic characters using a regular expression. If it does, leave the word as it is and continue to the next word.
// Otherwise, move the first letter of the word to the end and add "ay" to the end of the word.
// Join the modified words back into a single string using the join method with a space as the separator.
// return result

function pigIt(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (/^[a-zA-Z]+$/.test(words[i])) {
      words[i] = words[i].slice(1) + words[i][0] + "ay";
    }
  }

  const result = words.join(" ");
  return result;
}
