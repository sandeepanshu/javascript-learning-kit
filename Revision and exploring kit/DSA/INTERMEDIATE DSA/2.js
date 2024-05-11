// Rest and Spread operator

// Rest operator is used in function params
// Spread operator is used function calling, obj, arrays, and so on...

// rest operator
// function test(...a) {
//   return a; // all the elem is combine in single array
// }
// console.log(test(1, 2, 3, 4));

// spread operator
// function sumTwo(a, b) {
//   return a + b;
// }

// let arr2 = [1, 3];
// console.log(sumTwo(arr2)); // all indivisual ele of array array spreaded

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Copy the array
// let arr5 = [1, 2, 3, 4, 5];
// let arr6 = [...arr5, 6, 7];
// console.log(arr6); //[1, 2, 3, 4, 5, 6, 7];
// ============================================
// let obj = { name: "Sandeep", age: 25 };
// let objNew = { ...obj, gender: "Male" }; // copy
// console.log(objNew)
// console.log(!!null)
// console.log(!'')
// console.log(!!1)

// Recursion
// =============================================
// We say that a function has returned a result if it has returned a value
// or it has excuted all lines of code within it.

// JS excution is synchronous
// First line of code is excuted then only second line of code will be excuted

// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// let result = factorial(5);
// console.log(result);

// Recursion is when a function calls itself
// The function that calls itself is called a recursive function

// A recursive function is always made of two things:
// 1. Function Logic
// 2. Base Condition

// Sum function
// function sum(num) {
//   if (num === 1) {
//     return 1;
//   }
//   return num + sum(num - 1);
// }

// console.log(sum(5));

//  Fibbonacci Number
// 0 1 1 2 3 5 8 13 ...
// function fibbonacci(n) {
//   if (n === 0 || n === 1) {
//     return n;
//   }
//   return fibbonacci(n - 1) + fibbonacci(n - 2);
// }

// let result = fibbonacci(8);
// console.log(result);

// Print all element from N to 1 using tail recursion

// function printEl(n) {
//   if (n === 1) {
//     console.log(n);
//     return;
//   }
//   console.log(n);
//   printEl(n - 1);
// }
// printEl(10);

// Print all element from 1 to N using tail recursion
// function printEl(n) {
//   if (n === 1) {
//     console.log(n);
//     return;
//   }
//   printEl(n - 1);
//   console.log(n);
// }
// printEl(10);

// Sum of all the element of the using recrsive method

// let arr = [1, 2, 5, 7, 10];

// function sumOfArrEl(arr, i) {
//   if (i === arr.length - 1) {
//     return arr[i];
//   }

//   return arr[i] + sumOfArrEl(arr, i + 1);
// }
// let result = sumOfArrEl(arr, 0);
// console.log(result);

// Check array is sorted using recursion

// var arr = [1, 5, 3, 2, 7, 6, 12, 34, 32, 21];
// var arr = [1, 3, 5, 6, 7];

// function isSorted(i) {
//   if (i === arr.length - 1) {
//     return true;
//   }
//   return arr[i] <= arr[i + 1] && isSorted(i + 1);
// }
// console.log(isSorted(0));

// Write a recursive function print all the element of the array

// let arr = [1, 3, 2, 4, 5, 6, 7, 8, 9];

// function allTheEl(i) {
//   //   console.log(arr[i]);

//   if (i === arr.length - 1) {
//     return;
//   }

//   allTheEl(i + 1);
//   console.log(arr[i]);
// }
// allTheEl(8);

// Print "Sandeep" upto 10 times using recurssion

// let str = "Sandeep";
// function printName(i) {
//   console.log(str);
//   if (i === 10) {
//     return;
//   }
//   printName(i + 1);
// }
// printName(1);
// +++++++++++++++2nd Way +++++++++++++++++

// let str = "Sandeep";
// function printName(i) {
//   console.log(str);
//   if (i === 1) {
//     return;
//   }
//   printName(i - 1);
// }
// printName(10);

// Assignment
// Draw the recursion tree for
// 1. Factorial of a number
// 2. Fibbonaci Sequence
// 3. Check if array are sorted or not usng recursion
// 4. fnd the sum of element of array using recursion
// 5. print element from 1 to N using recursion

// Write a recursive program to calculate a *** b

// 10 ** 3 = 1000
