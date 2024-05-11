// Call by value example

// function foo(b1) {
//   // the value of a1 will copied to b1
//   b1++;
// }

// var a1 = 10;
// foo(a1);
// // This is called pass by value
// console.log(a1);
// -----------------------------------------------

// Pass by Refrence example

// function foo(b1) {
//   // the value of a1 will copied to b1
//   b1[0] = 10;
// }

// var a1 = [1, 2, 3, 4, 5];
// foo(a1);
// // This is called pass by reference
// console.log(a1);

// ---------------------------
// function foo(b1) {
//   // the value of a1 will copied to b1
//   b1 += "e";
//   //   console.log(b1) // abcdee
// }

// var a1 = "abcde";
// foo(a1);
// // This is called pass by value
// console.log(a1); // abcde
// ++++++++++++++++++++++++++++++++++++++++++++++

// function foo(b1) {
//   // the value of a will be copied in b
//   b1.age = 28;
// }
// var a1 = { name: "Sandeep", age: 27 };
// foo(a1);
// // Pass by refrence
// console.log(a1.age); // 28

// **************************************

// var arr = [1, "2", false];
// function bar(param) {
//   param[0]++;
// }

// bar(arr);
// console.log(arr);

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// var arr = [{ name: "Mrigank" }, { name: "Yash" }];
// function bar(param) {
//   param.length = 0; // length ko 0 kar dega
// }
// bar(arr);
// console.log(arr); // []

////////////////////////////////////////////////

// Pure Function vs Impure Function
// ------------------------------------------

// Pure Function
// 1. Should not change variable outside of its scope
// 2. It should always return the same output when inputs are provided
// 3. It should always return a value
// 4. Should not make any external calls

//Pure Function
////////////////////////////////
// function sum(a, b) {
//   return a + b;
// }
// sum(1, 2);
// sum(1, 2);
// sum(1, 2);
// sum(1, 2);
// always same output

///////////////////////////////////
// Impure Function
// var init = 0;
// function count(num) {
//   init++;
//   return num + init;
// }
// console.log(count(1)); //2
// init++;
// console.log(count(1)); //4
// init++;
// console.log(count(1)); //6

///////////////////////////////////////////

// function sumRandom(a) {
//   return a + Math.random();
// }
// console.log(sumRandom(1));
// ''''''''''''''''''''''''''''''''''''''''''

// function greet(name) {
//   console.log("Namaste " + name);
// }
// greet("Sandeep");
// +++++++++++++++++++++++++++++++++++++++++

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 2));

// In Javascript, function are first class citizen

// function a() {
//   return function () {
//     console.log("Hello");
//   };
// }
// var greet = a();
// greet(); // Hello

// closure
// Function enclose with its surrounding state (lexical environment)

// function f3() {
//   var count = 1;
//   return function () {
//     console.log(count);
//   };
// }
// f4 = f3();
// f4();
// console.log(count);

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// function multiply(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }
// console.log(multiply(2)(3)(4));

// multiply(2,3,4) === multiply(2)(3)(4)

// var and let

// variable declared with var can redeclare but variable declare with let cannot
// variable declared with var are hoisted but variable declare with let cannot
// var q;
// var q;
// let e;
// let e;

// console.log(a);
// var a = 10; // hoisted means, var a; hoist

console.log(b); // ReferenceError:
let b = 10; // can't hoisted
