// Instructions

// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
// The answer is always greater or equal to 0,
// no matter if it was in the past or it is in the future.

// My Solution

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // Calculate the father's age when he was twice as old as his son
  const twiceSonAge = sonYearsOld * 2;

  // Calculate the difference between the current father's age and the age when he was twice as old as his son
  const yearsDifference = Math.abs(dadYearsOld - twiceSonAge);

  return yearsDifference;
}
