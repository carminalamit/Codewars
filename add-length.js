// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

// My Solution
function addLength(str) {
  const words = str.split(" ");
  const result = words.map((word) => `${word} ${word.length}`);
  return result;
}

// The input string str is split into an array of words using the split() method with a space character as the delimiter.
// The map() method is used to create a new array with the same number of elements as the words array.
// For each element in the words array, the map() method constructs a new string consisting of the word and its length, separated by a space.
// The new string is added to the new array returned by map().
// Once all elements in the words array have been processed, the new array is returned
