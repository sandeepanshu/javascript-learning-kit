// // find character is vowels or consonant
// var char = "g";
// if (
//   char === "a" ||
//   char === "e" ||
//   char === "i" ||
//   char === "o" ||
//   char === "u"
// ) {
//   console.log("char is vowel");
// } else console.log("char is consonant");

// var a;
// for (var i = 0; i <= 10; i /= 2) {
//   console.log(i);
// }
// infinite loop

// for (let index = 10; index > 0; index--) {
//   console.log("Hello");
// }

// for (let index = 0; index < 10; index++) {
//   console.log("Hello");
// }

// for (let i = 0, j = 0; i < 20 && j < 30; i += 4, j *= 0) {
//   console.log("Hello");
// }

// i = 0, j = 0
// i < 20 && j < 30; true
// // Hello
// i = 4, j = 0
// i< 20 && j < 30
// // hello
// i = 8, j = 0
// // hello
// i = 12
// //hello
// i = 16
// // hello
// i < 20 && j< 30
// 20 < 20 &&  0 < 30
// false && true
// false

// for (let i = 0, j = 0; i < 20 && j < 30; i += 4, j *= i) {
//   console.log("Hello");
// }

// (i = 0), (j = 0);
// // hello
// (i = 4), j, (j = 0 + 4), 4;
// // hello
// (i = 8), (j = 8 * 8), 32;

// for (let i = 0, j = 0; i < 20 && j < 30; i += 4, j *= 2) {
//   console.log("hello");
// }

// i = 0; j = 0
// // hello
// i = 4, j=0
// // hello
// i = 8, j = 0
// // hello
// i = 12, j = 0
// // hello
// i = 16
// // hello
// i = 20

// for (let i = 0, j = 2; i < 20 && j < 30; i += 4, j *= 2) {
//   console.log("hello");
// }

// (i = 0), (j = 2);
// // hello
// (i = 4), (j = 4);
// // hello
// (i = 8), (j = 8);
// // hello
// (i = 12), (j = 16);
// // hello
// (i = 16), (j = 32);

// var i = 0;
// while (i < 10) {
//     console.log(i)
//   i++;
//   console.log("Hello" , i);
// }

// 10 times

// console.log(Math.ceil(10.2));
// console.log(Math.floor(10.2));
// console.log(Math.random()); // randon number between 0 and 1

// Generate Random number between 0 and 100

// console.log(100 * Math.random()); // random number between 0 and 100

// console.log(Math.floor(100 * Math.random())); // integer random number between 0 and 100

// console.log(1 + Math.floor(99 * Math.random())); //   random number between 1 and 100

// Death number program

// var deathNumber = 7;
// var score = 0;
// while (true) {
//   var num = Math.floor(Math.random() * 10);
//   if (num === deathNumber) {
//     break;
//   }
//   console.log("The number generate is " + num);
//   score += 10;
// }
// console.log("Your score is " + score);

// function print(name){
//     console.log("Namaste " + name)
// }
// print("Sandeep")

// function isEven(num) {
//   return num % 2 === 0;
// }

// result1 = isEven(2);
// console.log(result1);

// function isPerfectSquare(num) {
//   for (let i = 1; i <= num; i++) {
//     var square = i * i;
//     if (square === num) {
//       return "Perfect Square";
//     }
//     // yaha continue nhi lagaoge to aage jake mud jayega nhi to yhi mud raha hai
//     if (square < num) {
//       continue;
//     }
//     if (square > num) {
//       return "Not Perfect Square";
//     }
//   }
// }

// resultofPerfectSq = isPerfectSquare(100);
// console.log(resultofPerfectSq);

// print the sum of all element in an array
// [2, 5, 2, 23, 3, 4, 4, 45] == 88;

// let givenArray = [2, 5, 2, 23, 3, 4, 4, 45];
// let sumOfElement = 0;
// for (let i = 0; i < givenArray.length; i++) {
//   sumOfElement += givenArray[i];
// }
// console.log(sumOfElement);

// print the sum of odd number and even number in an array ==> [1, 2, 3, 4, 5, 6, 7]; Odd Sum = 12, Even Sum = 16

// let givenArray = [1, 2, 3, 4, 5, 6, 7];

