// Iterating over loop
// var array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// 2nd Way
// var array = [1, 2, 3, 4, 5];
// for (var elem of array) {
//   console.log(elem);
// }

// print all element with the for of and write the sum.
// var array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// var sum = 0;
// for (const row of array) {
//   for (const col of row) {
//     console.log(col);
//     sum += col;
//   }
// }
// console.log(sum);

// var names = ["a", "b", "c"];
// for (const iterator of names) {
//   // console.log(iterator)
// }

// var str = "Sandeep";
// for (const iterator of str) {
//   console.log(iterator);
// }

// var arr = [1, 2, 3, 4, 5, 6];
// num = 7 number exist in array then return true else return false
// function checkIfNumberExist(num) {
//     for (const iterator of arr) {
//         if (iterator === num) {
//             return true
//         }
//     }
//     return false
// }
// console.log(checkIfNumberExist(8))

// let students = [
//   ["A1", "A2", "A3"],
//   ["B1", "B2", "B3"],
//   ["C1", "C2", "C3"],
//   ["D1", "D2", "D3"],
// ];

// for (const row of students) {
//   for (const colElm of row) {
//     console.log(colElm);
//   }
// }

// var arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (var i = 0; i < arr.length; i++) {
//   var str = "";
//   for (var j = 0; j < arr.length; j++) {
//     if (i >= j) str += arr[i][j] + " ";
//   }
//   console.log(str);
// }

// last Element
// var lastArrayRow = arr[arr.length - 1];
// console.log(lastArrayRow) // [ 7, 8, 9 ]
// var elem = lastArrayRow[lastArrayRow.length - 1];
// console.log(elem); // 9

// for (const row of arr) {
//     for (const col of object) {
//         if(arr[row][col])
//     }
// }

// Intro to object
// There is two ways to acces the object Element
// let person1 = {
//   name: "Sandeep",
//   age: 28,
//   city: "Gopalganj",
//   hobbies: ["Singing", "Chess"],
// };
// let person2 = {
//   name: "Yasir",
//   age: 28,
//   city: "Katihar",
//   hobbies: ["Guitar", "Travel"],
// };

// let person3 = {
//   name: "Rahul",
//   age: 28,
//   city: "Bhagalpur",
//   hobbies: ["Rider", "Plant"],
//   greet: function () {
//     console.log("Hello");
//   },
// };
// let person4 = {
//   name: "Likhith",
//   age: 28,
//   city: "Guntur",
//   hobbies: ["Coding", "Gym"],
// };

// console.log(person1.name);
// console.log(person1["name"]);
// console.log(person1.wifeName)// undefined
// console.log(person3.greet())
// console.log(person3.hobbies)
// person3["greet"]() // object ke function ko aise bhi access kar sakte hai
// console.log(person3["greet"]())

// var persons = [person1, person2, person3, person4];
// Write all the name of person
// for (let i = 0; i < persons.length; i++) {
//   var foundName = persons[i].name;
//   console.log(foundName);
// }

// var car = {
//   make: "Maruti",
//   noOfWheels: 4,
//   name: "WagonR",
// };

// var property = "name";
// console.log(car.property); // not work (undefined)
// console.log(car[property]); // work
// console.log(car["make"]); // work

// agar property ko kisi or variable me hold karoge to usko access karne ke liye [] lagate hai

// 1. object[property] should be used when property is variable not a key

// var car = {
//   make: "Maruthi",
//   noOfWheels: 4,
//   name: "WagonR",
//   "fuel capacity": 35, // aisa likhte hai, agar space dena ho to
// };

// console.log(car["fuel capacity"]) // this is anothe case we have use []

// when key names have spaces in them then we have to write []

// console.log(Object.keys(car)); // array me keys dega
// console.log(Object.keys(person4)); // array me keys dega
// console.log(Object.keys(person3)); // array me keys dega
// console.log(typeof car["fuel capacity"])

// Assignment
// Reverse an array of n element
// In an array of numbers, remove all even numbers

// Print a 2D array,
// Print the sum of element of 2D array
// try to create a 3D array and try to loop over array

// var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// reverse of array elements
// let newArr = [];
// for (let index = arr.length - 1; index >= 0; index--) {
//   newArr.push(arr[index]);
// }
// console.log(newArr);

// remove all even number of array

// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let oddNum = [];
// for (let index = 0; index < arr.length; index++) {
//   if (arr[index] % 2 !== 0) oddNum.push(arr[index]);
// }
// console.log(oddNum);

// for (let index = 0; index < arr.length; index++) {
//   if (arr[index] % 2 === 0)
//   oddNum.pop(arr[index]);
// }
// console.log(oddNum);

// var person = {
//   name: "sandeep",
//   age: 25,
//   city: "Patna",
//   hobbies: ["Coding", "Football"],
// };


// How to know keys of the object
// There are three ways to know

//***************************** 1st Ways *****************************
// var keys = Object.keys(person);
// console.log(keys) // [ 'name', 'age', 'city', 'hobbies' ]

// var key1 = keys[2]; // city
// console.log(key1) //
// key1 = city;

