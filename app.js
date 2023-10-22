// 1. Sum of Elements: Write a program that calculates the sum of all elements in an array of numbers.
// Example Input:
// Array: [1, 2, 3, 4, 5]
// Example Output:
// Sum: 15

var arraySum = [1, 2, 3, 4, 5];
var sum = 0;

for (var i = 0; i <= arraySum.length - 1; i++) {
  sum += arraySum[i];
}
console.log("Sum: %f", sum);

// 2. Average of Elements: Calculate the average of elements in an array of numbers.
// Example Input:
// Array: [10, 20, 30, 40, 50]
// Example Output:
// Average: 30

var arrayAverage = [10, 20, 30, 40, 50];
sum = 0;

for (var i = 0; i <= arrayAverage.length - 1; i++) {
  sum += arrayAverage[i];
}
var average = sum / arrayAverage.length;

console.log("Average: %f", average);

// 3. Finding the Smallest/Largest Element: Find the smallest and largest element in an array of numbers.
// Example Input:
// Array: [8, 2, 7, 3, 11]
// Example Output:
// Smallest: 2
// Largest: 11

var array = [8, 2, 7, 3, 11];
var min = array[i - 1];
var max = array[i - 1];

for (var i = 1; i <= array.length - 1; i++) {
  if (array[i] < min) {
    min = array[i];
  } else if (array[i + 1] > max) {
    max = array[i];
  }
}

console.log("Smallest: %f", min);
console.log("Largest: %f", max);

// 4. Reverse an Array: Create a function that reverses an array of elements.
// Example Input:
// Array: [1, 2, 3, 4, 5]
// Example Output:
// Reversed Array: [5, 4, 3, 2, 1]

// 5. Search for an Element: Write a program that searches for a specific element in an array and returns its position or an error message if the element is not found.
// Example Input:
// Array: [10, 20, 30, 40, 50]
// Element to find: 30
// Example Output:
// Element found at position 2.
// 6. Working with Strings:
// Counting Characters: Write a program that counts how many characters of a specific type (e.g., uppercase letters) are in a given string.
// Example Input:
// String: "Hello World"
// Type of characters to count: Uppercase letters
// Example Output:
// Number of uppercase letters: 2
// 7. Palindrome Check: Check if a given string is a palindrome (reads the same forwards and backward).
// Example Input:
// String: "racecar"
// Example Output:
// The string "racecar" is a palindrome.
// 8. Reverse a String: Create a function that reverses a given string.
// Example Input:
// String: "javascript"
// Example Output:
// Reversed String: "tpircsavaj"
// 9. Removing Whitespace: Remove all whitespace from a given string.
// Example Input:
// String: "  Hello   World  "
// Example Output:
// Modified String: "HelloWorld"
// 10. Checking for Substrings: Write a program that checks if a given string contains a specific substring.
// Example Input:
// String: "JavaScript is a powerful language"
// Substring to check for: "powerful"
// Example Output:
// The string contains the substring "powerful."
// Using Loops (for and while): Multiplication Table: Display the multiplication table for a given number using a for loop.

// Example Input:
// Number: 7
// Example Output:
// Multiplication Table for 7:
// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 10 = 70
// 11. Prime Numbers: Find all prime numbers up to a given number using a for loop.
// Example Input:
// Limit: 20
// Example Output:
// Prime numbers up to 20: 2, 3, 5, 7, 11, 13, 17, 19
// 12. Fibonacci Series: Display the first n numbers in the Fibonacci series using a for loop.
// Example Input:
// Count: 8
// Example Output:
// Fibonacci Series (first 8 numbers): 0, 1, 1, 2, 3, 5, 8, 13
