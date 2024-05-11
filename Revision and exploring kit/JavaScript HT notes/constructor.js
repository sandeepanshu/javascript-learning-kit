function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  // return this;
}
const userOne =  User("Sandeep", 12, true);
const userTwo =  User("SandeepAnshu", 11, false);
// const userOne = new User("Sandeep", 12, true);
// const userTwo = new User("SandeepAnshu", 11, false);
// console.log(userOne.constructor);
console.log(userOne);
//console.log(userTwo);
