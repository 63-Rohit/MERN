// lecture 5  JAvascript Numbers and Math objects explained

let a=10;
console.log(a);
console.log(typeof(a));


let b=345.6281;
console.log(b);


let c=345.6281;
console.log(c.toFixed(2));

let d=new Number(20);
console.log(typeof(d));

// faltu method
let e=new Number(40);
let f=new Number(40);
console.log(a==b);


let obj1={
    name:"Rohit"
}
let obj2=obj1;
console.log(obj1==obj2);

// so in primitive datatype data is copied and in  object reference is copied.

console.log(Math.abs(-4));
console.log(Math.PI);
console.log(Math.LN10);
console.log(Math.sqrt(16));
console.log(Math.ceil (6.3));//upper value
console.log(Math.floor (6.3));//lower value
console.log(Math.random());//it will generate random value between 0 and 1,where 0 is included but 1 is not incluuded.


//sattebazi ka game
// if i want to generate number from 0 to 9
//we can do this by multiplying 10
console.log(Math.floor(Math.random()*10));


// but if i want to geenerate number from 1 to 10
console.log(Math.floor(Math.random()*10+1));

// want  to print  1 to 6
console.log(Math.floor(Math.random()*6+1));


// generate number from 15 to 25
console.log(Math.floor(Math.random()*11))+15;
