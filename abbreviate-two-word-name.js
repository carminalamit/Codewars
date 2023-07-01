// Instructions

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// My Solution

function abbrevName(name) {
  // We use the split(" ") method to split the name string into an array of two words.
  const names = name.split(" ");
  // We access the first character of the first word using names[0][0], convert it to uppercase using toUpperCase(),
  // and concatenate it with a dot (.) and the first character of the second word (names[1][0]), which is also converted to uppercase.
  const initials = names[0][0].toUpperCase() + "." + names[1][0].toUpperCase();
  return initials;
}

// other solution

function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}
