// 1.
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for(let i = 0; i<arr.length; i++){

    if(arr[i] == num){
        arr.splice(i, 1);

    }
}
console.log(arr);

// 2.
let number = 287152;
let count = 0;

let copy = number;

while(copy > 0){
    count++
    copy = Math.floor(copy/10)
}
console.log(count);

// 3.
let numbers = 287152
let sum = 0

let cpy = numbers
while(cpy > 0){
    digit = cpy % 10;
    sum += digit;
    cpy = Math.floor(cpy/10);
}
console.log(sum);

// 4
let n = 5;
let factorial = 1;

for(let i = 1; i <= n; i++){
    factorial *= i;
}
console.log(`factorial of ${n} is ${factorial}`);

// 5
let array = [2, 5, 10, 4, 2, 7, 1, 9]
let largest = 0;

for (let i = 0; i <= arr.length; i++){
    if(largest < arr[i]){
        largest = arr[i]
    }
}

console.log(largest);