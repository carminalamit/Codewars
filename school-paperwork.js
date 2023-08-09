// Instructions

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

// My Solution

function paperwork(n, m) {
  // Step 1: Check for negative values
  if (n < 0 || m < 0) {
    return 0;
  }

  // Step 2: Calculate the total number of pages
  const totalPages = n * m;

  // Step 3: Calculate the total number of blank pages needed
  const blankPagesNeeded = totalPages;

  // Step 4: Return the result
  return blankPagesNeeded;
}

// Example usage
console.log(paperwork(5, 5)); // Output: 25
console.log(paperwork(-5, 5)); // Output: 0
