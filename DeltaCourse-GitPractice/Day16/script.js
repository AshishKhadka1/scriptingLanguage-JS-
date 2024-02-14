//  [TOPIC] methods : Actions that can be performed on objects

//  [Topic] format for method
// stringName.method()


// let password = prompt("set your password : ");
// let newPass = password.trim();
// console.log(newPass);

// Trim operation and Uppercase operation merged and used
let msg = "  help!"
console.log(msg.trim().toUpperCase());

// Adding using concat i.e. primary and secondary 
let primary =["ram", "sita", "hari"]
let secondary = ["Gita", "sita", "rita"]

console.log(primary.concat(secondary));

// using splice [practice Question bata ho]
// 1
let months = ['january', 'july', 'march', 'august']
console.log(months.splice(0,2, "july", "june")); 
console.log(months);

// 2.
// language.reverse().indexOf("javascript")


// array references
let arr = ['a', 'b']
let arrCpy = arr
console.log(arrCpy);
arrCpy.push('c');
console.log(arrCpy);
arr = arrCpy

// Nested Array [Multi-Dimensional Array]
let nums = [ [1, 2], [3, 4], [5, 6], [7, 8]]