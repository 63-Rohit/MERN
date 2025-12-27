// Lecture 10 Hoisting in Javascript


// 1️⃣ Execution Context

// It’s the environment where JavaScript code is evaluated and executed.
// Every time a script or function runs, JS creates an execution context for it.

// There are two types:

// Global Execution Context (GEC) – created when the script starts.

// Function Execution Context (FEC) – created each time a function is called.

//  2️⃣ Execution Context has Two Phases
// (a) Memory Creation Phase (also called Hoisting Phase)

// JS scans the code before running it.

// All variables (var) are set to undefined.

// Function declarations are stored completely in memory.
// ➡️ This is why you can call a function before it’s defined.

// (b) Code Execution Phase

// JS runs the code line by line.

// Variables get actual values assigned.

// Functions are executed when called.




// Execution Context
// Memory allocation
// a=undefined
// b=undefined
// addNUmber=function code present
// sumResult1=undefined;
// sumResult2=undefined


// Execution Phase
// a=undefined  thats why undefined behaviour came



// Hoisting (Simple Definition)

// Hoisting means JavaScript moves all variable and function declarations to the top before running the code.

// So, you can use a function or variable before it is written in your code — because JS already knows it exists (but variables are undefined at first).



console.log(a);//undefined will come
var a=10;
var b=20;
// function call
var sumResult1=addNumber(a,b);//30 will came

function addNumber(num1,num2)
{
    var sum=num1+num2;
    return sum;
}

var sumResult2=addNumber(4,5);
console.log(sumResult1,sumResult2);