// let evenSumOfElement = 0;
// let oddSumOfElement = 0;

// for (let i = 0; i < givenArray.length; i++) {
//   if (givenArray[i] % 2 === 0) evenSumOfElement += givenArray[i];
//   if (givenArray[i] % 2 !== 0) oddSumOfElement += givenArray[i];
// }

// console.log("Even Sum is " + evenSumOfElement);
// console.log("Odd Sum is " + oddSumOfElement);

// You will be given temprature, if it is a greater than 35, you have to print hot, in betwee 20-35 moderate if < 20 print cold

// You have a list of marks of all student in the class. you have to calculate how much behind you are from the topper
// your marks [80, 85, 40, 14, 34, 54, 76, 32, 56, 34, 23, 76, 43];

// let marks = [80, 85, 40, 14, 34, 54, 76, 32, 56, 34, 23, 76, 43];

// let obtainedMarks = 50;
// for (let i = 0; i < marks.length; i++) {
//   var flag = 1;
//   obtainedMarks > marks[i];
//   flag++;
// }
// console.log(marks.sort())
// console.log("Behind from", marks.length - flag);
// calculate the average marks of the class, given a list of marks of all student
// [80, 65, 48, 14, 34, 76, 32, 56, 34, 23, 76, 43];

// check the number is prime or not?

// function isPrime(givenNumber) {
//   if (givenNumber < 2) {
//     return "Enter Valid Number";
//   }
//   if (givenNumber === 2) return "Prime";
//   for (let i = 2; i < givenNumber; i++) {
//     if (givenNumber % i == 0) {
//       return "Not Prime";
//     }
//     if (givenNumber % i !== 0) {
//       return "Prime";
//     }
//   }
// }

// let resultOfPrime = isPrime(41);
// console.log(resultOfPrime);

// function sum(num1, num2) {
//   var sum = num1 + num2;
//   console.log("The result is " + sum);
// }

// console.log(sum(2)); //NaN
// console.log(sum(2, 3)); // 5
// console.log(sum(2, 3, 5)); // 3rd argunment ignored

// Q. Generate the random number between 1 to 100 with function.

// function generateRandom(startNum, endNum) {
//   let randomNumber = startNum + Math.floor(Math.random() * endNum);
//   return randomNumber;
// }

// console.log(generateRandom(1, 100));

// About Global Scope
// var name = "Sandeep";
// // Global Variable
// function print() {
//   console.log("Namaste " + name);
// }
// print();

// About Local Scope

// var firstName = "Sandeep"; // access anywhere
// function print() {
// //   var firstName = "Sandeep"; // local scope because inside the function it can not be access globally
//   console.log(firstName);
// }
// // console.log(firstName); // Why it is not print on console
// print();

// function print2() {
//     // var firstName = "Mrigank";
//     console.log(firstName)
// }
// print2()

// function outerFunction() {
//   var outerVar = "Hi";
//   // is Inner variable accessible here? No
//   //   console.log(innerVar);
//   function innerFunction() {
//     var innerVar = "Hello";
//     // is outer variable accessible here? yes
//     console.log(outerVar);
//   }
//   innerFunction();
// }

// outerFunction();

// var name = "Sandeep";

// function test1() {
//   console.log("Name");
// }

// function test2() {
//   console.log(name); // Global scope
// }

// function test3() {
//   var name = "Mrigank";
//   console.log(name); // check local first
//   // priority high
// }

// test1();
// test2();
// test3();

// print(); // print karega because function is hoisting
// function print() {
//   console.log("Hello world");
// }

// when ever function declared then the declaration is hoisted on top of the scope.

// Hoisting does not happens with function expression
// greet() Error aayega
// var greet = function HelloWorld() {
//   console.log("Namaste");
// };

// console.log(HelloWorld());
// Question assignment
// prime number
// palindrome number

// Reverse a string
// let givenStr = "Sandeep Sharma";
// var revStr = "";
// for (let i = givenStr.length - 1; i >= 0; i--) {
//   revStr += givenStr[i];
// }
// console.log(revStr);

// HCF and GCD of two numbers
// factors
// 14 --> 1, 2, 7, 14 == 14 is highest common factor
// 12 --> 1, 2, 3, 4, 6, 12 == 12 is highest common factor

// 12, 14 --> Highest commom factor == 2

