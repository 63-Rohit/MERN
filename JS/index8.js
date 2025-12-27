// object
// key-value

const user = {
  name: "Rohit",
  age: 20,
  emailId: "rohit391174@gmail.com",
  amount: 3400,
  // property with space
  "home address": "pantnagar",

  // method (function inside object)
  greeting: function () {
    console.log("Strike is coming soon on 18 Oct");
  },

  // nested object example
  address: {
    city: "Uttarakhand",
    town: "Kichha"
  }
};

console.log(user);

// Accessing values
console.log(user.age);
console.log(user["age"]);

// CRUD Operations
// Update
user.number = 63973577241;
user.amount = 5000;
console.log(user);

// Delete
delete user.emailId;
console.log(user);

// Copying object by reference
const user2 = user;
user2.age = 19;
console.log(user); // changes reflect in both

// Object methods
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// for...in loop
for (let key in user) {
  console.log(key, user[key]);
}

// for...of loop
for (let key of Object.keys(user)) {
  console.log(key);
}

// Call object method
user.greeting();

// Spread operator (independent copy)
const user3 = { ...user };
user3.name = "Mohan";
console.log(user3);
