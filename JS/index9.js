// lecture 9 Functions in Javascript.

function greeting(){
    console.log("Hello Coder Army Strike is coming on 18 october");

}

greeting();



function addNumbers(a, b) {
  return a + b;
}
// Calling function
console.log(addNumbers(3,4));


function getMul(num1,num2){
    const c=num1*num2;
    console.log(c);
}
// Calling the function
getMul(2,5);
getMul(2,6);

// if i pass 3 arguments
getMul(2,6,2);
// if i want to pass different number of arguments  this cam be done by using rest operator

function getSum(...num1){
    let sum=0;
    for(let n of num)
    {
        sum=sum+n;
    }
    console.log(sum);
}


const  arr=[10,20,30,40,50];
const[first,second,...num]=arr;
console.log(first,second,num);

// que difference between spread and rest operator


// another method to create a function
const addNumberr=function(num1,num2){
    return num1+num2;
}
console.log(addNumberr(3,4));

// this function cant be caLLed before the function because of hoisting.\
// like this is correct will not give error
console.log(addNum(3,3));
function addNum(num1,num2){
    return num1+num2;
}//This will run 



// console.log(addNo(3,1));//This will give error this is the mmain difference between 1st function and this function in this function we cant call function before its initialiization.
// const addNo=function(num1,num2){
//     return num1+num2;
// }


// 3rd way of creating  function
// 3)Arrow function