// function HCF(num1, num2) {
//   let currentAns = 1;
//   for (let i = 2; i <= num1 && i <= num2; i++) {
//     if (num1 % i === 0 && num2 % i == 0) {
//       currentAns = i;
//     }
//   }
//   console.log(currentAns);
// }

// HCF(12, 6);

// interview
// Create a program to get sum of all digits of a number

// function SumOfAllDigit(number) {
//   // get last digit

//   let updateNumber;
//   number = number % 10;
//   updateNumber += number;
// }

// Power function
// var answer = 1
// function powerFn(num1, num2) {
//   for (let i = 1; i <= num1 || i <= num2; i++) {
//     answer = num1 * num1;
//   }
//   console.log("Power is", answer);
// }
// powerFn(2, 3);

// Palindrome of Number?
// -------------------------------------------------------------------------------------
// var number = 19191;
// console.log(number % 10);

// function isPalinrome(num) {}

// find the index of element of an Array

// let arr = [2, 5, 8, 1, 13, 9, 1];
// var num = 13;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === num) console.log("Element found at index no " + i);
// }

// Print all digits of a number
// var num = 123456234567890;
// var str = num.toString();
// var resStr = "";
// for (var i = 0; i < str.length; i++) {
//   //   console.log(str[i]); // all the digit print but not for interview
//   resStr += str[i];
// }

// Print the sum of digit

// var num = 123456234567890;
// var str = num.toString();
// var sum = 0;
// for (var i = 0; i < str.length; i++) {
//   //   console.log(str[i]); // all the digit print but not for interview
//   sum += Number(str[i]);
// }
// console.log(sum )

// // Print the Inner sum of digit

// var num = 12345623456789;
// var str = num.toString();
// var sum = 0;
// if (str.length <=2) {
//     console.log(-1)
// }
// for (var i = 1; i < str.length - 1; i++) {
//   sum += Number(str[i]);
// }
// console.log(sum);

// print sum of all digit of numbers #method 2
// var sum = 0;
// var number = 454;

// sum += number % 10; // 4
// number = parseInt(number / 10); // 45.something because only one type
// console.log(number) // 45
// number = 45
// sum += number % 10; // 9
// number = parseInt(number / 10);

// console.log(number);

// got it
// var sum = 0;
// var number = 452340567804;
// while (number !== 0) {
//   sum += number % 10; // 4
//   number = parseInt(number / 10);
// }
// console.log("Sum of number is ", sum);

// armstrong number
// 371 armstrong
// 3^3 + 7^3 + 1^3 === 371

// var sumOfCubes = 0;
// let num = 3701;
// var originalNum = num;

// while (num !== 0) {
//   var digit = num % 10; // 3 // 7 // 3
//   sumOfCubes += digit ** 3; // 3^3 // 7^3 // 3^3
//   num = parseInt(num / 10); // 37 // 3 // 0
// }
// if (sumOfCubes === originalNum) {
//   console.log("Armstrong Number ");
// }
// if (sumOfCubes !== originalNum) {
//   console.log("Not Armstrong Number ");
// }

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// * * * * * * *

// var num = 7;
// function printStar(num) {
//   var str = "";
//   for (let i = 1; i <= num; i++) {
//     str += "* ";
//     console.log(str);
//   }
// }
// printStar(num);

// fibbonacci Series
// 0 1 1 2 3 5 8 13 21 34

// let num1 = 0;
// let num2 = 1;

// console.log(num1); // Print the first number in the series
// console.log(num2); // Print the second number in the series

// for (let i = 1; i <= 5; i++) {
//   let num3 = num1 + num2;
//   console.log(num3);

//   num1 = num2;
//   num2 = num3;
// }

// Sum of two prime numbers
// Factorial of number
// fizzbuzz problem

// Diagoanal of 2D array
// var line = [
//   [1, 2, 3],
//   [5, 6, 4],
//   [2, 3, 4],
// ];

// let Diagoanal = [];
// for (var k = 0; k < line.length; k++) {
//   Diagoanal.push(line[k][k]);
// }
// console.log("Diagonal Elements are", Diagoanal);

// function lfc(myname) {
//   console.log(10 + "lfc" + 12);
// }
// res = lfc(10);
// console.log(res);
