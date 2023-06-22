// Instructions

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// My Solution

// Calculate the body mass index (BMI)
// Compare the calculated BMI to the given thresholds

function bmi(weight, height) {
  const bmiValue = weight / (height * height);

  if (bmiValue <= 18.5) {
    return "Underweight";
  } else if (bmiValue <= 25.0) {
    return "Normal";
  } else if (bmiValue <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
