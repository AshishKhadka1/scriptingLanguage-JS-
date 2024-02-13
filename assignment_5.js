// 5
// Function to calculate BMI
function calculateBMI(weight, height) {
    return weight / (height * height);
}

// Test the function with different weight and height values
var weight1 = 70; // Weight in kilograms
var height1 = 1.75; // Height in meters

var bmi1 = calculateBMI(weight1, height1);
console.log("weight:", weight1, "kg and height:", height1, "m is", bmi1.toFixed(2));

var weight2 = 90; // Weight in kilograms
var height2 = 2.10; // Height in meters

var bmi2 = calculateBMI(weight2, height2);
console.log("weight:", weight2, "kg and height:", height2, "m is", bmi2.toFixed(2));


// 6
// Create an array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use forEach() to print even numbers
console.log("Even numbers in the array:");
numbers.forEach(function(num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});

// 7
// Creating an empty array to store people objects
var people = [];

// Adding people to the array using push()
people.push({ name: 'John', age: 30 });
people.push({ name: 'shayam', age: 33 });

// Displaying the array of people
console.log('Array of People:', people);

// Removing the last person from the array using pop()
var removedPerson = people.pop();

// Displaying the removed person and updated array
console.log('Removed Person:', removedPerson);
console.log('Updated Array of People:', people);

// 8
var stringsArray = ['apple', 'banana', 'orange', 'grape'];

console.log('Original Array:', stringsArray);

var removedElement = stringsArray.shift();

console.log('Removed Element:', removedElement);
console.log('Array after Shift:', stringsArray);

stringsArray.unshift('kiwi');


console.log('Array after Unshift:', stringsArray);
