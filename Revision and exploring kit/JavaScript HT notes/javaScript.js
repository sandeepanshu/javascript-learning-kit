// Q.1 	Difference Between let, const and var

// Ans ->  let, const, and var are keywords used to declare variables in JavaScript, but they
// have some key differences in terms of scope, hoisting, and re-assignment. Here's a brief overview of each:

// var (Variable Declaration):

// var is the oldest way to declare variables in JavaScript.
// Variables declared with var are function-scoped, meaning they are limited to the function in which they are declared.
// var variables are hoisted, which means they are moved to the top of their scope during the compilation phase. However,
// only the declaration is hoisted, not the initialization.

// function example() {
//   console.log(x); // undefined (hoisted declaration)
//   let x = 5;
//   console.log(x); // 5
// }

// let (Block-Scoped Variable Declaration):

// Introduced in ECMAScript-6 (ES6), let allows for block-scoped variable declarations.
// Variables declared with let are limited to the block, statement, or expression in which they are used.
// let variables are hoisted, similar to var, but the temporal dead zone (TDZ) prevents access to the variable
// before the actual declaration.

// function example() {
//   console.log(x); // ReferenceError: Cannot access 'x' before initialization
//   let x = 5;
//   console.log(x); // 5
// }

// const (Constants):

// Also introduced in ES6, const is used to declare constants, whose values cannot be re-assigned after initialization.
// Like let, const is block-scoped.
// const variables must be initialized at the time of declaration, and attempts to reassign them will result in an error.

// const pi = 3.14159;
// pi = 3; // Error: Assignment to constant variable

// Q2. JS Data types:

// Ans-> Data types specify the kind of data stored Datta types in JS can be divided into 3 main categories
// 1  Primitive: String Number and Boolean
// 2. Composite: Object Array and Function.
// 3. Special: Undefined and null.

// 3. Function Arguments vs Function Parameters
// Ans. ● Function parameters are the variable names listed in the function definition.
// 	    ● Function arguments are the real values passed to (and received by) the function.

// 4.   Function expression
// Ans. The syntax that we used earlier for creating a function is called a function declaration.
// 	    There is another syntax for creating a function that is called a function expression.
// 	 Ex.
// 	 let sayHi = function (){
// 	 console.log("Hi")
// 	 }
// 	 sayHi()

// 5. Function hoisting?
// Hoisting allows functions to be safely used in code before they are declared. Consider the
// function add defined below:
// EX-->
// add(2, 3);
// function add(a, b) {
//   console.log(a + b);
// }
// The result of this code is 5.

// Function expressions are not hoisted
// In the case of functions, only function declarations are hoisted–but not the function
// expressions. Hence, the below piece of code would throw an error.

// add(2,3);
// var add = function (a,b){
// console.log(a+b);
// }

// What is scope?
// Scope is the accessibility of variables, functions, and objects in some particular part of  your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

// In the JavaScript language there are two types of scopes:
// ● Global Scope
// ● Local Scope

// Global Scope
// When you start writing JavaScript in a document, you are already in the Global scope. There
// is only one Global scope throughout a JavaScript document. A variable is in the Global
// scope if it’s defined outside of a function.

// var name = "Sandeep"
// console.log(name) // logs 'Sandeep'

// function logName(){
// console,log(name); // name is accessible here and every where.
// }
// logName();
// In the above code, the variable name is defined in the global scope and is accessible
// anywhere in the document

// Local scope
// Variables defined inside a function are in the local scope. And they have a different scope for every call of that function. This means that variables having the same name can be used in different functions. This is because those variables are bound to their respective functions, each having different scopes, and are not accessible in other functions.

// Global Scope
// function someFunction(){
// // local Scope #1
// function someOtherFunction(){
// // local Scope #2
// }}

// // Global Scope
// function anotherFunction() {
// Local Scope #3
// }
// # Global Scope

