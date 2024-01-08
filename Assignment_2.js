//for loops

     for( let i=10; i<=13; i++){
        console.log(i)
    }
// for-of loops
let numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
    console.log(num)
}

//for-in loops
let person = {
    name : " ashish",
    age : 33,
    sex : " male"

}
for (let k in person) {
    console.log(k + ":" + person[k])
}

// if else
    let a = 10
    if (a > 5) {
        console.log(true)
    } else {
        console.log(false)
    }


// switch statement
    let x = "apple"
    switch (x) {
        case "apple":
            console.log("x is apple")
        break;

        case "banana":
            console.log("x is banana")
        break;
        case "default":
            console.log("x is invalid")
        }
