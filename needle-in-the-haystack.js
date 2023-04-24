// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

// My Solution

function findNeedle(haystack) {
  const index = haystack.findIndex((item) => item === "needle");
  return `found the needle at position ${index}`;
}

const myArray = [
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "needle",
  "randomJunk",
];
const message = findNeedle(myArray);
console.log(message); // Output: "found the needle at position 5"

// or

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
