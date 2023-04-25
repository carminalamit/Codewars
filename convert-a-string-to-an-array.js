// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// My Solution

function stringToArray(string) {
  return string.split(" ");
}

// split() method splits the string into an array of substrings at each space character,
// resulting in an array of words then passing a space (" ") as the separator.
