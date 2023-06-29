// Instructions

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// My Solution

// To solve this task, we can use a loop to iterate from 1 to the given num, and for each iteration, 
// append the current number and the word "sheep" to a string. We'll also add the ellipsis "..." between each iteration.

const countSheep = function (num) {
    let murmur = "";
  
    for (let i = 1; i <= num; i++) {
      murmur += i + " sheep...";
    }
  
    return murmur;
  };
  