console.log("Hello World Start");

// code

// const p1 = fetch("https://api.github.com/users");
// console.log(p1);




// fullfilled,reject

// p1.then((response)=>{
    //     console.log(response.json)
    //     // json+>converts object into data and response.json is a asynchronous task.
    // })
    
    // const p2 = p1.then((response)=>{
        //    return response.json();
        // })
        
        // p2.then((response)=>{
            //     console.log(response);
            
            // })
            
            // but we use short metod like promise chaining
            const p1 = fetch("https://api.github.com/users");
                .then((response)=>{
    
                  return response.json();
               })
               .then((data)=>{
                   console.log(data);
               })






console.log("Hello World End");


