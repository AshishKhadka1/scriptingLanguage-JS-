// 1. returns array number larger than a number

let arr = [8, 9, 10, 1, 2, 3, 4, 5, 9];
let num = 5;

function getElements(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      console.log(arr[i]);
    }
  }
}

getElements(arr, num);

// 2. To extract unique characters from a string.
let str1 = "abcdefghijklmnopwrstuvwxyz";

function getUnique(str1) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let currChar = str1[i];
    if (ans.indexOf(currChar) == -1) {
      ans += currChar;
    }
  }
  return ans;
}

getUnique(str);

// 3
let country = ["Australia", "Germany", "United States of America"];
function longestName(country) {
  let ansIdx = 0;
  for (let i = 0; i < country.length; i++) {
    let ansLen = country[ansIdx].length;
    let currLen = country[i].length;
    if (currLen > ansLen) {
      ansIdx = i;
    }
  }
  return country[ansIdx];
}
longestName(country);

// 4
let str = "apnacollege";
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    ) {
      count++;
    }
  }
  return count;
}

// 5
let start = 100;
let end = 200;
function generateRandom(start, end) {
  let diff = end - start;
  return Math.floor(Math.random() * diff) + start;
}
