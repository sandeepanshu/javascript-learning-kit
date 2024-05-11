function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername(); // () iske baad bhi call nhi hoga
  SetUsername.call(this, username); // Call likhne ke baad call ho raha hai...

  this.email = email;
  this.password = password;
  // yaha username nhi declare kar rahe hai
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
