// Instructions

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

// My Solution

// make a conditional that checks that 'R' or 'r' means they're playing banjo otherwise they're not playing banjo

function areYouPlayingBanjo(name) {
    // name.charAt(0) retrieves the first character of the name string. 
    //The charAt function is used to access a specific character at a given index in a string.

    // .toLowerCase() converts the first character to lowercase. This step is performed to make the comparison case-insensitive, 
    // so it doesn't matter if the first letter is uppercase or lowercase.
  if (name.charAt(0).toLowerCase() === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}
