// string define
// let text = "Ashish" 


// string Length
//  let text = "ABCDEFGHIJ"
//  let length = text.length;
//  console.log(text.length)


// String charAt()
// let text = "HELLO WORLD";
// let char = text.charAt(8);
// console.log(char)


// string Slice
// Slice out a portion of a string from position 7 to position 13:
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// console.log(part);


// If you omit the second parameter, the method will slice out the rest of the string:
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7);
// console.log(part);


// If a parameter is negative, the position is counted from the end of the string:
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12);


// This example slices out a portion of a string from position -12 to position -6:
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -6);


// String substr()
// The difference is that the second parameter specifies the length of the extracted part.
// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7, 6);
// console.log(part);

// If you omit the second parameter, substr() will slice out from front of the string.
// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7);
// console.log(parent);
// If the first parameter is negative, the position counts from the end of the string.
// let str = "Apple, Banana, Kiwi";
// let part = str.substr(-4);


// String toUpperCase()
// let text1 = "i am iron-man";
// let text2 = text1.toUpperCase();
// console.log(text2);

// String toLowerCase()
// let text3 = "I AM BATMAN";      
// let text4 = text1.toLowerCase(); 
// console.log(text4);


// string concat()
// let text1 = "web";
// let text2 = "technology";
// let text3 = text1.concat(" ", text2);
// console.log(text3);

// let str1 = "Ram"
// let str2 = "bahadur"
// console.log(str1 + str2)


// String trim()
// let text1 = "      BCA      ";
// let text2 = text1.trim();
// console.log(text2);

// String trimStart()
// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart();
// console.log(text2);

// String trimEnd()
// let text1 = "     Hello World!     ";
// let text2 = text1.trimEnd();


// String padStart()
// add a string with "0" until it reaches the length 4:

// let text = "5";
// let padded = text.padStart(4,"0");


// String padEnd()
// let text = "5";
// let padded = text.padEnd(4,"x");
// console.log(padded);


// String repeat()
// let text = "Hello world!";
// let result = text.repeat(2);
// console.log(result);


// Replacing String Content
// let text = "Please visit kathmandu";
// let newText = text.replace("kathmandu", "pokhara");
// console.log(newText);

// String ReplaceAll()
// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");
// console.log(text);


//  String split()
// text.split(",")    // Split on commas
// text.split(" ")    // Split on spaces
// text.split("|")    // Split on pipe


// Display the first array element, after a string split:
// let text = "a,b,c,d|e, f";
// const myArray = text.split(",");
// console.log(myArray[0])


// \" inserts a double quote in a string
// let text = "We are the so-called \"Vikings\" from the north.";


// \' inserts a single quote in a string
// let text= 'It\'s alright.';


// \\ inserts a backslash in a string
// let text = "The character \\ is called backslash.";

























// NOT NECESSARY

// String charCodeAt()
// The method returns a UTF-16 code (an integer between 0 and 65535).
// let text = "HELLO WORLD";
// let char = text.charCodeAt(5);
// console.log(char)

// String at()
// const name = "namuna";
// let letter = name.at(2);
// console.log(name);
