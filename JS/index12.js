// Lecture 12 map,filter,Reduce,Set and map in Javascript

// forEach,filter,reducer,map,set

// ForEach
console.log("ForEach loop")
const arr=[10,20,30,5,90,87];
arr.forEach((number,index,arr)=>{
    console.log(number,index,arr);
})


// Filter(filter returns a new array)
console.log("Filter");
const newArr=arr.filter((number)=>number>25)
console.log(newArr);

// Map
console.log("Map");
const a=[1,2,3,4];
const newaArrr =a.map((num)=>{
    return num*2;
});

// REal world use cases of filter map



// Reduce
console.log("Reduce");






// Data structure
// 1)Set
// 2)Map

// Set=> It is like a array in which only unique values are present.

const b=[10,20,20,30,30,330,50];
console.log(b);

const s1=new Set(arr);
console.log(s1);

// Real word use case of Set
// Ans)like we can remove duplicate entry


// Map
const m1=new Map([
    ["Rohit",40],
    [2,"Rohit"],
    [true,11],
    
]);
console.log(m1);