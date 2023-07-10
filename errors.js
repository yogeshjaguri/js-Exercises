//  Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
function validateInteger(number) {
  if (!Number.isInteger(number)) {
    throw new Error("Invalid number. Please input an integer.");
  }
  console.log("Number is valid:", number);
}

// Example usage:
try {
  validateInteger(12); // Valid integer
  validateInteger(2.12); // Throws an error
} catch (error) {
  console.log("Error:", error.message);
}

// Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.
try {
  const undefinedObject = undefined;
  console.log(undefinedObject.property); // Accessing property of undefined object
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Error: Property access to undefined object");
  } else {
    throw error; // Rethrow the error if it's not a TypeError
  }
}

// Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.