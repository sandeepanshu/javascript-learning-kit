// Javascript is a prototype based programming language

// Notes Chura lo notes.md se

// Abstraction means details hide kar lena (fetch )

// encapsulate means wrapper laga dena jo chaiye wo dikhana jo nhi chahiye wo nhi dikhana

// Q. What is object literal ?
// an object literal is a way to define and create an object using a concise syntax. It allows you to specify the properties and methods of the object directly within curly braces {}.

// Q. What is constructor?
// a constructor function is used to create instances of objects with a particular structure and behavior.

// Q. What is constructor function?
// a constructor function is a special type of function that is used to create and initialize objects. Constructor functions are typically used in object-oriented programming to define and create objects of a particular type or class.

const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    // console.log(`Username: ${username}`); yaha error aayaega (Kon sa usename print karega)
    // console.log(`Username: ${this.username}`);
    console.log(this); // this is refer to current context.
  },
};

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

// About new keyword trailer

function User(username, loginCount, isLoggedIn) {
  // variable = value
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    // console.log(`Welcome ${this.username}`);
  };

  return this;
}

// new Keyword

// new keyword ek constructor function hai ye function karta kya hai, Isase ek hi instance se multiple Object bana sakte ho

// new keyword nya context banane ke kaam me aata hai.

// const userOne =  User("Sandeep", 12, true);
// const userTwo =  User("SandeepAnshu", 11, false); // value overwrite ho jayega iske liye new keyword laga denge (niche line me dekho)

const userOne = new User("Sandeep", 12, true);
const userTwo = new User("SandeepAnshu", 11, false);
console.log(userOne.constructor);
//console.log(userTwo);

// constructor function har baar ek nya instances deta hai nya copy deta hai usme aap kuchh bhi kar sakte ho purana wala affect nhi hota hai

// Constructor khud hi ke bare me refrence batata hai

// By hitesh Sir
// ---------------------------
// new keyword use karenge to sabse pahle ek empty Object create hota hai jisko instance bola jata hai.
// 1. nya object create ho raha hai
// 2. constructor function call hota hai new keyword ke karan.
// 3. Jitne bhi argunments original me hota hai wo pack karke de deta hai
// 4. Uske baad app nya se use kar lijiye.

// 43 no video

// prototypal behaviour
// javascript haar nhi manti hai ye uper se uper tak jati hai jab tak null nhi mil jati hai.

function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2; // . access because fn is also a object in JS

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

// this keyword refers a current context
function createUser(username, score) {
  this.username = username;
  this.score = score;
}
// yaha par meri apni functionality inject kar sakte hai (Yaha par increment inject kar diya hu).

createUser.prototype.increment = function () {
  this.score++;
};
// const chai = new createUser("chai", 25); // new kewyword
// const tea = createUser("tea", 250); // yaha new keyword nhi hai to error aayega

createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};
 
// chai.printMe(); // Means chai me agar printMe() inject karna ho to .prototype nhi lagaoge to bhi chalega javascript internally isko inject kar dega. lekin isko error aayega error solve karne ke liye chai me jakar new keyword lagana padega. 
tea.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// Ab Yaha se prototype samjhenge
// ----------------------------------------
// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

// Hehehe yaha par sidha top level ke object par me prototype ke help se ham object inject kar dete hai.

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh() // error

// inheritance

// const User = {
//   name: "chai",
//   email: "chai@google.com",
// };

// const Teacher = {
//   makeVideo: true,
// };

// const TeachingSupport = {
//   isAvailable: false,
// };

// const TASupport = {
//   makeAssignment: "JS assignment",
//   fullTime: true,
//   __proto__: TeachingSupport,
// };

// Teacher.__proto__ = User;

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

// Video no - 44

// Call, Bind and Apply
// ----------------------------------------
// Call --> Current excution context kisi or function ko pass kar deta hai

function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username); // Call likhne ke baad call ho raha hai...

  this.email = email;
  this.password = password;
  // yaha username nhi declare kar rahe hai
}

// const chai = new createUser("chai", "chai@fb.com", "123");
// console.log(chai);

// video 45

// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  //   class ke andar function likhhne par isko method bolte hai

  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

// const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

// const tea = new User("tea", "tea@gmail.com", "123");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

// inheritance

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); // The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

// const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.logMe();
const masalaChai = new User("masalaChai");

masalaChai.logMe();

console.log(chai instanceof User);
// --------------------------------------------------

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  //   Static Keyword
  static createId() {
    return `123`;
  }
}

// const hitesh = new User("hitesh");
// // console.log(hitesh.createId())

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
console.log(iphone.createId());

// iske baad bind()

// ----------------------------------------------
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// const chai = {
//   name: "ginger chai",
//   price: 250,
//   isAvailable: true,

//   orderChai: function () {
//     console.log("chai nhi bni");
//   },
// };

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}

// 48 video
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}hitesh`;
  }

  set password(value) {
    this._password = value;
  }
}

const hitesh = new User("h@hitesh.ai", "abc");
console.log(hitesh.email);

// --------------------------------------------

function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const chai = new User("chai@chai.com", "chai");

// console.log(chai.email);

// ------------------------------------------------

const User = {
  _email: "h@hc.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

// const tea = Object.create(User);
// console.log(tea.email);
