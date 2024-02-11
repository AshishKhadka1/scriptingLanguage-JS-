// 1
console.log("Hello" + " World")

// 2.

// Function to check if a number is prime
function isPrime(num) {
    // 1 is not a prime number
    if (num <= 1) {
        return false;
    }
    // Iterate from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // If the number is divisible by any other number, it's not prime
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to find and display all prime numbers between 1 and 100
function findPrimes() {
    let primeNumbers = [];
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }
    console.log("Prime numbers between 1 and 100:");
    console.log(primeNumbers.join(", "));
}

// Call the function to find and display prime numbers
findPrimes();


// 3.
function reverseString(str) {
    let reversedString = '';
    let i = str.length - 1;
    
    do {
        reversedString += str[i];
        i--;
    } while (i >= 0);

    return reversedString;
}

// Example usage:
const originalString = 'Hello, world!';
const reversed = reverseString(originalString);
console.log(reversed); // Outputs: '!dlrow ,olleH'

//  4
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Testing the factorial function with different numbers
console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 3:", factorial(3));
console.log("Factorial of 7:", factorial(7));

