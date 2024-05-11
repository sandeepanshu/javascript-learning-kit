// Common order of growth (in increasing order) seen in complexity
// analysis in term of Big-O notation is:
// • O(1) : constant
// • O(log N): logarithmic
// • O(N) linear
// • O(NlogN)
// • O(N^2) quadratic
// • O(N^3) cubic
// • O(N^k) polynomial (for some positive integer k)
// • O(C^N) exponential (for some positive number C)
// • O(N!) factorial
// • O(N^N)

// Sorting Algorithm
///////////////////////////////////////////
// 1. Types of sorting --> 1. Comparison, 2. Count

// 2. Stability
// 3. Inplace --> Yes /No --> Does it need extra space or not?
// 4.Time and Space complexity.

// let arr = [1, 1, 0, 1, 0, 0, 1, 0, 1, 0];
// for (let i = 0; i < arr.length-1; i++) {
//   for (let j = 0; j < arr.length-1; j++) {
//     temp = arr[i];
//     arr[i] = arr[i + 1];
//     temp = arr[i + 1];
//     // isame ham compare kar rahe hai
//   }

// console.log(arr)
// }
// 2nd way
// Yaha pe count kar rahe hai
// 0 count = 5
// 1 count = 5

// let array = [3, 7, 1, 1, 12, 4, 1];
// // afer sorting
// resultArray = [1, 1, 2, 3, 4, 7, 12]; // stable sorting array
// anotherResArr = [1, 1, 1, 2, 3, 4, 7]; // unstable sorting arr

// let objArr = [
//   { name: "A", marks: 80 },
//   { name: "B", marks: 80 },
//   { name: "C", marks: 90 },
// ];
// // Stable sorting Arr
// stableSort = [
//   { name: "C", marks: 90 },
//   { name: "A", marks: 80 },
//   { name: "B", marks: 80 },
// ];

// [2, 3, 1, 4, 7]; (Is space me modified ho jayega)

// in bubble sort space complexity is O(n)

// Implement bubble sort and visualize the working for these array inputs.
// let arr1 = [3, 1, 4, 2, 6, 5];
// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr1 = [6, 5, 4, 3, 2, 1];
// let arr1 = [6, 4, 5, 3, 2, 1];

// function bubbleSort(arr, n) {
//   for (let j = 0; j < n - 1; j++) {
//     isSwapped = false;
//     for (let i = 0; i < n - j; i++) {
//       if (arr[i] > arr[i + 1]) {
//         isSwapped = true;
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//       }
//     }
//     console.log(arr);
//     if (isSwapped === false) {
//       console.log(`Breaking at ${j + 1} Iteration`);
//       break;
//     }
//   }
//   console.log(arr);
// }
// bubbleSort(arr1, arr1.length);

// Worst case time complexity O(n^2)
// Best case time complexity omega(n)
// Worst and Best case space complexity 1
// Is It inplace? Yes (No Extra space true)
// Is it stable ? Yes it is stable.

// How will do for Array of string

// let str1 = "abc";
// let str2 = "aab";

// if (str1.localeCompare(str2) === -1) {
//   console.log(`str1 is lexicographically smaller`);
// } else if (str1.localeCompare(str2) === 1) {
//   console.log(`str2 is lexicographically smaller`);
// } else {
//   console.log(`Both are same string`);
// }

// Assignment
// 1. Do Bubble sort for a list of string.

// You have to find kth largest element in  an array

// let arr = [2, 1, 7, 5, 4, 11, 9]; // length = 7
// 4th largest Element === 5

// sort karke  arr[kth - 1];

// reverse order me sort

// let arr1 = [6, 4, 5, 3, 2, 1];

// function bubbleSort(arr, n) {
//   for (let j = 0; j < n - 1; j++) {
//     isSwapped = false;
//     for (let i = 0; i < n - j; i++) {
//       if (arr[i] < arr[i + 1]) {
//         isSwapped = true;
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//       }
//     }
//     console.log(arr);
//     if (isSwapped === false) {
//       console.log(`Breaking at ${j + 1} Iteration`);
//       break;
//     }
//   }
//   console.log(arr);
// }
// bubbleSort(arr1, arr1.length);

let arr = [
  { name: "Sandeep", age: 25 },
  { name: "Atul", age: 27 },
  { name: "Anuj", age: 23 },
  { name: "Pankaj", age: 24 },
  { name: "Likhith", age: 23 },
  { name: "Yash", age: 21 },
  { name: "Sanjay", age: 15 },
  { name: "Mrigank", age: 28 },
];

function bubbleSort(arr, n) {
  for (let j = 0; j < n - 1; j++) {
    isSwapped = false;
    for (let i = 0; i < n - j; i++) {
      if (arr[i].age < arr[i + 1].age) {
        isSwapped = true;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    console.log(arr);
    if (isSwapped === false) {
      console.log(`Breaking at ${j + 1} Iteration`);
      break;
    }
  }
  console.log(arr);
}
bubbleSort(arr, arr.length);
