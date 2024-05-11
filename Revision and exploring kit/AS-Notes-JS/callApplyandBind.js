// let obj1 = {
//   firstName: "Sandeep",
//   lastName: "Sharma",
//   printFullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// let obj2 = {
//   firstName: "Sachin",
//   lastName: "Tendulkar",
//   //   using call method function borrowing we can borrow the function from another object and use in this object
// };
// // Means yaha par obj1 ka function lekar obj2 ka elem print kara rahe hai
// obj1.printFullName.call(obj2);
// ============================================================================================

// Yaha ham function ko alag se define karenge object se nikal kar

// printFullName = function () {
//   console.log(this.firstName + " " + this.lastName);
// };
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// kya ho agar function ke pass argunment bhi ho...
printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " and " + state
  );
};
let obj1 = {
  firstName: "Sandeep",
  lastName: "Sharma",
};

// printFullName.call(obj1); // function ko call kar ke obj1 ko use kar rahe hai
// printFullName.call(obj1, "Gopalganj"); // function ko call kar ke obj1 ko use kar rahe hai

let obj2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};
// printFullName.call(obj2); // function ko call kar ke obj2 ko use kar rahe hai
// printFullName.call(obj2, "Mumbai"); // function ko call kar ke obj2 ko use kar rahe hai
// printFullName.call(obj2, "Mumbai", "Maharastra");

// Apply me thoda hi different hai
printFullName.apply(obj2, ["Mumbai", "Maharastra"]); // sab kuchh same hai but apply me bahut sare argunment ko array me pass kar dete hai ek hi baar nak ki ekk kar ke pass karte hai

// bind method
let printMyName = printFullName.bind(obj2, "Mumbai", "Maharastra"); // means printFullName ko bind kar ke ek copy objet return kar deta hai
console.log(printMyName); // direct refrence print nhi hoga
console.log(printMyName()); // yaha par call karna padega

