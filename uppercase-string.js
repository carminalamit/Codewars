// Instructions

// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

// My Solution
String.prototype.isUpperCase = function () {
  return this === this.toUpperCase() || !/[a-z]/.test(this);
};

// Within the method, this refers to the string object on which the method is called.
// The toUpperCase() method converts the string to uppercase. If the resulting string is the same as the original string, it means all characters were already uppercase, so we return true.
// The regular expression /[a-z]/ checks if the string contains any lowercase letters. If there are no lowercase letters, the test will be false.
// If the string is either all uppercase or does not contain any lowercase letters, we return true.
// If none of the above conditions are met, the string is not in ALL CAPS, so we return false.
// Here are some examples using the method:
