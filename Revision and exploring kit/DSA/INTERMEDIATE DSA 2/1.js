// let arr = [1, 2, 3, [4, 5, [6, 7]], [8, 9], [9, 11, [76, 54, [1, 2]]]];
// length == 6;
// output should be
// output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 11, 76, 54, 1, 2];

// let flattenedArray = [];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         flattenedArray.push(arr[i])
//     }
// }
// // generalised for loop se nhi hoga isiliye isko recursion se karna padega
// console.log(flattenedArray)

// let arr = [1, 2, 3, [4, 5, [6, 7]], [8, 9], [9, 11, [76, 54, [1, 2]]]];

// let outputArray = [];

// function flattenArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     // i < arr.length; is a base condition
//     if (typeof arr[i] === "number") {
//       outputArray.push(arr[i]);
//     } else {
//       flattenArray(arr[i]);
//     }
//   }
// }
// flattenArray(arr);
// console.log(outputArray);

// +++++++++++++++++++++++++++++++++++++++++++

// let arr = [
//   1,
//   null,
//   3,
//   [4, { name: "Sandeep" }, "5", [6, "7"]],
//   [8, 9],
//   [9, 11, [76, undefined, [1, 2]]],
// ];

// let outputArray = [];

// function flattenArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     // i < arr.length; is a base condition
//     // if (// arr[i] is an array) {
//     if (Array.isArray(arr[i])) {
//       flattenArray(arr[i]);
//     } else {
//       outputArray.push(arr[i]);
//     }
//   }
// }
// flattenArray(arr);
// console.log(outputArray);

// Array.isArray
// console.log(Array.isArray([1, 2, 3]));
// console.log(Array.isArray(1));

// Write a program to check if a string is palindrome using recursion.

// function isPalindrome(str, start, end) {
//   if (start === end) {
//     return true;
//   }

//   if (end === start + 1 && str[start] === str[end]) {
//     return true;
//   }

//   if (str[start] !== str[end]) {
//     return false;
//   }

//   return str[start] === str[end] && isPalindrome(str, start + 1, end - 1);
// }

// let str = "majdjam";
// console.log(isPalindrome(str, 0, str.length - 1));

// Sum of all digit of number using recursion.

// Backtracking
// Dynamic Programming

// Find the max of an array using recursion.

// let arr = [5, 4, 1, 2, 17, 6, 8, 11];

// function findMax(arr) {
//   if (arr.length === 1) {
//     return arr[0];
//   }

//   return Math.max(arr[0], arr.slice(1));
// }
// console.log(findMax);

//  Sudoku Problem, N-Queen Problem,
// posible permutation of a b c d e
// With the help of Backtracking

// sorting algorithm
// 1. Bubble Sort
// 2. Selection Sort
// 3. Insertion Sort
// these are non-recursive sorting

// 4. Merge Sort
// 5. Quick Sort
// there are recursive sorting

// 6. count Sort
// 7. Radix Sort
// 8. Bucket Sort
// 9. Heap Sort
// These are advance sort

// Arrange element in ascending order or descending order

// Bubble Sort (Simplest sorting Algo)

// largest Element bubble the end of the array

// let arr = [5, 4, 1, 7, 6, 8, 2, 3];
// 1st time ---> 4, 5, 1, 7, 6, 8, 2, 3;
// 2nd time ---> 4, 1, 5, 7, 6, 8, 2, 3;
// 3rd time ---> 4, 1, 5, 7, 6, 8, 2, 3;
// 4th time ---> 4, 1, 5, 6, 7, 8, 2, 3;
// 5th time ---> 4, 1, 5, 6, 7, 2, 8, 3;
// 6th time ---> 4, 1, 5, 6, 7, 2, 3, 8;
// // 1st Iteration is complete

// // 2nd Iteration
// 1st time ---> 1, 4, 5, 6, 7, 2, 3, 8;
// 2nd time ---> 1, 4, 5, 6, 7, 2, 3, 8;
// 3rd time ---> 1, 4, 5, 6, 7, 2, 3, 8;
// 4th time ---> 1, 4, 5, 6, 2, 7, 3, 8;
// 5th time ---> 1, 4, 5, 6, 2, 3, 7, 8;

// 3rd iteration
// Isi ko bubble sort bolte hai
// let arr = [5, 2, 1, 8, 3, 4, 7, 6];
// for (let j = 0; j < arr.length - 1; j++) {
//   for (let i = 0; i < arr.length - 1 - j; i++) {
//     if (arr[i] > arr[i + 1]) {
//       let temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//     }
//   }
// }

// console.log(arr);
