// Instructions

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// My Solution

// To remove all exclamation marks from a given string we can use the replace() method with a regular expression.

function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}
