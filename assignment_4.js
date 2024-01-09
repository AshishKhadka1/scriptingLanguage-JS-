// 1
console.log("Hello" + " World")

// 2.

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function findPrimesUpToN(limit) {
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

findPrimesUpToN(100);

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

 
