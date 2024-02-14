
// 1. pop operation which delete last element and return new array
let num = [7, 9, 0, -2]
num.pop(-2) 
console.log(num);


// 2. shift operation which delete element from first and returns it
let nums = [7, 9, 0, -2]
nums.shift(7)
console.log(nums);

// 3. trim operation cuts space from the text at front and end
let str = " "
if(!str.trim()){
    console.log("Blank");
}else{
    console.log("Not Blank");

}


// 4 To test whether the character at the given (character) index is lower case
let string = 'Ashish Khadka'
let index = 4

if(string[index] == string[index].toLowerCase()){
    console.log('given word is in lower case');
}else{
    console.log('given word is not in lower case');
}


// 5 To strip leading and trailing spaces from a string.
let str1 = prompt('Please enter as string');
console.log(`Orignal string =${str1}`);
console.log(`string without spaces = ${str.trim()}`);


// 6 To check if an element exists in an array or not
let arr =['helo', 'a', 23, 64, 99, -6]
let item = 23

if(arr.indexOf(item) != -1){
    console.log("Exist in array");
}else{
    console.log("Doesnot exist in array");
}