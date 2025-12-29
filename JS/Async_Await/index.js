// Lecture 20 Async Await in javascript

//async function always return a promise.

// async function greet(){
//     return "Rohit";

// return new Promise((resolve,reject)=>{
//     reject("Rohit");
// })
// }

// const response = greet();
// console.log(response);
// response.then((data)=>console.log(data))
// .catch((error)=>{
//     console.log("Error:", error);
// })

////Like in previous lecture we have github user api and we want to bring data as this data is aync task() it wil take time to execute) so we handle this using ->

// fetch("https://api.github.com/users")
// .then((response)=>response.json())
// .then((data)=>console.log(data));

//// this promise chaining method  is also complex so we do this github task by this method=>
//     console.log("Hello");
//     const response = await fetch("https://api.github.com/users");
//     const data = await response.json();
//      console.log(data);
// console.log("Hello Ji kaise ho");

//  // Project of aync await
async function github() {
  try {
    const response = await fetch("https://api.github.com/users");
    if (!response.ok) {
      throw new Error("Data is not persent");
    }

    const data = await response.json();
    // console.log(data);

    const parent = document.getElementById("first");

    for (let user of data) {
      const element = document.createElement("div");
      element.classList.add("user");

      const image = document.createElement("img");
      image.src = user.avatar_url;

      const userName = document.createElement("h2");
      userName.textContent = user.login;

      const anchor = document.createElement("a");
      anchor.href = user.html_url;
      anchor.textContent = "Visit Profile";

      element.append(image, userName, anchor);
      parent.append(element);
    }
  } catch (error) {
    console.log("error");
  }
}

github();

// console.log("Hello Ji kaise ho");

// // Solution of previous Zomato application using async await
// const orderDetail = {
  //     orderId: 123123,
  //     food:["Pizza","biryani","coke"],
  //     cost: 620,
  //     customer_name: "Rohit",
  //     customer_location: "Dwarka",
  //     restaurant_location: "Delhi"
  // }
  // function placedOrder(orderDetail){
  //     console.log(`${orderDetail.cost} Payment is in progress`);
  //     return new Promise((resolve,reject)=>{
  //        setTimeout(()=>{
  //       if(Math.random()>0.1){
  //       console.log("Payment is received and order get placed");
  //       orderDetail.status = true;
  //        resolve(orderDetail);
  //       }
  //       else{
  //         reject("Payment is failed");
  //       }
  //     },3000)
  //     })
  // }
  // function preparingOrder(orderDetail){
  //     console.log(`Your food preparation started of ${orderDetail.food}`);
  //     return new Promise((resolve,reject)=>{
  //      setTimeout(()=>{
  //         if(Math.random()>0.05){
  //         console.log("Your order is now prepared");
  //         orderDetail.token = 123;
  //         resolve(orderDetail);
  //         }
  //         else{
  //             reject("Food item is not persent at restaurant");
  //         }
  //     },3000);
  //     })
  // }
  // function pickupOrder(orderDetail){
  //     console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);
  //     return new Promise((resolve,reject)=>{
  //         setTimeout(()=>{
  //          if(Math.random()>0.05){
  //         console.log("I have picked up the order");
  //         orderDetail.received = true;
  //         resolve(orderDetail);
  //         }
  //         else{
  //            reject("Delivery boy Unable to reach restaurant")
  //         }
  //     },3000);
  //     })
  // }
  // function deliverOrder(orderDetail){
  //     console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);
  //     return new Promise((resolve,reject)=>{
  //        setTimeout(()=>{
  //         console.log("Order delivered succesfully");
  //         orderDetail.delivery = true;
  //         resolve(orderDetail);
  //     },3000)
  //     })
  // }



  // // Solution of previous Zomato application using async await
  // async function ordering(){
  //     try{
  //         const response1=await placeOrder(orderDetail);
  //         const response2=await preparingOrder(response1);
  //         const response3=await pickupOrder(response2);
  //         const response4=await deliverOrder(response3);
  //         console.log(response4);
  //     }
  //     catch(error){
  //         console.log("Error: ",error);
  //     }
  // }
  // ordering();




  

 // // Hypothetical Situation

// // Consider an asynchronous function that fetches user-related data:

async function userDetail() {
    const comment = await fetch("userComment");
    const photos  = await fetch("userPhoto");
    const chat    = await fetch("chat");
}


//// In this implementation, each fetch request is executed sequentially. The program waits for the comments to be fetched first, then fetches the photos, and finally retrieves the chat data. Although these operations are independent of each other, they are executed one after another, which leads to unnecessary delay and reduced performance.

// //Optimized Solution Using Parallel Execution

// //Since the above asynchronous operations do not depend on each other, they should be executed in parallel. This can be achieved using Promise.all():

const [comment, photos, chat] = await Promise.all([
    fetch("userComment"),
    fetch("userPhoto"),
    fetch("chat")
]);


// //In this approach, all three fetch requests are initiated simultaneously, and the program waits until all of them are resolved. This significantly improves performance by reducing the total execution time.

// // Real-World Use Case

// In real-world backend applications, developers often need to establish connections with multiple databases or services. Since creating a database connection is an asynchronous operation, it is inefficient to connect to each database one after another. Instead, parallel requests are made to establish all connections simultaneously, which results in faster and more efficient system performance.

// Key Takeaway

// When multiple asynchronous tasks are independent, executing them in parallel using Promise.all() is a best practice for improving application performance.

// };

