// Instructions

// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// Notes

// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests

// My Solution

// We define the validateHello function that takes the greetings parameter, which represents the string we want to check
function validateHello(greetings) {
  // We create a regular expression pattern using the /(hello|ciao|salut|hallo|hola|ahoj|czesc)/i. 
  // This pattern matches any of the given greetings in different languages, ignoring the case due to the i flag
  const regex = /(hello|ciao|salut|hallo|hola|ahoj|czesc)/i;
  // We use the test() method of the regular expression to check if the pattern matches the greetings string. 
  // test() method returns true if there is a match, and false otherwise
  const res = regex.test(greetings);
  // we return the result (true or false) from the function
  return res;
}
