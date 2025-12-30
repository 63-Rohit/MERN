// const obj={
//     name:"Rohit",
//     age:20,
//     greet:function()
//     {
//       console.log("Hello Ji");
//     }
// }

// obj.greet();

// // // console.log(obj.hasOwnProperty("names"));
// // // console.log(obj.toString());

// // // const arr = [10,20,30];

// // // console.log(arr.length)

// const obj2 = {
//     account:30
// }

// obj2.__proto__=obj;
// console.log(obj2.name)






// const obj1 = {
//   name: "Rohit",
//   age: 30,
//   greet: function () {
//     console.log(`Hello ${this.name}`);
//   },
// };

//  // if i make another obj2
// const obj2 = {
//   name: "Mohit",
//   age: 20,
//   greet: function () {
//     console.log(`Hello ${this.name}`);
//   },
// };

// // Suppose i want to make another 0bj 3 and you will notice that code is repeating now
// const obj3 = {
//   name: "Mohan",
//   age: 10,
//   greet: function () {
//     console.log(`Hello ${this.name}`);
//   },
// };





class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    sayHi()
    {
         console.log(`Hi ${this.name}`);
    }
}

const person1=new Person("Rohit",20);
const person2=new Person("Mohit",21);
console.log(person1.name);
console.log(person2.name);


class Customer extends Person{
  constructor(name,age,account,balance){
    super(name,age);
    this.account = account;
    this.balance = balance;
  }

  checkBalance(){
    return this.balance;
  }
}

const c1 = new Customer("Mohan",20,12,540);

console.log(c1.checkBalance());
