/*
 * textToLowerCase is a single responsibility function that accepts an input and returns the input in lowerCase
 */
export function textToLowerCase(input) {
  return input.toLowerCase();
}
/**
 * textToUpperCase is a single responsibility function that accepts an input and returns the input in upperCase
 */
export function textToUpperCase(input) {
  return input.toUpperCase();
}

/**
 * inputCheck is a function that checks if an input is not null or undefined and is also a string data type, it sets a custom error message in state if either condition apply
 */

export function inputCheck(input, setError) {
   if (!input) {
    setError("Please enter an input.");
  } 
  if (typeof input !== "string") {
    setError("Please enter only string values.");
  }
  return ;
}
