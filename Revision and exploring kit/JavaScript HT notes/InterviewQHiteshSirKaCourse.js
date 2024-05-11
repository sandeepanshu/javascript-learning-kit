// 1. let const and var me difference?
// const means value ko lock kar diya jata hai means change nhi kar sakte hai (Change not allowed for const).

// lecture 5 01_variable.js
// -----------------------------------
// {} ko hi scope bolte hai

// javascript me without const, let, var ke bhi variable declare kar sakte hai
// example
withoutKeyword = "Something";
// console.log(withoutKeyword);

let declareVar; // value declare karke chhor dete hai or value kuchh nhi lagate hai to uski value undfined ho jati hai.
// console.log(declareVar); // undefined

("use strict"); // treat all JS code as newer version
// alert( 3 + 3) // we are using nodejs, not browser
console.log(3 + 3); // code readability should be high

// Premitive datatypes
// number, bigInt, string, boolean, null, undefined, Symbol

// Non Premitive Data types

console.log(typeof undefined); // undefined
console.log(typeof null); // object (means ye khali hai, empty hai)
console.log(typeof NaN); // Number (Hey sala)
console.log(typeof Symbol); // uniqueness define karne ke liye use hota hai

// ek or baat bhai
// typeof, typeof()  dono tarike se likh sakte ho

let score = "33abc";
let valueNumber = Number(score);
console.log(valueNumber); // Ans to NaN aayega but
console.log(typeof valueNumber); //sala ye Number hoga

let score2 = null;
let conv_null = Number(score2);
console.log(conv_null); // 0 aayega.
console.log(typeof conv_null); // number
console.log(typeof score2); // object (null ka type object hota hai)

// convert hoga isme
// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

// Boolean conversion
// let isBoolean = false
// let isBoolean = true
// let isBoolean = 1
// let isBoolean = 0
// let isBoolean = null
// let isBoolean = ""
// let isBoolean = NaN
let isBoolean = undefined;

let convertedBoolean = Boolean(isBoolean);
console.log(convertedBoolean); // false/true

// Boolean Conversion Notes
// 1 => true
// 0 => false
// null => false
// "" => false
// "Sandeep" => true
// NaN => false
// undefined => false
// "stringblabla" => true

// let someNumber = 23
// let someNumber = "23"
// let someNumber = ""
// let someNumber = null
let someNumber = true;

let stringNumber = String(someNumber);
console.log(stringNumber); // 23
console.log(typeof stringNumber); // string

// console.log("1" + 2); // 12 (string type)
// console.log(1 + "2"); // 12 (string type)
// console.log("1" + 2 + 2); // 122 (string type)
// console.log(1 + 2 + "2"); // 32 (string type)

// console.log( (3 + 4) * 5 % 3); // 35 % 3 == (35 -33) = 2

// console.log(true); // true
// console.log(+true); // 1
// console.log(+""); // 0

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2
// console.log(num1) // 4
// console.log(num2) // 4
// console.log(num3) // 4

// let gameCounter = 100;
// gameCounter++; 
// console.log(gameCounter); // 101

// ++gameCounter;
// console.log(gameCounter); // 101 

// Comparison 
// console.log("2" > 1); // true
// console.log("02" > 1); // true

// console.log(null > 0); //  0> 0false 
// console.log(null < 0); // false 
// console.log(null == 0); // false
// console.log(null === 0); // false
// console.log(null >= 0); // true

// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false 