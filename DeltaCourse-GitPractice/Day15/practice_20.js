// 1
var num = 10
if (num / 10 ){
    console.log("good");
}else{
    console.log("Bad");
}

// 2
// let name = prompt("Enter name of user :")
// console.log(name);
// let age = prompt("Enter ypur age :")
// console.log(age);

// using template literals
let name = "ashish"
let age = '21'

console.log(`${name} is ${age} years old`);

// 3
let Months = "Quater 4";
switch (Months) {
  case "Quater 1":
    console.log("January Febuary March");
    break;
  case "Quater 2":
    console.log("April May June");
    break;
  case "Quater 3":
    console.log("July August September");
    break;
  case "Quater 4":
    console.log("October November december");
}

// 4
let string = "apples"

if((string[0] == 'a' || start[0] == 'A' ) && (string.length > 5)){
    console.log("Golden String");
} else {
    console.log(" Not a Golden String");
}

// 6
let num1 = 66;
let num2 = 897896;

if((num1%10) ==  (num2%10)){
    console.log("Same Last digit");

}else{
    console.log("Numbers doesnot have the same digit at last");
}