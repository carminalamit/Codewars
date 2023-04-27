// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// My Solution

function points(games) {
  return games.reduce((totalPoints, match) => {
    const [teamX, teamY] = match.split(":");
    return totalPoints + (teamX > teamY ? 3 : teamX == teamY ? 1 : 0);
  }, 0);
}

// we use the reduce() method to iterate over each match in the array and
// accumulate the totalPoints variable based on the rules given in the problem.
// We use a ternary operator to determine the number of points to add to the totalPoints
// variable for each match. Finally, we return the accumulated totalPoints variable as the
// result of the function.
