// Instructions

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// My Solution

// Calculate the sum of all the test scores in the classPoints array. We can use the reduce method to accomplish this
// Calculate the average test score by dividing the sum by the number of students in the class, which is the length of the classPoints array plus 1 (including your score).
// Compare yourPoints with the average score. If yourPoints is greater than the average, return true. Otherwise, return false.
function betterThanAverage(classPoints, yourPoints) {
  const sum = classPoints.reduce((total, score) => total + score, 0);
  const average = (sum + yourPoints) / (classPoints.length + 1);
  return yourPoints > average;
}
