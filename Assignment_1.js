// 1.
let x=10,y=10
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)

// 2.
console.log(x>y)
console.log(x<y)
console.log(x=y)

// 3.
let u=0,v=1

let w=u&&v
console.log(w)
let a=u||v
console.log(a)
let b = u|v
console.log(b)

// 4.
let one = 1;
one += 1;
console.log(one);

// unary Operators
let number = 5;
console.log(-number);   // unary minus
console.log(++number);  // increment
console.log(typeof number);   // typeof operator


// bitwise operators
let binaryA = 5; // binary representation: 0101
let binaryB = 3; // binary representation: 0011

console.log(binaryA & binaryB);  // bitwise AND (result: 0001)
console.log(binaryA | binaryB);  // bitwise OR (result: 0111)
console.log(~binaryA);           // bitwise NOT (result: 11111010)