// // // const coding = ["js", "ruby", "java", "python", "cpp"]

// // // const values = coding.forEach((item) => {
// // //console.log(item);
// // //   return item;
// // // });

// // // console.log(values);

// // // const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // // const newNums = myNums.filter((num) => {
// // //   return num > 4;
// // // });

// // // same kaam forEach se
// // // const newNums = [];

// // // myNums.forEach((num) => {
// // //   if (num > 4) {
// // //     newNums.push(num);
// // //   }
// // // });

// // // console.log(newNums);

// // const books = [
// //   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
// //   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
// //   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
// //   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
// //   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
// //   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
// //   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
// //   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
// //   { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
// // ];

// // let userBooks = books.filter((bk) => bk.genre === "History");

// // userBooks = books.filter((bk) => {
// //   return bk.publish >= 1995 && bk.genre === "History";
// // });
// // // console.log(userBooks);

// // // map

// // // const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // // const newNums = myNumers.map( (num) => { return num + 10})

// // // const newNums = myNumers
// // //   .map((num) => num * 10)
// // //   .map((num) => num + 1)
// // //   .filter((num) => num >= 40);

// // // console.log(newNums);

// // // Reduce
// // const myNums = [1, 2, 3];

// // // const myTotal = myNums.reduce(function (acc, currval) {
// // //     console.log(`acc: ${acc} and currval: ${currval}`);
// // //     return acc + currval
// // // }, 0)

// // const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

// // // console.log(myTotal);

// // const shoppingCart = [
// //   {
// //     itemName: "js course",
// //     price: 2999,
// //   },
// //   {
// //     itemName: "py course",
// //     price: 999,
// //   },
// //   {
// //     itemName: "mobile dev course",
// //     price: 5999,
// //   },
// //   {
// //     itemName: "data science course",
// //     price: 12999,
// //   },
// // ];

// // const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

// // // console.log(priceToPay);

// // // function User(username, loginCount, isLoggedIn) {
// // //   // variable = value
// // //   this.username = username;
// // //   this.loginCount = loginCount;
// // //   this.isLoggedIn = isLoggedIn;

// // //   this.greeting = function () {
// // //     console.log(`Welcome ${this.username}`);
// // //   };

// // //   return this;
// // // }

// // function createUser(username, score) {
// //   this.username = username;
// //   this.score = score;
// // }

// // createUser.prototype.increment = function () {
// //   this.score++;
// // };
// // const chai = new createUser("chai", 25);
// // const tea = createUser("tea", 250);

// // createUser.prototype.printMe = function () {
// //   console.log(`price is ${this.score}`);
// // };

// // chai.printMe();
// // // tea.printMe();

// // prototype
// // let myName = "sandeep     "
// // let mychannel = "chai     "

// // console.log(myName.length);
// // console.log(myName.trueLength);

// let myHeros = ["thor", "spiderman"];

// let heroPower = {
//   thor: "hammer",
//   spiderman: "sling",

//   getSpiderPower: function () {
//     console.log(`Spidy power is ${this.spiderman}`);
//   },
// };

// Object.prototype.sandeep = function () {
//   console.log(`sandeep is present in all objects`);
// };

// Array.prototype.heyHitesh = function () {
//   console.log(`Hitesh says hello`);
// };

// // heroPower.sandeep()
// // myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport, // inherit
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();
