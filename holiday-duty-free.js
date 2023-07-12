// Instructions

// For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.

// Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.

// All inputs will be integers. Please return an integer. Round down.

// My Solution

// Calculate the savings per bottle: Multiply the normal price (normPrice) by the discount percentage (discount) and divide it by 100 to get the savings per bottle.
// savingsPerBottle = (normPrice * discount) / 100

// Calculate the number of bottles needed: Divide the cost of the holiday (hol) by the savings per bottle (savingsPerBottle) to find the number of bottles needed. Since we are required to round down, we'll use the floor function.
// numBottles = floor(hol / savingsPerBottle)

// Return the result: Return the calculated numBottles as the answer.

function dutyFree(normPrice, discount, hol) {
  const savingsPerBottle = (normPrice * discount) / 100;
  const numBottles = Math.floor(hol / savingsPerBottle);
  return numBottles;
}

// other solution
function dutyFree(normPrice, discount, hol) {
  return Math.floor((hol / normPrice / discount) * 100);
}
