// Instructions

// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

// My Solution

function periodIsLate(last, today, cycleLength) {
  // Step 1: Calculate the time difference in milliseconds between last and today
  const timeDifference = today - last;

  // Step 2: Convert the time difference to days (milliseconds / 86400000)
  const daysPassed = timeDifference / (1000 * 60 * 60 * 24);

  // Step 3: Compare daysPassed with cycleLength and return the result
  return daysPassed > cycleLength;
}

// Example usage
const lastPeriod = new Date("2023-07-01"); // Assuming the last period date is July 1, 2023
const todayDate = new Date("2023-08-09"); // Assuming today's date is August 9, 2023
const cycleLength = 28; // Assuming the cycle length is 28 days

console.log(periodIsLate(lastPeriod, todayDate, cycleLength)); // Output: true or false based on the actual dates
