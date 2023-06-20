// Instructions

// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

// My Solution

function tripleTrouble(one, two, three) {
  // Create an empty string to store the combined result.
  let result = "";
  // Iterate over the characters in the input strings using a loop.
  // Since the inputs are guaranteed to be the same length, we can use the length of any of the input strings to determine the number of iterations.
  // Append the first character from each input string to the result string.
  for (let i = 0; i < one.length; i++) {
    result += one[i] + two[i] + three[i];
  }
  // Return the combined result string
  return result;
}
