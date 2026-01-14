// Javascript strings and dates  explained in depth

// string

const str1="Rohit";
const str2='Rohit Joshi';
const day=18;
const str3=`Sttrike is coming soon `;
const str4=`Sttrike is coming soon on ${day}`;

console.log(str1,str2,str3,str4);


const str=`hello coder Army`;
console.log(str.length);
// o/p=>16 (space is alao a character)
console.log(str[1]);
console.log(str.toUpperCase());
console.log(str.toLowerCase);
console.log(str.indexOf('cod'));

// if i want to search in a string that the text is preent or not
console.log(str.includes('hell'));

// Slice
console.log(str.slice(2,5));
console.log(str.slice(2));
console.log(str.slice(-5,-2));
// in slicing first index is included and last index is not included.


// same as  slicing but difference  in substring negative index cannot be mark down.
console.log(str.substring(2,5));

// concatenation in a string 
const a="Rohit";
const b="Joshi";
const c=a+b;
const d=a+" "+b;
console.log(c);
console.log(d);

// Replace in string
const strr="Hello Coder Army Coder";
console.log(str.replace("ode","iam"));

// trim in string
// trim remove starting and end spaces
const user=" Rohit ";
console.log(user);
console.log(user.trim());


const name="Rohit,Mohit,Suraj,Rohan";
console.log(name.split(","));



// Date
const now=new Date();
console.log(now);
console.log(now.toString());
console.log(now.toISOString());
console.log(now.toLocaleString());


// Day
console.log(now.getDay());
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getMonth());
// days are  1 based indexing,but for month it take 0 based indexing.

