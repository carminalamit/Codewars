// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep.
// Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1

// My Solution
function warnTheSheep(queue) {
  const wolfIndex = queue.indexOf("wolf");
  if (wolfIndex === queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  } else {
    return `Oi! Sheep number ${
      queue.length - wolfIndex - 1
    }! You are about to be eaten by a wolf!`;
  }
}

// The indexOf() method is used to find the index of the wolf in the queue array.
// If the wolf is at the end of the queue array (i.e., its index is queue.length - 1),
// then the function returns the string "Pls go away and stop eating my sheep".
// If the wolf is not at the end of the queue array, then the function returns a string
// that warns the sheep in front of the wolf that it is about to be eaten. The index of
// the sheep can be calculated as queue.length - wolfIndex - 1.
