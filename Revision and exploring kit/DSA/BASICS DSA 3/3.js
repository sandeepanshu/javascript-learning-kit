// 1 2 3 4 5 6 7 8
//  2 3 4 5 6 7 8
//   3 4 5 6 7 8
//    4 5 6 7 8
//     5 6 7 8
//      6 7 8
//       7 8
//        8
//       7 8
//      6 7 8
//     5 6 7 8
//    4 5 6 7 8
//   3 4 5 6 7 8
//  2 3 4 5 6 7 8
// 1 2 3 4 5 6 7 8

// problem find 2nd minimum element
// let arr = [4, 1, 2, 3, -1, -2, -3]; //-1
// function findSecondMinimum(arr) {
//   if (arr.length < 2) {
//     return "Array should have at least two elements";
//   }

//   let min = arr[0];
//   let secondMin = arr[1];

//   if (secondMin < min) {
//     [min, secondMin] = [secondMin, min];
//   }

//   for (let i = 2; i < arr.length; i++) {
//     if (arr[i] < min) {
//       secondMin = min;
//       min = arr[i];
//     } else if (arr[i] < secondMin && arr[i] !== min) {
//       secondMin = arr[i];
//     }
//   }
//   if (secondMin === arr[0] || secondMin === arr[1]) {
//     return "No second minimum element found";
//   }

//   return secondMin;
// }

// console.log(findSecondMinimum(arr));

// Discussion on array and object

// How to find the 2nd minimum array of the Element
// let arr = [2, 1, 3, 4, 6, 5, 9, 20, 10];
// // 1st approach
// console.log(arr.sort((a, b) => a - b));
// console.log(arr[1]); // 2nd min element

// var arr = [3, 4, 1, 6, 5, 9, 2, 20, 10];

// var min;
// var secMin;

// if (arr[0] < arr[1]) {
//   min = arr[0]; //  3
//   secMin = arr[1]; // 4
// } else {
//   min = arr[1];
//   secMin = arr[0];
// }

// for (let i = 2; i < arr.length; i++) {
//   // min = 3
//   // secMin = 4
//   // arr[i] = 1
//   if (arr[i] < min) {
//     secMin = min;
//     min = arr[i];
//   } else if (arr[i] < secMin && arr[i] !== min) {
//     secMin = arr[i];
//   }
// }

// console.log(secMin);

// Problem
// you have to find the subarray in the given array i.e, reverse that subarray the whole array is sorted

// var arr = [7, 14, 21, [35, 26, 22], 41, 43, 50];

// var arr = [7, 14, 21, 35, 26, 22, 41, 43, 50];

// for (let i = 0; i < arr.length; i++) {
//         arr[i]<arr[i+1]

// }

// var arr = [-1, -3, 4, -5, 6, 7, -9, 2, -8];

// var arr = [4, 5, 6, 7, 8];
// rotation of 1 position then (circular rotation) then new array
// arr = [8, 4, 5, 6, 7];

// function rotateArray(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const temp = arr[arr.length - 1];
//   // shift element ti the right

//   for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   //   place the last Element at the begining
//   arr[0] = temp;
//   return arr;
// }

// console.log(rotateArray(arr));

// 2nd way
// push method ==> insert Element at the end of the array
// unshift method => inserts element at begining of the array
// pop =>
// shift ==>
// var arr = [1, 2, 3, 4, 5];
// arr.unshift(arr[arr.length - 1]);
// arr.pop()
// console.log(arr);

// Destructuring
// var obj = {
//   a: "sandeep",
//   b: 27,
// };

// var a = obj.a;
// var b = obj.b;

// var { a, b } = obj;
// // Renaming with destructuring.
// var { a: name, b: age } = obj;
// console.log(name);
// console.log(age);

// var nestedObj = {
//   name: "Sandeep",
//   address: {
//     city: "Kolkata",
//     state: "West Bengal",
//   },
// };
// var { address } = nestedObj; // single array destructure
// // console.log(address);
// var { city } = address;

// console.log(city);
// var {
//   address: { city },
// } = nestedObj;
// console.log(city);

var persons = [
  {
    name: "Sandeep",
    age: 27,
  },
  {
    name: "Mrigank",
    age: 28,
  },
  {
    name: "Yagya",
    age: 30,
  },
];
console.log(persons[0]);

// can you add gender key to all obj

// +++++++++++1st Way ++++++++++++
// for (let i = 0; i < persons.length; i++) {
//   persons[i].gender = "Male";
// }
// console.log(persons);

// // +++++++++++2nd Way ++++++++++++
// for (const person of persons) {
//     person.gender = "Male"
// }
// console.log(persons)

// +++++++++++3rd Way ++++++++++++
// persons.forEach((person) => {
//   person.gender = "Male";
// });
// console.log(persons);

