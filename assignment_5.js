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

// 9
var strings = ["apple", "banana", "orange", "grape", "kiwi"];
console.log("orignal Array :", strings);
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var capitalizedStrings = strings.map(capitalize);

console.log('Array with Capitalized Strings:', capitalizedStrings);


// 10
// Creating an array to store book objects
var books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
];

// Using splice() to remove the second book from the array
var removedBook = books.splice(1, 1); // Start from index 1, remove 1 element

// Printing the modified array after removing the book
console.log('Modified Array of Books:', books);


// 11
var strings = ['Apple', 'Banana', 'Orange', 'Avocado'];

function startsWithA(str) {
    return str.charAt(0).toUpperCase() === 'A';
}

var filteredStrings = strings.filter(startsWithA);

console.log('Filtered Array:', filteredStrings);


// 12
var students = [
    { name: 'John', age: 20 },
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 21 }
];

var ages = students.map(function(student) {
    return student.age;
});

console.log('Ages of Students:', ages);
