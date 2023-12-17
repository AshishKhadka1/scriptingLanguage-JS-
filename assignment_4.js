// 1.

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

// 2.
 
