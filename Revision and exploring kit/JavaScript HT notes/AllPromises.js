// promise future me jakar full fill hota hai

// Promise create karna,
// Promise consume karna
// .then( ke andar bhi callback function)
// .catch(ke andar bhi callback function)
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async calls
  // async calls like --> DB Calls, Cryptography, Network call etc...

  setTimeout(function () {
    // console.log("Async Task 1 is complete");
    resolve();
  }, 1000);
});

// Yaha tak to promise create ho gya hai but consume kaise karte hai niche bataya gaya hai

// .then() ka connection hai resolve ke sath
// .then( ke andar ek callback milta hai or ye function automatically ek argunment recieve karta hai jisme upper wala function ka return value hota hai)
promiseOne.then(function () {
  //   console.log("Promise 1 resolved");
});
// Itna me bhi consume nhi ho raha hai kyoki yaha tak promise pura nhi ho rha hai promise pura karne ke liye resolve or .then() ko connect karana hoga connect karane ke liye resolve method ko function me call karna padega tab jakar resolve() .then() se connect hoga

new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("Async task 2 is completed");
    resolve();
  }, 1000);
}).then(function () {
  //   console.log("Async 2 is Resolved");
}); // isme two part karne ke vajaye ek hi me ho gya

let promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // ab resolve ke andar data bhi pass kar sakte hai
    resolve({ userName: "Sandeep", email: "sandeep@anshu.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  // resolve ke andar ka jo bih data hai wo user me mil jayega 
  //   console.log(user);
});

// ab error wala part bhi sikhenge
let promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "SandeepAnshu", password: "sandeep@123" });
    } else {
      reject("ERROR: Something went wrong!");
    }
  }, 1000);
});

// ab isko consume karenge
promiseFour
  .then((user) => {
    // console.log(user);
    return user.username; // ye return, jaa kaha raha?(aage wala .then() or .catch() me jayega)
  })
  .then((myusername) => {
    // console.log(myusername);
  })
  .catch((error) => {
    // console.log(error);
  })
  .finally(() => {
    // hamesha excute hoga
    // console.log("The promise is either resolve or rejected! ");
  });

// Async Await ka use kar rahe hai
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "sandeep@7091" });
    } else {
      reject("ERROR: JS went wrong!");
    }
  }, 1000);
});

// Ab yaha se async await padhenge! (Isme try catch lagate hai)
// try catch jarur lagana nhi to error aaeyga.
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    // console.log(response);
  } catch (error) {
    // console.log(error);
  }
}
consumePromiseFive();

// Yaha ek API fetch karenge

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // console.log(response);
    // const data = response.json(); // json convert hone me time lagata hai isiliye iske aage await lagana padeag
    const data = await response.json();
    // console.log(data); //100% sahi hai code fir bhi Yaha par value nhi aayegi kyo? (Kyoki await lagana padega  json me convert hone me bhi time lagata hai)
  } catch (error) {
    // console.log("E: ", error);
  }
}
// getAllUsers();

// same uper wala function .then or .catch me kar rha hu

// fetch("https://jsonplaceholder.typicode.com/users")

fetch("https://api.github.com/users/Sandeep9199")
  .then((response) => {
    return response.json(); // yaha return to kar diya json isko handle k or then() kareaga
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// fetch() samjh me aaya ?
