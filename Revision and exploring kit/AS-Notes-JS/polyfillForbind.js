let obj1 = {
  firstName: "Sandeep",
  lastName: "Sharma",
};

printFullName = function () {
  console.log(this.firstName + " " + this.lastName);
};

