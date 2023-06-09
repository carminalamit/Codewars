// Instructions

// Let's build a matchmaking system that helps discover jobs for developers based on a number of factors.

// One of the simplest, yet most important factors is compensation. As developers we know how much money we need to support our lifestyle, so we generally have a rough idea of the minimum salary we would be satisfied with.

// Let's give this a try. We'll create a function match which takes a candidate and a job, which will return a boolean indicating whether the job is a valid match for the candidate.

// A candidate will have a minimum salary, so it will look like this:

// let candidate = {
//   minSalary: 120000
// }
// A job will have a maximum salary, so it will look like this:

// let job = {
//   maxSalary: 140000
// }
// If either the candidate's minimum salary or the job's maximum salary is not present, throw an error.

// For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary. However, let's also include 10% wiggle room (deducted from the candidate's minimum salary) in case the candidate is a rockstar who enjoys programming on Codewars in their spare time. The company offering the job may be able to work something out.

// My Solution

// Check if either the candidate's minSalary or the job's maxSalary is not present. If any of them is missing, throw an error.

// Calculate the minimum acceptable salary for the candidate by deducting 10% from the candidate's minSalary.

// Compare the candidate's minimum acceptable salary with the job's maxSalary.

// If the candidate's minimum acceptable salary is less than or equal to the job's maxSalary, return true to indicate a valid match.

// If the candidate's minimum acceptable salary is greater than the job's maxSalary, return false to indicate an invalid match.

function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) {
    throw new Error("Salary information missing");
  }

  const minAcceptableSalary = candidate.minSalary * 0.9;

  return minAcceptableSalary <= job.maxSalary;
}
