// Instructions

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// My Solution

// Extract the first and last letters of both the beast and dish strings.
// Compare the first letter of the beast with the first letter of the dish, ignoring case sensitivity. Also, compare the last letter of the beast with the last letter of the dish, ignoring case sensitivity.
// If both comparisons are true, return true to indicate that the beast is allowed to bring the dish to the feast. Otherwise, return false

function feast(beast, dish) {
  const beastFirstLetter = beast.charAt(0).toLowerCase();
  const beastLastLetter = beast.charAt(beast.length - 1).toLowerCase();
  const dishFirstLetter = dish.charAt(0).toLowerCase();
  const dishLastLetter = dish.charAt(dish.length - 1).toLowerCase();

  return (
    beastFirstLetter === dishFirstLetter && beastLastLetter === dishLastLetter
  );
}

// other solution

function feast(beast, dish) {
  return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
}
