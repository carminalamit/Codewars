// Instruction
// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age
// and calculate the difference between them. You will be given an array of all the family members' ages, in any order.
// The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0.
// Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

// My Solution
// find the oldest living
// find the youngest family member
// calculate the difference between them

function differenceInAges(ages) {
  const youngestAge = Math.min(...ages);
  const oldestAge = Math.max(...ages);
  const ageDifference = oldestAge - youngestAge;
  return [youngestAge, oldestAge, ageDifference];
}

// This solution uses the built-in Math.min and Math.max functions to find the youngest and oldest age,
// respectively. Then it calculates the age difference and returns a new array with the three values.
