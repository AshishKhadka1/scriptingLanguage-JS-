function hello() {
  console.log("hello");
}
hello();

// name print
function printName() {
  console.log("ItahariNamunaCollege");
  console.log("Ashish Khadka");
}

printName();

// for loop
function print1to5() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

print1to5();

// dice
function rollDice() {
  let random = Math.floor(Math.random() * 6) + 1;
  console.log(random);
}

rollDice();

// function with arguments
function info(name, age) {
  console.log(`${name}'s age is ${age}`);
}

info("Ashish", 22);
info("Aman");

// sum
function sum(a, b) {
  console.log(a + b);
}

sum(1, 2);

// average Number
function calcAvg(a, b, c) {
  let avg = (a + b + c) / 3;
  console.log(avg);
}

calcAvg(2, 3, 4);

// multiplication Table
function printTable(n) {
  for (let i = n; i <= n * 10; i += n) {
    console.log(i);
  }
}

printTable(3);

// return
function sum(a, b) {
  return a + b;
}

let s = sum(sum(1, 999), 111);
console.log(s);

// print number using function from 1 to n.
function getSum(n) {
  let sum = 0; // Initialize a variable to store the sum

  // Loop from 1 to n
  for (let i = 1; i <= n; i++) {
    sum += i; // Add the current number (i) to the sum
  }

  return sum; // Return the sum
}

// create a function that returns the concatenation of all strings in an array.
let str = [ "hi", "hello", "bye", "!" ];

function concat(str) {
    let result = "";

    for( let i = 0; i < str.length; i++){
        result += str[i];
    }
    return result;
}  

// Higher order function
function multipleGreet(func, count){  //higher order funtion
  for(let i=1; i<=count; i++){
    func();
  }
}

let greet = function(){
  console.log("hello");
}

multipleGreet(greet, 3);

// returns a function

function oddEvenTEst(request){
  if(request == "odd"){
    return function(n){
      console.log(!(n%2 == 0));
    }
  }else if(request == "even"){
    return function(n){
      console.log(n%2 == 0);
    }
  }else{
    console.log("Wrong Request");
  }
}

// Methods

const calc = {
  
  add: function(a, b){
    return a + b;
  },
  subtract: function(a, b){
    return a - b;
  },
  multiply: function(a, b){
    return a * b;
  }
}