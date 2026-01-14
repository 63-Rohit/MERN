//  lecture 7 Javascript arrays explainedin depth 


let marks=[100,40,65,32,81];
console.log(typeof marks);
console.log(marks);
// finding length of array
console.log(marks.length);


// In JS array contain heterogenous elements(differeent datatypes elements) in it which is different from other languages.In ++,Java array can store only homogenous(same type elements).
let arr=[100,30,"rohit",true];
console.log(arr);

// accessing values in an array
console.log(arr[0]);
console.log(arr[1]);

// changing the values 
arr[1]=99;
console.log(arr);
// So ararys are mutable.arrays can be changed.

// inserting new element at the end of array
arr.push(90);
arr.push("Strike");
console.log(arr);

// Deleting element from end in an array
arr.pop();
console.log(arr);


// How to insert element at the starting of array
arr.unshift(69);
arr.unshift(690);
console.log(arr);

// How to delete element from the starting of an array
arr.shift();
console.log(arr);

// But it is not recommeneded to use shift and unshift operation.because performance can hamper in this operation.


// How to iterate over an aarray
let arrr=[10,20,"Mohit",'A'];
for(let i=0;i<arr.length;i++)
{
    console.log(arrr[i]);

}

// for of loop
for(let num of arrr)
{
    console.log(num);
}

let obj=[1,2,3,4,5];
let obj2=obj;
obj2.push(30);
console.log(obj);

// yes changes will happen because object are copy by referemnce.
// Object(Non primitive) =>copy by  reference
// primitive data=> copy by value


// slicing
// const num=[10,30,50,90,11];



// splice





// Spread operator
const num1=[10,20,30,40];
const num2=["Rohit",11,true];
const num3=num1.concat(num2);
console.log(num3);

// Spread operator
// const var1=[10,20,30,40];
// const var2=["Rohit",11,true];
// const var3=var1.concat(var2);
// console.log(var3);
// const val=[...val1,...val2,...val3];


// converting array to string
const names=["Rohit","Bob","Mohit"];
console.log(typeof names.toString());

// searching
console.log(names.indexOf("Rohit"));
console.log(names.includes("Rohit"));

// Sorting(it sort on the basis of ascii value not in dictionary )
const st=["Alice","Rohit","Mohit","Charlie","arjun"];
st.sort();
console.log(st);
// reverse
console.log(st.reverse());

// this sort method treat as character because in js array contain heterogenous elements.
const a=[101,90,80,32,91];
a.sort();
console.log(a);

// but how to actual sorting in numbers
const a1=[101,90,80,32,91];
a1.sort((a1,b1)=>a1-b1)
console.log(a1);
//  sort in descending order
a1.sort((a1,b1)=>b1-a1);
console.log(a1);

// -ve: to phle a ayega fr b ayga 
// +ve: b ayga fir a ayga


const ar=[10,30,50,[40,90,11],80];
// how to access 40
console.log(ar[3][0]);
console.log(ar[3][1]);



// why array is not array in javscript
 