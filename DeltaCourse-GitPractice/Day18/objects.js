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
