// Q. 1. let const and var me difference?
// Q. 2. difference between == and ===
// === is strict check data type bhi check karega

// Q. 3. What are datatypes in javaScript.
//  Primitive and none premitive(refrence type)
// Primitive 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// none premitive(refrence type) Array, Objects, Functions

// Q. 4 Javascript static type language or dynamic type language? ()
// Static means data declare karne ke pahle uska type batana padta hai dynamic means nhi batana padta ho (javascript me variable define karne par uska type nhi batate wo apne aap hi type me convert kar leta hai)
// JavaScript is a dynamically typed language, but TypeScript is a statically typed language.

// Q. 5 What is Symbol in javascript.
// Symbol data type is use for Symbol means define for uniquenes (that's guaranteed to be unique)
// Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object.

// Stack and Heap
// premitive(stack);
// Non -  Primitive(Heap);

let myYoutubeName = "hiteshchaudharydotcom";
let anotherName = myYoutubeName; // yaha par copy diya jata hai na ki original value...
anotherName = "chaiaurcode";

// console.log(myYoutubeName);
// console.log(anotherName);

const gameName = new String("sandeep-dot-com");
// console.log(gameName[0])
// console.log(gameName.__proto__); // {} prototype {} hai refer

// Some imp string method
// see on docs

// trim() is imp
// replace("kisko", "Kisase-replace");
// split(kiske basis pe splite karna hai)

// Math()
// -----------------------------------
// Date()
// -----------------------------------

// 6. What is Shallow Copy and Deep Copy
// Shallow Copy (Means jo bhi ham change karenge original array me bhi change hoga) its share same refrence point.

// Deep Copy ()
// Properties the do not share the same refrence point.

const myArr = [0, 1, 2, 3, 4, 5];
// const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2)
// console.log(myArr[1]);

// join()

// Q. 7 What is difference between slice and splice.
// Slice me range include nhi hota hai
// Splice me range include hota hai (Wrong Answer)
// iske aage bhi bolna hota hai
// Slice me range include nhi hota hai or ye original array ko bhi change nhi karta hai
// Splice me range include hota hai or sath hi sath original array me bhi change hota hai

// Slice Example
// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// const slicedFruits = fruits.slice(1, 4);
// console.log(slicedFruits);
// Output: [ 'banana', 'cherry', 'date' ]

// const slicedFruits2 = fruits.slice(2);
// console.log(slicedFruits2);
// Output: ['cherry', 'date', 'elderberry']

// const slicedFruits3 = fruits.slice(-2);
// console.log(slicedFruits3);
// Output: ['date', 'elderberry']

// const slicedFruits4 = fruits.slice(1, -1);
// console.log(slicedFruits4);
// Output: ['banana', 'cherry', 'date']

// Splice Example
const numbers = [1, 2, 3, 4, 5];
const removedElements = numbers.splice(2, 2); // 2nd index se chalu karo or 2 elem print karo
// console.log(removedElements);
// Output: [3, 4]
// console.log(numbers); // original array bhi change ho jayega
// Output: [1, 2, 5]

numbers.splice(1, 0, "a", "b");
// console.log(numbers);
// Output: [1, 'a', 'b', 2, 5]
numbers.splice(3, 1, "c", "d");
// console.log(numbers);
// Output: [1, 'a', 'b', 'c', 'd', 5]

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); // Array ke andar ek array ghus jayega element bankar [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// push() existing array me hi push karta hai

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // flash

const allHeros = marvel_heros.concat(dc_heros); // isme pura element array me jayega [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(allHeros);
// concat() existing array me nhi add karta hai but ye nya array banata hai

// With is spread Operator
const all_new_heros = [...marvel_heros, ...dc_heros]; // spread operator (dono ka copy hokar nya array banega)

// console.log(all_new_heros);

// important Interview Questions.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_another_array = another_array.flat(0); // same print hoga
const real_another_array = another_array.flat(2); // same print hoga
// console.log(real_another_array);

// console.log(Array.isArray("Sandeep"))
// console.log(Array.from("Sandeep")); // string se array ban jayega
// console.log(Array.from({ name: "Sandeep" })); // [] (Isko batana padega ki 'key' ko array banye, ya 'value' ko)

// console.log(Array.from({ name: "Sandeep" })); // []

let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1, score2, score3)); // array bana diya

// Object
// ----------------
// Singleton () constructor se jo bhi object banega to hamesha singelton banega.(Object.create)

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
// console.log(JsUser[mySym]) // Interview question Symbol ko key banakar print karo.

// JsUser.email = "sandeep@chatgpt.com"
// Object.freeze(JsUser) // Yaha pura object freeze ho gya
// JsUser.email = "sandeep@microsoft.com"
// console.log(JsUser);
// JsUser.age = 23
// console.log(JsUser)

JsUser.greeting = function () {
  //   console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
  //   console.log(`Hello JS user, ${this.name}`); // "this" current object (means JsUser) ko refer kar raha hai
};

// console.log(JsUser.greeting); // functin ka refrence aayega
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// console.log(Array.isArray("Sandeep")) // sawal puchh rha hai
// console.log(Array.from("Sandeep")) // string se array bana do
// console.log(Array.from({name: "Sandeep"})) // interesting

// const tinderUser = new Object() // interview singelton object
const tinderUser = {}; // interview non-singelton

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = true;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Sandeep",
      lastname: "Sharma",
    },
  },
};

