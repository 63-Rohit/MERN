// 1)Using Inline Event Handlers

// function handleClick(){
//     const element=document.getElementById("first");
//     element.textContent="Strike is coming";
    
// }

// // preferred way of adding events
// 2)using DOM Properties

// const element=document.getElementById("first");
// element.onclick=function handleClick(){
    //     element.textContent="Strike is coming";
// }

// // it is also not preferred way if i have to perform 2 to 3 action then it will override 1st one.
// element.onclick=function handleClick(){
    //     element.textContent="Iam the best";
    // }
    
    // PreferreD WAY(BEST WAY) can apply multiplpe events listener without overriding previous one.
    
    // 3)using addEventListener
    const element=document.getElementById("first");

element.addEventListener('click',()=>{
    element.textContent="Strike is coming";
    element.style.backgroundColor="green";

})



// slelecting div
const child1=document.getElementById("child1");
child1.addEventListener('click',()=>{
    child1.textContent="Iam Clicked";
})


const child2=document.getElementById("child2");
child2.addEventListener('click',()=>{
    child2.textContent="Iam Clicked"; 
})

const child3=document.getElementById("child3");
child3.addEventListener('click',()=>{
    child3.textContent="Iam Clicked";

})


// To apply Iam clicked in all 5 div instead of doing it manually.
// const parent=document.getElementById("parent");
// console.log(parent.children);

// for(let child of parent.children)
// {
//     child.addEventListener('click',()=>{
//         child.textContent="Iam Clicked";
//     })
// }

// I am apllying event listener in all box  with the help of loop.suppose 100 element 100 event listener will be appllied so this is also not a optimized approach.



// optimizeed aaproach=.Bubbling Phase
//Event Bubbling Process
//1)Capture Phase
//2)Target Phase
//3)Bubbling Phase

const grandparent = document.getElementById("grandparent");
grandparent.addEventListener('click',(e)=>{
    console.log(e.target);
    console.log("GrandParent is clicked");
},false)

const parent = document.getElementById("parent");
parent.addEventListener('click',(e)=>{
    console.log(e);
    console.log("Parent is clicked");
},false)

const child = document.getElementById("child");
child.addEventListener('click',(e)=>{
    console.log(e);
    e.stopPropagation();
    console.log("child is clicked");
},false)


// By default capture phase is off so thats why we not write it
// capture phase on(True) hai: Top se down aaoge: Us time pe event ko trigger kar diya jaayega
// capture phase off(False) hai: Event hai usko down to up(Bubbling phase bolte hai, tab trigger kiya jaayega)



// if capture phase is on:jab aap top se down aaoge us time mai apke event ko trigerred kardiya jayga.
// if capture phase is off:jo apka Event hai usko down to up(also called as Bubbling Phase) tab trigerred kiya jayyga.