// What are Conditional statements?
// Condition statements are used to decide the flow of execution based on specified
// conditions within a block of code. In JavaScript, we have below enumeration variations
// of conditional statements:n
// if/else-if/else
// Switch case
// Ternary operator

// What are Iterative statements?
// When a specific code block is to be re-executed for a certain number of times based on
// specific conditions, we use iterative statements. In JavaScript, we have below available
// variants for iterative statements:n
// for
// for/in
// for/of
// while
// do/while

//  Program 1. Write a program to find the HCF or GCD of two integers.

// let hcf_value;
// const firstNumber = 16;
// const secondNumber = 8;

// // looping from numberOne to numberTwo
// for (let i = 1; i <= firstNumber && i <= secondNumber; i++) {
//   // Check factor of both integers
//   if (firstNumber % i == 0 && secondNumber % i == 0) {
//     hcf_value = i;
//   }
// }
// console.log(hcf_value);

// program 2. Create a program to reverse a string.
// function reverseString(stringValue) {
//   let updatedString = "";
//   for (let iterator = stringValue.length - 1; iterator >= 0; iterator--) {
//     updatedString += stringValue[iterator];
//   }
//   return updatedString;
// }
// const inputString = "Coding is Fun";

// const output = reverseString(inputString);
// console.log(output);

// Program 3. Create a program to get sum of all digits of a number.

// function generateSumOfDigit() {
//   var output = 0;
//   while (numberPassed != 0) {
//     output = numberPassed % 10;
//     numberPassed = parseInt(numberPassed / 10);
//   }
//   return output;
// }

// // Driver Code
// var value = 687;
// console.log(generateSumOfDigit(value));

// Program 4. Find if a given number is an Armstrong number or not.

// let outputValue = 0;
// let inputValue = 153;

// // create a temprary variable
// let tempraryValue = inputValue;
// while (tempraryValue > 0) {
//   // finding one's digit
//   let remainderValue = tempraryValue % 10;
//   outputValue += remainderValue * remainderValue * remainderValue;
//   // removing last digit from the number
//   tempraryValue = parseInt(tempraryValue / 10); // convert float into integer
// }

// // check the condition
// if (outputValue == inputValue) {
//   console.log("armstrong");
// } else {
//   console.log("Not armstrong");
// }

// 5. print all the prime number up to given number value.

// var numberCount = 10;

