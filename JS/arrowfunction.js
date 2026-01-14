// Arrow function
const addNumber=(num1,num2)=>{
return num1+num2;
}

// Calling function
console.log(addNumber(2,3));

// Advantage of using Arrow function?

const squareNum=(num)=>num*num;
// Calling the function
console.log(squareNum(6,6));

// if we have only 1 parameter in function then i can also write the arrow function in this way.

const squareNumm=num=>num*num;
// Calling the function
console.log(squareNumm(6,6));

const greeting=()=>{
  let user={
    name:"Rohit",
    age:20,
  }
  return user;
}

console.log(greeting());



// 4th way IIFE(Immediately Invoked Function)
(function greeting(){
  console.log("Hello JEE");
})();


(()=>{
  console.log("Hi");
})();


// Callback function(heart of Js)

function greet(){
  console.log("Hello Jee,kaise ho");
}

function meet(callback){
  console.log("I am going to meet you");
  callback();
}

meet(greet());
// greet();





// Callback Example Payment and Order


function zomatoOrderPlace(){
  console.log("We have started prerparing our food");
}

function payment(amount){
  console.log(`${amount} payment has initialiazed`)
  console.log("Payment is received");
}

// GST:Government
// Rider ko kitna payment dena

payment(500);