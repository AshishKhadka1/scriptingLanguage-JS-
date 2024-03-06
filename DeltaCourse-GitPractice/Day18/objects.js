// object formation
let student = {
    name : 'ashish',
    age : 21
};

// get values
student["name"]
console.log(student.name);

// conversio in objects
const obj = {
    1 : 'a',
    2 : 'b',
    true : 'c',
    null : 'd',
    undefined : 'e'
}

obj.true = "false";     // true: 'false';
delete obj.null;        // to delete object

// object of objects
const BCA = {
    firstSem : {
        name : "ashish",
        roll : 5
    },
    secondSem : {
        name : 'karan',
        roll : 4
    }
};

// array of objects
const classInfo = [
    {
        name : "ravi",
        grade : "A"
    },
    {
        name : "nabin",
        grade : "0"
    }
]

// math Object
console.log(Math.PI); 
console.log(Math.E);

// Generate a random number between 0 (inclusive) and 1 (exclusive)
let randomNumber = Math.random();

console.log(randomNumber); // Output will be a random number between 0 and 1

// Random integers 
let num = Math.random();
num = num * 10;
num = Math.floor(num);
num = num + 1;
console.log(num);

// Random number between 1 and 100 (practice Question)
let n = Math.random();
n = n * 100;
n = Math.floor(n);
n = n + 1;
console.log(n);