// for (var prime_iterator = 2; prime_iterator <= numberCount; primeIterator++) {
//   var isPrime = true;
//   for (var divident = 2; divident <= Math.sqrt(prime_iterator); divident++) {
//     // nested loop
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime) {
//   document.write(prime_iterator + " ");
// }

// List of Concepts Involved

// ● Arrays

// - Array Types
// - Array Declaration
// - Array Creation
// - Array Operations
// - Array Basic Problems

// ● Objects

// - Objects Creation
// - Access Objects
// - Objects Looping
// - Objects Basic Problems

// Array Declaration and Creation
// 1. An array can be created using array literal or new keyword in JavaScript
// 2. Array literal syntax -
// var stringArray = ["one", "two", "three"];
// console.log(stringArray);
// var numericArray = [1, 2, 3, 4, 5];
// console.log(numericArray);

// 1. Array using new keyword -
// var numericArray = new Array(3);
// console.log(numericArray) 3 empty items

// var numericArray = new Array("cat", "dog");
// console.log(numericArray);

// Common Operations
// for…of loop
// This loop helps in iterating over iterable objects like String, Array Object and so on.
// Syntax -
// for (variable of iterableObject ) {
//  statement;
//  }

// Example -
// const obj = [10, 20, 30];
// for (const val of obj) {
//   console.log(val);
// }
// Output -
// 10
// 20
// 30

// Create Objects

// ● Object Literal: The easiest and the most common way of creating an
// object is using Object Literals.

// Creating object using Object literal
// const laptop = {
//   make: "Dell",
//   model: "Alienware",
//   memory: ["SSD", "HDD"],
//   cores: 8,
//   memorySize: [256, 512],
// };
// console.log(laptop);

// ● Object.create method: There is an inbuilt function for creating an
// object in javascript

// Creating object using create method
// const laptop = {
//   make: "Dell",
//   model: "Alienware",
//   memory: ["SSD", "HDD"],
//   cores: 8,
//   memorySize: [256, 512],
// };
// const laptopObj = Object.create({});
// laptopObj.property1 = "value1";
// laptopObj.property2 = "value2";
// console.log(laptopObj);

//  Access properties of objects
//  The most popular way to access an object is using the '.' (dot) operator.
// const laptop = {
//   make: "Dell",
//   model: "Alienware",
//   memory: ["SSD", "HDD"],
//   cores: 8,
//   memorySize: [256, 512],
// };
// console.log(laptop.make);
// console.log(laptop.model);
// console.log(laptop.memory);
// console.log(laptop.memorySize);
// console.log(laptop.cores);

// Access properties of objects
// Note: We need to make sure that along with object[] we are using " " to access the property.
// Example.

// laptop["model"];
// const laptop = {
//   make: "Dell",
//   model: "Alienware",
//   memory: ["SSD", "HDD"],
//   cores: 8,
//   memorySize: [256, 512],
// };
// console.log("Laptop Specifications:");
// console.log(laptop["model"]);
// console.log(laptop);

// Output:
// Laptop Specifications
// {
// make: ‘Dell’,
// model: ‘Alienware’,
// memory: [‘SSD’, ‘HDD’],
// cores: 8,
// memorySize: [ 256, 512 ]
// }

// Access properties of objects
// Objects can also have methods as their properties:
// const laptop = {
//   make: "Dell",
//   model: "Alienware",
//   memory: ["SSD", "HDD"],
//   cores: 8,
//   memorySize: [256, 512],
//   getModel: function () {
//     return this.model;
//   },
// };
// console.log(laptop.getModel()); //Alienware
// console.log(laptop["getModel()"]); // undefined
// console.log(laptop["getModel"]()); // Using square bracket notation

// Looping through an object
// 1. Using a for...in a loop
// The most common and easy way to implement loop through an object's properties is by using the for...in statement:
// Here is an example that implements for…in loop over an object:
// const array_for_userdata = {
//   name: "Ben Accord",
//   email: "ben.english@example.com",
//   age: 25,
//   dob: "08/12/1996",
//   active: true,
// };
// iterate over the user object
// for (const key in array_for_userdata) {
//     console.log(key);
//     console.log(array_for_userdata[key]);
//     console.log(`${key}: ${array_for_userdata[key]}`);
// }

// Looping through an object
// 2. Object.keys () method
// The Object.keys() method makes it easier to loop over objects.
// Object.keys() method takes the object that we want to loop over as an argument and returns the elements in an array that contains all properties names (or keys).

// const array_name_for_courses = {
//   java: 15,
//   javascript: 78,
//   nodejs: 38,
//   php: 96,
// };

// to implement conversion object to key's array
// const keys = Object.keys(array_name_for_courses);
// to print all keys
// console.log(keys); // sabhi key Array [ 'java', 'javascript', 'nodejs', 'php' ] me print karta hai

// iterate over object
// keys = [ 'java', 'javascript', 'nodejs', 'php' ] Array me result aayega

// keys.forEach((key, index) => {
//   console.log(`${key}: ${array_name_for_courses[key]} and ${index}`);
// });
// Output:
// java: 15 and 0
// javascript: 78 and 1
// nodejs: 38 and 2
// php: 96 and 3

// Looping through an object
// 3. Object.entries () method
// This the third method known as Object.entries() another method that can be used for traversing an array.
// Object.entries() gives outputs of an array of arrays that consists of each inner array having two elements. The first element is considered being the property and the second element is the value.

// const array_animals = {
//   lion: 1,
//   giraffe: 2,
//   tiger: 3,
//   elephant: 4,
// };
// const entries = Object.entries(array_animals);
// console.log(entries);

// Output: (Array of Arrays)
// [ [ 'lion', 1 ], [ 'giraffe', 2 ], [ 'tiger', 3 ], [ 'elephant', 4 ] ]

// 4. Object.values () method
// Looping through The Object.values() method works directly opposite to that of Object.key().
// Object.values() method functions by returning the values of all properties in the object as an array.
// We can also then loop through the values of the array by using any of the array looping methods.
// Example for Object.values() method:
// const array_of_animals = {
//   lion: 1,
//   horse: 2,
//   giraffe: 3,
//   elephant: 4,
// };
// iterate over object values
// let x = Object.values(array_of_animals)
// console.log(x) //[ 1, 2, 3, 4 ] Gives Values
// Object.values(array_of_animals).forEach((val) => console.log(val));

// Output:
// 1
// 2
// 3
// 4

// 5. Object.assign method
// Object.assign method is used to assign one or more source objects and to form a new object.
// clone object using assign method

// const laptop = {
//   make: "Dell",
//   model: "Alienware",
//   memory: ["SSD", "HDD"],
//   cores: 8,
//   memorySize: [256, 512],
// };
// const laptopObjCopy = Object.assign({}, laptop);
// console.log(laptopObjCopy)
// Output
// {
//     make: 'Dell',
//     model: 'Alienware',
//     memory: [ 'SSD', 'HDD' ],
//     cores: 8,
//     memorySize: [ 256, 512 ]
//   }

// JSON JavaScript Object Notation
// JSON stands for JavaScript Object Notation. It is basically a widely accepted format to exchange data between various application including client-server applications as well and also a great alternative to XML.
// The file containing JSON objects is saved with the extension .json.

// Difference between JSON Object and Javascript Object:

// Through JSON Object and Javascript Object have a close resemblance as both are key:value pairs there are few things we need to note
// ● Property name/key are always in double quotes " " in JSON.
// ● The keys are any valid string, but the JSON values can only be one of the six data types (strings, numbers, objects, arrays, boolean, null). Unlike in Javascript Objects, the values can be anything, as we saw earlier.

// Application of JSON
// ● Helps you to transfer data from a server to client
// ● Sample JSON file format helps in transmitting and serializing all types of structured data.
// ● Allows you to perform asynchronous data calls without the need to do a page refresh
// ● It is widely used for JavaScript-based applications, which includes browser extension and websites.
// ● You can transmit data between the server and web application using JSON.
// ● It is used for writing JavaScript-based applications that include browser add-ons.
// ● Web services and Restful APIs use the JSON format to get public data

// Object Function
// 1) object.freeze()
// The object.freeze() method freezes an object for preventing the changes.
// ● A frozen object can no longer be changed
// ● freezing an object prevents new properties from being added to it existing properties from being removed
// ● prevents changing the enumerability, configurability, or writability of existing properties
// ● prevents the values of existing properties from being changed
// const obj = {
//   prop: "relevel",
// };
// Object.freeze(obj); //Means freeze karne ke baad same uper wala object hi rah jayega, badlega nhi
// obj.prop = "relevels";
// // Throws an error in strict mode
// console.log(obj.prop);
// // expected output: relevel

// object.seal()
// The object.seal() method seals an object
// ● Prevent new properties from being added to it
// ● Mark all existing properties as non-configurable
// ● Values of present properties can still be changed as long as they are writable.

// const object1 = {
//   property1: "relevel",
// };

// Object.seal(object1);
// object1.property1 = "relevels";
// // console.log(object1.property1);
// // expected output: relevels

// delete object1.property1; // cannot delete when sealed
// console.log(object1.property1);
// expected output: relevels

// object.isSealed();
//  The object.isSealed() method determines if an object is sealed.
// const object1 = {
//   property1: 42,
// };
// console.log(Object.isSealed(object1));
// // expected output: false
// Object.seal(object1);
// console.log(Object.isSealed(object1));
// expected output: true

// object.is()
// The object.is() method is used to compare two values and return true if both are same
// console.log(Object.is("relevel", "relevel")); // true

// Higher Order Array Methods
// • Higher order functions operate on other functions, either by receiving them as arguments or by returning them. It is a function that accepts a function as a parameter or returns a function as the output.
// • Let’s look at most commonly used such methods of arrays

// map function
// This is one of the simplest functions you are going to use while working with Arrays. It forms a new array by calling the function passed into it as an argument, on each and every element of the Array.
// It will map each of the return values of the callback and create a new array.
// The callback passed to the map() function can accept any of the three arguments: item, index, array.

// Example 1
// Given an array of integers, create a new array that will have double of each element in the first array and then log it in the console.
// Solution:
// var input = [2, 6, 7, 15];
// var output = input.map((n) => n * 2);
// console.log(output); // console: [4, 12, 14, 30]

// Example 2
// Given an array of nouns in singular form, create a new array that stores the plural noun of each word in the first array, and log it to the console (assume that the singular nouns can be made plural by adding a 's').

// Solution:
// var input = ["pencils", "kite", "code"];
// var output = input.map((word) => word + "s");
// console.log(output); // console: ['pencils', 'kites', 'codes']

// filter function
// The filter() function is used while creating a search bar with a given list of items. The filter() method also creates a new array by executing the passed callback on every element of the array, and keeps it in the resulting array IF and ONLY IF the element passes the Boolean test returned by the callback.

// The callback passed into the filter() method accepts any of the three arguments: item, index and array; same as the map() method.

// Example 1
// Given an array of costs of different items, create a new array with the costs from the input array if the cost is <= 50 rupees and print it.
// Solution:
// var input = [100, 300, 65, 15, 45, 30, 5];
// var output = input.filter(itemCost => itemCost <= 350);
// console.log(output) // console: [15, 45, 30, 5];

// reduce function
// The reduce() function creates a new array, executing the callback passed into it on each and every element, and
// outputs a single value. It does something on every element and keeps a record of the calculations in an accumulator variable and when no more elements are left, it returns the accumulator.

// The reduce() function itself takes two inputs:
// (a) the reducer function also called callback function and
// (b) a starting point or initialValue which is optional.
// The reducer function or the callback accepts 4 arguments: accumulator, currentItem, index, array.
// If the optional initialValue is given, the accumulator at the first iteration will be equal to the initialValue and the currentItem will be equal to the first element in the array. Otherwise, the accumulator would be equal to the first item in the input array, and the currentItem will be equal to the second item in the array.

// Example
// 1. Given an array of numbers, find the sum of elements of the array.
// Solution:
// var input = [1, 2, 3, 4];
// var sum = input.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // console: 10

// 2. Given an array of numbers, find the sum of every element in the array, starting with 5, and log the result to the console
// Solution:
// var input = [1, 2, 3];
// var sum = input.reduce((acc, curr) => acc + curr, 5);
// console.log(sum); // console: 11

// Note: Here, we are passing the optional initialValue parameter to the reduce() function, saying that we want to start with 5 and do whatever we want inside the callback

// foreach Function
// The forEach function is similar to the
// for(let i = 0; i < array.length, i++){}
// syntax.
// It loops through the array and runs the given callback for each of the elements of the array.
// The callback function passed to the forEach function can accept the currentItem, index, array.

// Example: Given an array of numbers, log every number to the console.
// Solution:
// var arr = [1, 2, 3, 4, 5, 6];
// arr.forEach((val) => console.log(val));

// console output:
// 1
// 2
// 3
// 4
// 5
// 6

// The big difference between the map and forEach method is that the map method creates a new array, "mapping" the return value of the callback and create a new array, while the forEach method just iterates over the array.

// sort function
// Sort function is used to sort the array based on the callback function condition and it should sort ascending order by default

// Example
// Sorting of an array of numbers
// let numbers = [4, 12, 2, 45, 36, 16, 700];
// Sorting from Lowest to highest
// let lowestToHighest = numbers.sort((a, b) => a - b);
// console.log(lowestToHighest)
// Output: [2, 4, 12, 16, 36, 45, 700];
// Sorting from Highest to lowest
// let highestTOLowest = numbers.sort((a, b) => b - a);
// console.log(highestTOLowest);
//Output: [700,45,36,16,12,4,2]

// Reverse function
// As name indicate it will reverse the array
// const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// const reverseNumbers = numbers.reverse();
// console.log(reverseNumbers);
//Output: [0,1,2,3,4,5,6,7,8,9]

// split function
// split function is used to split the string and form an array based on the delimiter.
// It will accept a delimiter as an argument and it will split the array based on the delimiter and creates a new array

// const str = "relevel";
// const splitStr = str.split("");
// console.log(splitStr); // ['r', 'e', 1' 'e', 'v', 'e', '1']

// slice function
// The slice() method returns a copy of a portion of an array into a new array selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const animals = ["ant", "bison", "camel", "duck", "elephant"];
// console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
// console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

// Destructuring in Javascript:
// Destructuring in Javascript is an expression that makes it achievable to unpack values from properties from objects. We can extract the data from objects and assign them to distinct variables. The value that should be unpacked from the sourced variable is defined on the left-hand side.

// Need for Object destructuring:

// Without Object destructuring we access the object items as below
// let avenger = {
//   realName: "Tony Stark",
//   city: "California",
//   heroName: "Iron Man",
// };

// let realName = avenger.realName;
// let city = avenger.city;
// let heroName = avenger.heroName;

// console.log(realName); // Tony Stark
// console.log(city); // California
// console.log(heroName); // Iron Man

// Here we are writing the same code to extract object elements.
// Object destructuring saves us from this tedious process and is also efficient enough to save our time.
// Object destructuring is more or less similar to Array destructuring.

// Object Destructuring
// Example 1:
// Simple Destructuring assignment on Object
// let newAvenger = {
//   realName: "Tony Stark",
//   city: "California",
//   heroName: "Iron Man",
// };
// let { realName, city, heroName } = newAvenger;

// console.log(realName); // Tony Stark
// console.log(city); // California
// console.log(heroName); // Iron Man

// Example 2:
// let { realName, city, heroName } = {
//   realName: "Tony Stark",
//   city: "California",
//   heroName: "Iron Man",
// };
// console.log(realName); // Tony Stark
// console.log(city); // California
// console.log(heroName); // Iron Man

// Object Destructuring
// Example 3:
// Declaring the variables before destructuring assignment
// let newAvenger = {
//   realName: "Tony Stark",
//   city: "California",
//   heroName: "Iron Man",
// };
// // let realName, city, heroName;
// let {realName, city, heroName} = newAvenger;
// console.log(realName); // Error : "Unexpected token ="
// Note:
// As we can see here there is an unexpected output as Error : "Unexpected token ="
// This is because the syntax that we used for using previously declared variables in Array destructuring is different for object destructuring.

// We need to wrap the entire destructuring assignment in round parenthesis ( ). This is because the { } braces on the left-hand side are considered as a block and not object literal. We need to note that the () should be preceded by a semicolon. Otherwise, it may execute a function from the previous line.

// Example 4:
// let newAvenger = {
//   realName: "Tony Stark",
//   city: "California",
//   heroName: "Iron Man",
// };
// let realName, city, heroName;
// ({ realName, city, heroName } = newAvenger);
// console.log(realName); // Tony Stark
// console.log(city); // California
// console.log(heroName); // Iron Man
// };

// Note:
// We have the same variable names as declared inside the object.
// Let's see what we get if the names are different.

// Example 5:
// let newAvenger = {
//   realName: "Tony Stark",
//   city: "California",
//   heroName: "Iron Man",
// };

// let realName, location, heroName;
// ({ realName, location, heroName } = newAvenger);
// console.log(realName); // Tony Stark
// console.log(location); // undefined
// console.log(heroName); // Iron Man

// As we have used a "location" instead of "city," we get undefined as a result.
// Object Destructuring using new variable name:
// In case we want to use different names, we can do that as below

// Example 6:
// let newAvenger = {realName: 'Tony Stark', city: 'California', heroName: 'Iron Man'};
// let realName, location, heroName;
// ({realName: fooName, city: location, heroName: barName} = newAvenger);
// console.log(fooName); // Tony Stark
// console.log(location); // California
// console.log(barName); // Iron Man
// Here we have assigned the values to fooName, location and barName.

// Using Default values:
// Example 7:
// let newAvenger = {realName: 'Tony Stark', city: 'California', heroName: 'Iron Man'};
// let {realName = 'Downey Jr', location = 'Malibu'} = newAvenger;
// console.log(realName); // Tony Stark
// console.log(location); // Malibu

// Here the realName was changed to "Tony Stark," but the location had the default value as "Malibu" as there is no
// corresponding element location in the extracted object.

// Using Computed property name
// Example 8:
// Using Computed property name, we can specify the name of a property via an expression if we put it in square
// brackets:
// Note that the property name should be a string.
// let prop = "realName";
// let {[prop] : foo} = {realName: 'Tony Stark', city: 'California', heroName: 'Iron Man'};
// console.log(foo); // Tony Stark

// Combination of Array and Object Destructuring
// We can also use arrays with objects in object destructuring.
// Example 9:
// let newAvenger = {realName: "Tony Stark", city: ["California", "Malibu"], heroName: "Iron Man"};
// let {realName: foo, city: bar} = newAvenger;
// console.log(foo); // Tony Stark
// console.log(bar); // ["California", "Malibu"]

// Object Destructuring in Nested Objects
// Example 10:
// let newAvenger = {
//   realName: "Tony Stark",
//   location: {
//     country: "USA",
//     city: "California",
//   },
//   heroName: "Iron Man",
// };
// let {
//   realName: foo,
//   location: { country: bar, city: x },
// } = newAvenger;
// console.log(foo); // Tony Stark
// console.log(bar); // USA
// console.log(x); // California

// Rest in Object Destructuring
// Example 11:
// let newAvenger = {
//   realName: "Tony Stark",
//   country: "USA",
//   city: ["California", "Malibu"],
//   heroName: "Iron Man",
// };
// let { realName, country, ...restOfDetails } = newAvenger;
// console.log(realName); // "Tony Stark"
// console.log(restOfDetails); // { city: [ 'California', 'Malibu' ], heroName: 'Iron Man' }
// The object elements/properties which do not have the corresponding variable names are assigned to the rest of the details.

// Pure Function (568)
// • Pure function does not change the state of variables out of its scope and it will always return same output if we pass the same input multiple number of times.
// • The above definition is little bit hard to understand, so let me explain this with example.
// • This real time example will show whenever you are studying about our planet earth every time the statement ‘Earth is a planet’ is same.

// Impure Function (570)
// • Impure function will change the state of variables out of its scope and it will always return different output if we pass the same input multiple number of times.
// • The above definition is little bit hard to understand, so let me explain this with example.
// • This above real time example will show whenever you are studying about pluto in school days we heard that pluto is the 9th planet in our solar system but now pluto is not a planet. It shows that every time it is changing and it has side effects.

// Pure Function (571)
// It has no side-effects
// It will return same output if same arguments are passed how many times it executes
// It will always returns something
// It is useful in some use cases
// It has no side-effects

// Impure Function
// It may have side-effects
// it will return different output if same argument passed on multiple times
// It may take effect without returning anything
// It is useful in some use cases

// Closure
// • Closure is one of the important concept in Javascript. It is widely discussed concept in javascript world and still confusing concept. Let’s understand closure in very simple ways.
// • Closure is a function having access to the parent scope, even after the parent function has closed.

// • Lets quickly check this definition by splitting the definition
// o Closure is a function having access to the parent scope => which means a function(Parent function) is returning a function(child function)
// o even after the parent function has closed => the variable which are present in the parent functions are accessible from the child function after called the parent function.

// Higher Order Function
// • Higher Order Function (HOF) are functions that takes other function as argument or return function as a result. I hope you are familiar with Arrays and their functions.

// • Let me take you into deeper in this HOF concept. Arrays function such as map, filter, sort, reduce, forEach and so on are Higher Order function because these functions accept function as an argument and return desired output. (592)

// Composability

// • Function composition is a mechanism of combining multiple simple functions to build a more complicated one. The result of each function is passed to the next one.
// • In mathematics, we often write something like: f(g(x)). So this is the result of g(x) that is passed to f. In programing we can achieved the composition by writing something similar.
// • Let's take a quick example. Suppose I need to make some arithmetic by doing the following operation: 2 + 3 * 5. As you may know, the multiplication has the priority over the addition. So you start by calculating 3 * 5 and then when add 2 to the result.

// Currying
// • Currying is when you break down a function that takes multiple arguments into a series of function that each take only one argument.
// • In the below example curryAdd function is returning a series of function and at the last function it is returning the value.

// Arrow Function
// • Traditional function expressions are function [name]([param1[, param2[, ...,
// paramN]]]) {
// statements
// }
// • The difference between named and unnamed functions are, If function
// name is omitted, it will be the variable name (implicit name). If function
// name is present, it will be the function name (explicit name).
// • Unnamed functions are called as anonymous function.
// • Arrow function is a different form of writing function compare to
// traditional function and it was introduced in the year 2015 ES6
// (ECMAScript6) edition. They are less verbose than traditional function
// expression.
// • Let’s have a quick example and comparison of Arrow function with
// traditional function.
// • Arrow functions are new way to write an anonymous function and are
// similar to Lamda function in other programming languages.
// • Syntax: (argument) => { … Logic}

// Function – A first class citizen
// Function in javascript are first class citizen which means you can
// store function in a variable, pass function as an argument, return
// function as a result.

// IIFE (Immediately Invoked Function
// Expression)
// • IIFE is a function that runs as soon as it is declared. Example will help you to understand what is IIFE.
// • This is similar to declaring the function and invoking the function but only difference here is it will invoke as soon as it is declared.

// Advantages

// Secure Variables Scope
// As you know var keyword scope is global so to secure the reference we can use IIFE
// (function () {
//   var greeting = "Good morning! How are you today?";
//   console.log(greeting); // Good morning! How are you today?
// })();
// console.log(greeting); // error: Uncaught ReferenceError: greeting is not definedAs you can see in the example above,

// what happens in the IIFE scope, stays in the IIFE scope. You can’t use the variable defined inside IIFE from the outside.
// Avoid Naming Conflict
// Using many JavaScript libraries can cause conflicts because some of them might export an object with the same name.
// Let’s say you’re using jQuery. We all know it export $ as its main object. So, if there’s any library in your dependencies
// using $ as its exported object as well, a conflict will occur.
// Fortunately, you can use IIFEs to solve this problem by applying the aliasing technique:
// (function ($) {
//  // You’re safe to use jQuery here
// })(jQuery);
// By wrapping your code inside an IIFE that takes jQuery as an argument, we will make sure that the $ symbol now refers
// to jQuery, not other libraries.

// Taking user input in JS
// • We can take user input in various way using javascript, but as a beginner we
// should be aware of the prompt which will get user input and do the logic as per
// the next process.
// • JavaScript has a few window object methods that you can use to interact with
// your users. The prompt() method lets you open a client-side window and take
// input from a user.

// Closure
