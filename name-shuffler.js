// Instructions

// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// My Solution

function nameShuffler(str) {
  // Step 1: Split the input string into an array of words
  const nameArray = str.split(" ");

  // Step 2: Swap the elements at index 0 and index 1
  const temp = nameArray[0];
  nameArray[0] = nameArray[1];
  nameArray[1] = temp;

  // Step 3: Join the elements of the array into a string
  const shuffledName = nameArray.join(" ");

  // Step 4: Return the resulting string
  return shuffledName;
}

// simplified version

function nameSuffle(str) {
  return str.split(" ").reverse().join(" ");
}
