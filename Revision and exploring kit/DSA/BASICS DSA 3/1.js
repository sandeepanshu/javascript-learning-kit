// find the maximum and mininmum element of the array
// max = 1000
// min = -100
// var arr = [-100, 1, 2, 99, 1000, 5, 4, 6];

// var min = arr[0];
// var max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(`Minimum is ` + min);
// console.log(`Max is ` + max);

// Swap the number

// *************1st way****************
// let num1 = 5;
// let num2 = 10;

// console.log(num1, num2);

// let temp;
// temp = num1;
// num1 = num2;
// num2 = temp;

// console.log(num1);
// console.log(num2);

// ***************2nd Way************
// let num1 = 5;
// let num2 = 10;

// arr = [num1, num2]; // [ 5, 10 ]
// [num2, num1] = arr;

// console.log(arr);
// [num2, num1] = [num1, num2]
// console.log(num1, num2)

// ******************* 3rd Way ****************
// let a = 5;
// let b = 10;
// a = a + b; // 15
// b = a - b; // 15 - 10 = 5
// a = a - b; // 15 - 5 = 10

// console.log(a, b);

// ******************4th way *******************
// let a = 5;
// let b = 10;
// a = a * b; // a = 50
// b = a / b; // b = 50/10 = 5
// a = a / b; // a = 50/5 = 10

// console.log(a,b)

// ******************5th way *******************

// let a = 5;
// let b = 10;
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;
// console.log(a, b);

// Reverse an array

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ********************1st way******************
// var reverseArray = arr.reverse()
// console.log(reverseArray)

// ********************2nd way******************
// // push method

// var newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   newArr.push(arr[i]);
// }
// console.log(typeof newArr);
// // console.log(newArr);
// console.log(res);

// ********************3rd way******************
// Without using empty array
// then swap the first and last Element

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var i = 0;
// var j = arr.length - 1;

// while (i < j) {
//   var temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
// console.log(arr);

// Q.  I have in an array [1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0] You need to write in the sort form 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1
// Using two pointer
// var arr = [1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0];
// var i = 0;
// var j = arr.length - 1;
// //  wrong hai
// while (i < j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }

// console.log(arr);

// 2nd Way
// var zeroOneArr = [1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0];

// var count0 = 0;
// var count1 = 0;
// var rev = [];

// for (let i = 0; i < zeroOneArr.length; i++) {
//   if (zeroOneArr[i] === 0) {
//     count0++;
//   } else if (zeroOneArr[i] === 1) {
//     count1++;
//   }
// }

// for (let j = 0; j < count0; j++) {
//   rev.push(0);
// }

// for (let k = 0; k < count1; k++) {
//   rev.push(1);
// }
// console.log(rev);

// **************************3rd Way**************************

// dont use Extra array

// var arr = [1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0];

// let temp0 = 0;
// let temp1 = 1;
// var rev = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     temp0++;
//   } else if (arr[i] === 1) {
//     temp1++;
//   }
// }

// var k = 0;

// while (temp0 > 0) {
//   arr[k] = 0;
//   temp0--;
//   k++;
// }
// while (temp1 > 0) {
//   arr[k] = 1;
//   temp1--;
//   k++;
// }

// console.log(arr);

// --------------------------------------
// Sort the array
// arr = [1, 2, 3, 0, 5];

// for (let j = 0; j < arr.length; j++) {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     if (arr[minIndex] > arr[minIndex + 1]) {
//       let temp = arr[minIndex];
//       arr[minIndex] = arr[minIndex + 1];
//       arr[minIndex + 1] = temp;
//     }
//   }
// }
// console.log(arr);

// ----------------------------------
// Find the Missing number on contigues array 
// var n = 10;
// arr = [2, 1, 3, 4, 6, 5, 7, 8, 9];
// var sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log("Missing Number is " + ((n * (n + 1)) / 2 - sum));

