// Instructions

// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

// My Solution

function correctPolishLetters(string) {
  let modifiedString = "";

  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];

    if (currentChar === "ą") {
      modifiedString += "a";
    } else if (currentChar === "ć") {
      modifiedString += "c";
    } else if (currentChar === "ę") {
      modifiedString += "e";
    } else if (currentChar === "ł") {
      modifiedString += "l";
    } else if (currentChar === "ń") {
      modifiedString += "n";
    } else if (currentChar === "ó") {
      modifiedString += "o";
    } else if (currentChar === "ś") {
      modifiedString += "s";
    } else if (currentChar === "ź" || currentChar === "ż") {
      modifiedString += "z";
    } else {
      modifiedString += currentChar;
    }
  }

  return modifiedString;
}