// 2nd Ways
// console.log(person["key1"]); // key1 property hi nhi hai object me isiliye undefined
// console.log(person[key1]); // Patna

// var key1 = keys[0];
// console.log(person.key1); // undefined
// console.log(key1) // name
// console.log(person[key1]); // Sandeep

// var person = {
//   name: "sandeep",
//   age: 25,
//   city: "Patna",
//   hobbies: ["Coding", "Football"],
// };

// var keys = Object.keys(person);
// [ 'name', 'age', 'city', 'hobbies' ]
// for (let i = 0; i < keys.length; i++) {
//   const element = keys[i];
//   console.log(person[element]);
// }

// console.log(person[keys[3]][1]);

//***************************** 2nd Ways *****************************
// for in loop

// var person = {
//   name: "sandeep",
//   age: 25,
//   city: "Patna",
//   hobbies: ["Coding", "Football"],
// };

// var keys = Object.keys(person);

// for (const key of keys) {
//   // console.log(key) // key milega
//   // console.log(person[key]) // element milega
// }

// for ...in loop
// var car = {
//   name: "Honda City",
//   manufaturer: "Honda",
//   noOfWheels: 4,
//   fuelCapacity: 35,
// };

// var keysOfCar = Object.keys(car);
// // console.log(keysOfCar)

// for (var key in car) {
//   //   console.log(key); // key dega
//   //   console.log(car[key]); // value dega
// }

//***************************** 3rd Ways *****************************

// Object.entries method
// var car = {
//   name: "Honda City",
//   manufaturer: "Honda",
//   noOfWheels: 4,
//   fuelCapacity: 35,
// };

// var entries = Object.entries(car);
// console.log(entries); // array of array
// output
// [
//   ["name", "Honda City"],
//   ["manufaturer", "Honda"],
//   ["noOfWheels", 4],
//   ["fuelCapacity", 35],
// ];

// for (let i = 0; i < entries.length; i++) {
//   console.log(entries[i][0] + "---->" + entries[i][1]);
// }

// Object.values

// console.log(Object.values(car)); // [ 'Honda City', 'Honda', 4, 35 ]

// var address = {
//   city: "Patna",
//   locality: "Kankarbagh",
//   pincode: 800020,
// };

// creating new property / updating existing properties in the object
// address.state = "Bihar";
// address.country = "india";
// address.city = "Gopalganj"
// console.log(Object.keys(address));
// console.log(address);

// var person = {
//   name: "Sandeep",
//   age: 25,
//   name: "Mrigank", // prefer not to do
// };
// console.log(person.name);

// var obj = {
//   name: "Sandeep",
//   hobbies:[1,2,3]
// };

// JS object to JSON
// var str = JSON.stringify(obj)
// console.log(str)

// 2 mast Problem

// Word ==> YAGAPRAKASHANAND
// Each characters occur how many times
// frequency count

// let givenStr = "YAGAPRAKASHANAND";
// var obj = {
//   Y: 1,
//   A: 6,
//   G: 1,
//   // like that
// };
// var newObj = {};
// 1. If I give you an empty object, can you insert keys inside // yes
// 2. can you check if a key already exists in an object
// obj["Y"] !== undefined

// for (let i = 0; i < givenStr.length; i++) {
//   var letter = givenStr[i];
//   if (newObj[letter] === undefined) {
//     newObj[letter] = 1;
//   } else {
//     newObj[letter] += 1;
//   }
// }
// console.log(newObj);

// 2nd Problem
// Array of numbers frequency count of each number

// var numArray = [1, 2, 3, 4, 2, 3, 4, 3, 4, 5, 4, 5, 4, 3, 3, 1];

// var newArray = {};
// for (let i = 0; i < numArray.length; i++) {
//   var eachNum = numArray[i];
//   if (newArray[eachNum] === undefined) {
//     newArray[eachNum] = 1;
//   } else {
//     newArray[eachNum] += 1;
//   }
// }
// console.log(newArray);

// Remove all the duplicate character of the Word
// "YAGAPRAKASHANAND"

// var givenWord = "YAGAPRAKASHANAND";

// let newObj = {};
// for (let i = 0; i < givenWord.length; i++) {
//   let char = givenWord[i];
//   if (newObj[char] === undefined) {
//     newObj[char] = 1;
//   } else {
//     newObj[char] += 1;
//   }
// }
// console.log(newObj);

// console.log(Object.keys(newStr));
// let newStr = "";
// for (var key in newObj) {
//   newStr += key;
// }
// console.log(newStr);

// "BLUE UMBRELLA IN OPEN SUN" me sare vowels ka count batao

let givenSentense = "BLUE UMBRELLA IN OPEN SUN";

let newObj = {};
for (let i = 0; i < givenSentense.length; i++) {
  let char = givenSentense[i];
  if (newObj[char] === undefined) {
    if (
      char !== "A" &&
      char !== "E" &&
      char !== "I" &&
      char !== "O" &&
      char !== "U"
    )
      continue;
    newObj[char] = 1;
  } else {
    newObj[char] += 1;
  }
}
let str = "";
for (const key in newObj) {
  str += key;
}
console.log(str);
