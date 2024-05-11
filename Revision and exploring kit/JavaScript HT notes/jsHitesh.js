const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

// const MyName = "Sandeep";
// const repoCount = 40;

// console.log(repoCount + " Value");

// console.log(`Hello my name is ${MyName} and my repo count is ${repoCount}`);

// String 
// -------------------
const gameName = new String("sandeep-sharma-dot-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4) //
// console.log(newString);

// const anotherString = gameName.slice(0, 4);
// console.log(anotherString);

// const newStringOne = "   sandeep    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://sandeep.com/sandeep%20sharma";

// console.log(url.replace("%20", "-"));

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));
// ----------------------------------------------------------------------------------------------

// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);
// const a = new Number("123");
// console.log(a);

// console.log(typeof a);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // indian numeric system 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

// const min = 10
// const max = 20
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//----------------------------------------------------------------------------------------------

// Dates

// let myDate = new Date()
// console.log(myDate.toString()); Millisecond from 1970
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
// })
// ----------------------------------------------------------------------------------------------
 
// array

// const myArr = [0, 1, 2, 3, 4, 5];
// const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods
// myArr.push(6);
// myArr.push(7);
// myArr.pop()

// myArr.unshift(9) // costly operation [ 9, 0, 1, 2, 3, 4, 5 ]
// myArr.shift() // same
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);

// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);
// console.log(myArr);
// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);
// console.log(myArr);
// slice returns a piece of the array but it doesn't affect the original array. splice changes the original array by removing, replacing, or adding values and returns the affected values.

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros) // Array ke andar ek array ghus jayega element bankar [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // flash

// const allHeros = marvel_heros.concat(dc_heros) // isme pura element array me jayega [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator (dono ka copy hokar nya array banega)

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// Object
// ----------------------------------------------------
// singleton
// Object.create

// object literals

const mySym = Symbol("key1");
// console.log(mySym);

const JsUser = {
  name: "Sandeep",
  "full name": "Sandeep Sharma",
  [mySym]: "mykey1",
  age: 18,
  location: "Patna",
  email: "sandeep@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email) // . Dot laga kar bhi access kiya jata hai or
// console.log(JsUser["email"]) // Bracket laga kar bhi access kiya jata hai
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "sandeep@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "sandeep@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }

// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`); // "this" current object ko refer kar raha hai
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// console.log(Array.isArray("Sandeep")) // sawal puchh rha hai
// console.log(Array.from("Sandeep")) // string se array bana do
// console.log(Array.from({name: "Sandeep"})) // interesting
 
// const tinderUser = new Object() // interview
// const tinderUser = {} // interview

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//   email: "some@gmail.com",
//   fullname: {
//     userfullname: {
//       firstname: "Sandeep",
//       lastname: "Sharma",
//     },
//   },
// };

// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// const users = [
//     {
//         id: 1,
//         email: "h1@gmail.com"
//     },
//     {
//         id: 2,
//         email: "h2@gmail.com"
//     },
//     {
//         id: 3,
//         email: "h3@gmail.com"
//     },
// ]

//  const h1 = users[1].email
//  console.log(h1);

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));

// // console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Sandeep",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(course.courseInstructor);
// console.log(courseInstructor);
// console.log(instructor);

// // {
// //     "name": "hitesh",
// //     "coursename": "js in hindi",
// //     "price": "free"
// // }

// [
//     {},
//     {},
//     {}
// ]

// Higher order Array Loop
// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  // console.log(`Each char is ${greet}`)
}

// Maps

// const map = new Map();

// map.set("IN", "India");
// map.set("USA", "United States of America");
// map.set("Fr", "France");
// map.set("IN", "India");

// console.log(map);
// console.log(typeof map)

// for (const iterator of map) {
// console.log(iterator); // [ 'IN', 'India' ]
// }

// for (const [key, value] of map) {
// console.log(key, ':-', value);
// }

// const myObject = {
//   game1: "NFS",
//   game2: "Spiderman",
// };

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
//   // myObject is not iterable
// }

// const myObject = {
//   js: "javascript",
//   cpp: "C++",
//   rb: "ruby",
//   swift: "swift by apple",
// };

// for (const key in myObject) {
//   // console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"];

// for (const key in programming) {
//   // console.log(key);
//   console.log(programming[key]);
// }

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

// about forEach Loop
const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val) {
  // console.log(val);
});

coding.forEach((item) => {
  // console.log(item);
});

function printMe(item) {
  // console.log(item);
}

// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "rust",
    languageFileName: "rs",
  },
];

myCoding.forEach((item) => {
  // console.log(item.languageName);
  // console.log(item.languageFileName);
});

// Differences between forEach() and map() methods
// The forEach() method does not returns a new array based on the given array.
// The map() method returns an entirely new array.
// The forEach() method returns “undefined“. The map() method returns the newly created array according to the provided callback function.

// const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) => {
  // console.log(item);
  // return item  // forEach loop return nahi karta hai
});

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// JavaScript Array filter() Method is used to create a new array from a given array consisting of only those elements from the given array that satisfy a condition set by the argument method.

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// {} scope open karoge to return keyword use karna hi padega

// agar same kaam forEach me kasie karenge

// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
// console.log(userBooks);

// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumers.map( (num) => { return num + 10})

// The map() method returns an entirely new array.
// The map() method returns the newly created array according to the provided callback function.

// const newNums = myNumers
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num >= 40);
// Chaining (Flow left to right Chalega)
// console.log(newNums);

// Reduce
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.

const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, currVal) {
  // console.log(`acc: ${acc} and currval: ${currVal}`);
  return acc + currVal;
}, 0);

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

// console.log(priceToPay);

// Asynchronous JavaScript
