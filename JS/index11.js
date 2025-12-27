// Lecture 11 Scope and closure in javascript and Higher order function
let a=10;
const b=20;
function greet()
{
    console.log(a);//This can be accessed because the scope of a is global which means anyone can use it.
}
greet(a);

if(true)
{
    console.log(b);
}

// is this a valid syntax =>yes
let global=30;
function greett()
{
    let global=40;
 console.log(global);
}
greett();



// Implementing a Bank account with a Private Balance
// let balance=5000
// // balance+="Rohit"; i want to avoid direct access from the developer 
// console.log(balance);

// let user={
//     // private
//     balance:5000,
//     deposit:function(amount){
//         if(typeof amount=="number" && amount>0)
//         {

//             this.balance+=amount;
//             return this.balance;
//         }
//     },

//      withdraw:function(amount){
//         if(typeof amount=="number" && amount>0 && this.balance>=amount)
//         {

//             this.balance-=amount;
//             return this.balance;
//         }
//     },


//     getBalance:function(){
//        return this.ballance;
//     }
// }

// console.log(user.deposit(200));

function createBankAccount(){
    const user={
    // private
    balance:5000,
    deposit:function(amount){
        if(typeof amount=="number" && amount>0)
        {

            this.balance+=amount;
            return this.balance;
        }
    },

     withdraw:function(amount){
        if(typeof amount=="number" && amount>0 && this.balance>=amount)
        {

            this.balance-=amount;
            return this.balance;
        }
    },


    getBalance:function(){
       return this.ballance;
    }
}
  return user;
}

const customer=createBankAccount();
console.log(customer.deposit(200));

// Higher Order function

function double(){
    function execute(){
        console.log("Hello");
    }
    return execute;
}
const n=double();
n();