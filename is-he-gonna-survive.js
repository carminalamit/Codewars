// Instructions

// A hero is on his way to the castle to complete his mission.
// However, he's been told that the castle is surrounded with a couple of powerful dragons!
// each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry..
// Assuming he's gonna grab a specific given number of bullets and move forward to fight another
// specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

// My Solution
// Calculate the total number of bullets needed to defeat all the dragons by multiplying the number of dragons by 2.
// Check if the number of bullets the hero has is greater than or equal to the bullets needed. If it is, the hero will survive, so return true. Otherwise, return false.

function hero(bullets, dragons) {
  const bulletsNeeded = dragons * 2;
  return bullets >= bulletsNeeded;
}
