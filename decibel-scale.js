// Instructions
// The following formula is called the Decibel Scale:

// Decibel Scale Formula

// The Decibel Scale is used to determine the loudness of a sound, measured in dB:

// β is the result we want, defined in dB;
// We multiply the result of the logarithmic operation by 10, otherwise it'll be called "Bel Scale";
// We provide I, the intensity of the sound wave we need to find the loudness of, which is, for the purposes of this Kata, measured in 2D space and, hence, in Watts per square meter;
// Finally, we divide the intensity by the threshold of human hearing, also measured in Watts per square meter. This is the softest possible sound a human ear can hear;
// Since the threshold of human hearing involves an extremely small, long number, we need to utilize a logarithmic operation that will provide us the result in a convenient way.
// Your task is to simply calculate the loudness of a sound wave, given its intensity as a parameter to the dBScale/db_scale function.
// Results are automatically rounded to the nearest integer by the test cases.

// My Solution
// Declare a constant threshold representing the threshold of human hearing.
// Calculate the loudness using the formula: loudness = 10 * log10(intensity / threshold).
// Round the loudness value to the nearest integer using the Math.round function.
// Return the rounded loudness.

function dBScale(intensity) {
  const threshold = 1e-12; // Threshold of human hearing in Watts per square meter
  const loudness = 10 * Math.log10(intensity / threshold);
  return Math.round(loudness);
}
