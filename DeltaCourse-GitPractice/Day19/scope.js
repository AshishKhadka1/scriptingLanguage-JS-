//  scope 
// ->  variables declared within a function are scoped to that function, meaning they are only accessible within the function's body.


// function scope > global scope

//  finctional scope 

let sum = 20;      // global scope
function calSum(a, b){
    let sum = a + b;    // functional scope
    console.log(sum);
}
 
calSum(1,2)
console.log(calSum);

// block sope
// -> variable declared inside a {} blok cannot be accessed from outside the block.
// let and const use block scope but not var

//  Lexical Scope
// -> A variable defined outside a function can be accessible inside another funtion denied after the variable declaration.
//  the opposite or reverse of the upper statement is not true


// funtion Expression
const add = function (a, b){
    return a + b ;
}
add(2, 4)

//  Higher order Function
function multipleGreet(func, n){
    for(let i = 1; i <= n; i++){
        func();
    }
}

let greet = function(){
    console.log("Hello");
}
 
multipleGreet(greet, 2)