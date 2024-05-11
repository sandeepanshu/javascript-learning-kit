// Destructure
// var arr = [1, 2, 3, 4, 5, 7];
// var num1 = arr[0];
// var num2 = arr[1];
// var num3 = arr[2];
// var num4 = arr[3];
// var num5 = arr[4];

// var [num1, num2, num3, num4, num5, num7] = arr;
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num7);

// var person = {
//   name: "Sandeep",
//   age: 25,
// };

// var age = person.age;
// var name = person.name;

// console.log(age)
// console.log(name)

// iske badle ham ye likh sakte hai
// destructure  kar diye (In case of object variable should must be match )
// var { age, name, city } = person;
// console.log(age);
// console.log(name);
// console.log(city); // undefined

// Higher order function
//  In Higher order function, the parameter to the function is function

// works on arrays
// forEach, map, filter

// var arr = [1, 2, 3, 4, 5];
// arr.forEach(function (el) {
//   console.log(el);
// });

// var log = function(el){
// console.log(el)
// }

// arr.forEach(log);

// Map function
// var arr = [1, 2, 3, 4, 5];
// console.log(arr.join(""))

// Map method is used to convert the array to a new array
// Returns a new array
// The function parameter should return a new value
// and the new value will be inserted in the new array

// var arr = [1, 2, 3, 4, 5];

// function double(el) {
//     console.log(el*3)
// }
// var newArr = arr.map(double)
// console.log(newArr)

// filter method
// filter method parameter returns true, the value is included in the result array, else if it return false the value is not included in the result array

// var numArray = [1, 2, 3, 4, 5, 6, 7, 8];
// function isEven(el) {
//   if (el % 2 === 0) return true;
//   else return false;
// }
// var result = numArray.filter(isEven);
// console.log(result);

// Home Work Assignment

// arr = ["w", "a", "w", "u", "p"];
// Write a program to filter the vowels in the array
// let arr = ["w", "a", "w", "u", "p"];

// let result = arr.filter((el) => {
//   if (el === "a" || el === "e" || el === "i" || el === "o" || el === "u")
//     return true;
// });
// console.log(result);

// var str = "dfdsfgsfdgbdfvbdsfghnm";
// write a program to count the frequency of each character

// var givenStr = "dfdsfgsfdgbdfvbdsfghnm";
// let newStrObj = {};
// for (let i = 0; i < givenStr.length; i++) {
//   let eachChar = givenStr[i];
// //   console.log(newStrObj[eachChar])
//   if (newStrObj[eachChar] === undefined) {
//     newStrObj[eachChar] = 1;
//   } else {
//     newStrObj[eachChar] += 1;
//   }
// }
// console.log(newStrObj);

// var arr = [1, 2, 3, 4, 5, 6, 7];
// write a program to create a new array that convert this array to [1, 3, 5, 7, 11, 13]; *(2i-1)
// var arr = [1, 2, 3, 4, 5, 6, 7];
// let result = arr.map((e) => {
//   return 2 * e - 1;
// });
// console.log(result);


