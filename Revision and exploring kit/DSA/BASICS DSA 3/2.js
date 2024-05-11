// string method
// ------------------------
// split
// toUpperCase
// toLowerCase

// array methods
// map()
// forEach()
// filter()
// filter()
// reverse()
// push()
// slice()
// join()
// reduce()
// sort()

// var str = "sandeep kumar sharma";
// var upperCaseStr = str.toLocaleUpperCase()
// console.log(upperCaseStr)

// var str = "SANDEEP KUMAR SHARMA";
// var lowerCaseStr = str.toLocaleLowerCase()
// console.log(lowerCaseStr)

// var movie = "my name is khan"
// var newMovieArr = movie.split(" ")
// console.log(newMovieArr)

// var name = "Sandeep Kumar Sharma"
// console.log(name.split(" "))

// // number to array
// var num = 123456789;
// converNum = num.toString().split("");
// console.log(converNum);

// var name = "sandeep";
// console.log(name.split(""))

// join method is opposite of split
// split ==> split string into a string
// join ==> join array into string

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var str = arr.join("")
// console.log(str)
// console.log(typeof str)// string
// console.log(+str) // number

// let arr = ["anuj", "yash", "sneha", "hemant", "kishore"];
// console.log(arr.slice(1, 4));
// console.log(arr.slice(4, 5));
// console.log(arr.slice(1));

// Javascript Reduce()
// In an array, reduce is to output a single element
// function sum(a, b) {
//   return a + b;
// }

// var arr = [1, 2, 4, 2, 4, 6];
// var sumOfElement = arr.reduce(sum);
// console.log(sumOfElement);

// Assignment for
// GIven two sorted arrays, write a code to create a merged sorted array.

// var arr1 = [2, 4, 5, 8, 10];
// var arr2 = [1, 3, 6, 9];
// create arr3
// var arr3 = [1, 2, 3, 4, 5, 6, 8, 9];
//  *********************1st Method ***************
// var arr3 = arr1.concat(arr2);
// arr3.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr3);

//  *********************2nd Method ***************

// var arr1 = [2, 4, 5, 8, 10, 11];
// var arr2 = [1, 3, 6, 7, 9, 13, 15];

// var i = 0;
// var j = 0;
// var mergedSortedArray = [];

// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     mergedSortedArray.push(arr1[i]);
//     i++;
//   } else if (arr1[i] > arr2[j]) {
//     mergedSortedArray.push(arr2[j]);
//     j++;
//   }
// }
// if i has reached end of the array insert all elements from index j to arr2.length -1 in sorted array.
// if j has reached end of the array insert all elements from index i to arr1.length -1 in sorted array.
// if (i === arr1.length) {
//   while (j < arr2.length) {
//     mergedSortedArray.push(arr2[j]);
//     j++;
//   }
// }
// if (j === arr2.length) {
//   while (i < arr1.length) {
//     mergedSortedArray.push(arr2[i]);
//   }
//   i++;
// }
// console.log(mergedSortedArray);

// Problem
// let arr = [-1, 2, -5, 9, 3, -4];

// let nStr = "";
// let pStr = "";

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     nStr = nStr + " " + arr[i];
//   }

//   if (arr[i] > 0) {
//     pStr = pStr + " " + arr[i];
//   }
// }
// console.log("Positive numbers "+nStr);
// console.log("Negative numbers "+pStr);

// 2nd Approach
// var str1 = "";
// var str2 = "";

// function printStr(el) {
//   return el > 0 ? (str1 += el) : (str2 += el);
// }
// console.log(arr.forEach(printStr));

// 3rd Approach
// let arr = [-1, 2, -5, 9, 3, -4];

// let pArr = [];
// let nArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     nArr.push(arr[i])
//   }

//   if (arr[i] > 0) {
//     pArr.push(arr[i])
//   }
// }
// console.log("Positive numbers "+pArr);
// console.log("Negative numbers "+nArr);

// Write a program to check if number is prime number or not.

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// you have to use continue statement in such way that the Element at the 3rd index is not printed rest all are printed

// Using break index only element till 5th index should be printed

// for (let i = 0; i < arr.length; i++) {
//   if (i === 3) {
//     continue;
//   }
//   // 2nd
//   if (i === 6) {
//     break;
//   }
//   console.log(arr[i]);
// }

// Sumation of number till condition
// num = 12345
// sum of digits of number
// start the sum from last digit
// and then stop stop if the sum exceeds 10

// let num = 123456

// while(num!=0){
//     let temp = num
//     num%
// }

// convert the string uppercase to lowercase
// SANDEEP
// sandeep

// let lowercaseString = "sandeep kumar sharma";
// let convertedCaseString = "";
// for (let i = 0; i < lowercaseString.length; i++) {
//   let char = lowercaseString[i];
//   // Check if character is uppercase
//   if (char >= "a" && char <= "z") {
//     // Convert to lowercase by adding 32 to ASCII value
//     convertedCaseString += String.fromCharCode(char.charCodeAt(0) - 32);
//   } else {
//     convertedCaseString += char;
//   }
// }

// console.log(convertedCaseString);

// var upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";

// var str = "SANDEEP";
// var lStr = "";

// function indexOf(char) {
//   for (let i = 0; i < upperCaseStr.length; i++) {
//     if (upperCaseStr[i] === char) {
//       return i;
//     }
//   }
// }

// for (let j = 0; j < str.length; j++) {
//   var index = indexOf(str[j]);
//   lStr += lowerCaseStr[index];
// }
// console.log(lStr);

// var arr = [4, 54, 2, 23, 34, 65, 453, 342];
// console.log(str.indexOf(d) + arr.indexOf(2134) + arr.lastIndexOf(4));

//Pattern
// 1 2 3 4 5 6 // i=1
//  2 3 4 5 6  // i=2
//   3 4 5 6   // i=3
//    4 5 6    // i=4
//     5 6     // i=5
//      6      // i=6

// function printLines(i) {
//   var str = "";
//   for (let j = 1; j < i - 1; j++) {
//     str += " ";
//   }

//   for (let k = i; k <= num; k++) {
//     str += k + " ";
//   }
//   console.log(str);
// }
// var num = 8;
// for (let i = 1; i <= num; i++) {
//   printLines(i);
// }