// ? mark optional
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign( obj1, obj2, obj4);
// const obj3 = Object.assign({}, obj1, obj2, obj4);

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h1@gmail.com",
  },
  {
    id: 2,
    email: "h2@gmail.com",
  },
  {
    id: 3,
    email: "h3@gmail.com",
  },
];

const h1 = users[1].email;
// console.log(h1);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // Array me result aayega
// console.log(Object.values(tinderUser)); // array me result aayega
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Sandeep",
};

// course.courseInstructor
// console.log(course.courseInstructor);

// Another syntax
// const { courseInstructor } = course;
// console.log(courseInstructor);

// const { courseInstructor: instructor } = course;
// console.log(instructor);

// API's call
//JSON
// ----------------
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

// Function Concepts

function sayMyName() {
  console.log("S");
  console.log("A");
  console.log("N");
  console.log("D");
  console.log("E");
  console.log("E");
  console.log("P");
}

// sayMyName  its only reference.
// sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// function ke definition ke andar me jo input lete hai usko bolte hai parameter.
function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2
  //   return result
  return number1 + number2; // return ke baad kuchh bhi print nh hota hai
}
// Function ko call karate ha tab jo value milti hai to usko bolte hai argunments.
// const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

// function loginUserMessage(username = "sam") {
//   if (!username) {
//     console.log("PLease enter a username");
//     return;
//   }
//   return `${username} just logged in`;
// }

// console.log(loginUserMessage("hitesh"))

// ... rest operator
// function calculateCartPrice(val1, val2, ...num1) {
//   return num1;
// }

// console.log(calculateCartPrice(200, 400, 500, 2000)) // [ 500, 2000 ]

// const user = {
//   username: "hitesh",
//   prices: 199,
// };

// function handleObject(anyobject) {
//   console.log(
//     `Username is ${anyobject.username} and price is ${anyobject.price}`
//   );
// }

// handleObject(user)
// handleObject({
//   username: "sam",
//   price: 399,
// });

// const myNewArray = [200, 400, 100, 600];

// function returnSecondValue(getArray) {
//   return getArray[1];
// }

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));

// Scopes
//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// Nested Scope
function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  console.log(website); // not accesible scope khtm
  two();
}
// one();

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(website); // not accessible
}

// console.log(username); // not accessible

// ++++++++++++++++++ interesting ++++++++++++++++++

// function
// console.log(addOne(5)); // Function to Hoist ho ja raha hai but expression nhi hota hai
function addOne(num) {
  return num + 1;
}
// addOne(5)
// console.log(addOne(5));

// addTwo(5); // We can not hoisted expression
// Expression
// const addTwo = function (num) {
//   return num + 2;
// };
// addTwo(5);

// this keyword and arrow function
const user = {
  username: "Sandeep",
  price: 999,

  welcomeMessage: function () {
    // this keyword means current context yaha current context(value) username hai
    console.log(`${this.username}, Welcome to website`);
    console.log(this); // iske liye context sandeep, 999 or function hai
  },
};

// user.welcomeMessage()
// user.username = "sam"; //yaha par context change kar diya
// user.welcomeMessage(); //iske liye context sam, 999 or function hai

// console.log(this); //iske liye context {} hai node environment
// Browser ke andar windows hota hai

// function chai() {
//   let username = "sandeep";
//   console.log(this); // bahut sari value aati hai
//   console.log(this.username); // undefined this function me kaam nhi karta hai object me hi karta hai
// }

// chai();

// const chai = function () {
//   let username = "sandeep";
//   console.log(this.username);
// };

// const chai = () => {
//   let username = "sandeep";
//   console.log(this); // {} yaha ka context
// };

// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(3, 4));

// implicit return {} hata diya jata hai
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => ({ username: "hitesh" });

// console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8];

// myArray.forEach((index) => {
//   console.log(index);
// });

// Immediately Invoked Function Expressions (IIFE)
// () lagane par ek block ban jata hai or uspe kam kar sakte hai
(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();
// ; lagana hota hai end karne ke liye

// Jo function Immediately invoke ho jata hai use IIFE kahte hai ye isliye use karte hai taki global scope ke polution se prevent ho sake.

((name) => {
  console.log(`DB CONNECTED TWO BY - ${name}`);
})("Sandeep");

// How to excute code in JS interview 50%
// --------------------------------------------
// call stack
// {} --> Global Excution Context[GEC] (this)
// Functional Excution Context [FEC]
// eval Excution Context(eEC)

// {} -> 1. Memory Creation phase
//   2. Excution phase

let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

// excution proccess 
// phase 1 Global Excution phase
// step 1 -> sabse pahle global excution/environment se run hota hai or sabse pahle allocate karte hai this ke andar

// phase 2 Memory phase 
// step 2 -> Creation/Memory phase isme sare variable ko ikatha kar ke rakha jata hai
// line 1  val1 --> undefined
// line 2  val2 --> undefined
// line 3 addNum --> definition
// line 7 result1 --> undefined
// line 8 result1 --> undefined
// Cycle 2 phase complete 

// phase 3 excution phase 
// val1 -> 10
// val2 -> 5
// addNum --> hold (Ye to function hold par hai)

// line 7 --> Ek or excutional context taiyar hoga 
// yaha new variable environment + excution thread or fir se memory creation phase + Excution phase hoga (means jitni baar function likhenge utni baar ye 2 process repeat hoga)

 