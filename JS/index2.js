//variable ko kaise banate hai


// 1st way to craete a variable
let name="Rohit";
let age=20;
age=30;
console.log(name,age);

//2nd way to create variable is const
const account=1234;
// account=9767;  will give error its value can not be changed.
console.log(account);

// 3rd way to create a variable

var a=10;
a=20; 
// var value can be changed
console.log(a);

// So what is the difference between let and var


//1) var can be updated and redeclared  within its scope.
var a=200;
var a=250;

// 2) var variables can be access outside its scope

if(true)
{
    var c=20;
}

console.log(c); 



// Datatypes in jS

// Primitive Datatypes

// 1)Number
// 2)Null
// 3)Boolean
// 4)BigInt
// 5)String
// 6)Symbol
// 7)Undefined



// Non Primitive datatypes(also called as Reference type)
// 1)Array
// 2)Object
// 3)Function




// Ex

let x=100;
let y=10.2;
console.log(x);
console.log(y);


// string(it can be written in single quotes or double quotes)
let e="Strike is coming soon";
let d="Anajali";
console.log(c,d);