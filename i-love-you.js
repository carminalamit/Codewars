// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals,
// saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"

// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals.
// The number of petals is always greater than 0.

// My Solution

function howMuchILoveYou(nbPetals) {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];

  const index = (nbPetals - 1) % phrases.length;
  return phrases[index];
}

// We start by defining an array of the phrases the girls would say.
// We then calculate the index of the phrase that would be said at the last petal
// by taking the remainder of (nbPetals - 1) divided by the length of the phrases array.
// This is because we want to start counting from 0, so we subtract 1 from nbPetals.
// Finally, we return the phrase at the calculated index.
