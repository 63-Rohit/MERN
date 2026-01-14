// Create a h1  element using js
// const element1=document.createElement('h1');
// element1.textContent="Hello Coder Army";
// element1.className='element';
// element1.id='first';
// element1.style.fontsize="30px";
// element1.style.backgroundColor="green";
// element1.style.color="white";




// Now i want to create next element h2 with same property
// const element2=document.createElement('h2');
// element2.textContent="Strike is launched";
// element2.style.fontsize="30px";
// element2.className='element';
// element2.id='second';
// element2.style.color="red";
// element2.style.backgroundColor='aqua';
// const root=document.getElementById('root');
// root.append(element1);
// root.append(element2);



// Now same i want to create element3(but it will become  repetitive  process so we will make function for it)
// function createElement(tag,attributes,children){
//     const element=document.createElement(tag);
//     element.textContent=children;
//     for(const key in attributes){
//              if(key==='style'){
//                  Object.assign(element.style, attributes.style);
//              }
//              else{
//              element[key] = attributes[key];
//              }
//     }
//           return element;
//     }


// const element1=createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"Hello Coder Army");
// For craeting element h2
// const element2=createElement("h2",{className:"element",id:"second",style:{fontSize:"30px",backgroundColor:"green",color:"white"}},"Strike is launched");
// For creating element h2 just call the function so the process now bwcome very fast as earlier we are writing the same code again and again
// const element3=createElement("h3",{className:"element",id:"third",style:{fontSize:"30px",backgroundColor:"red",color:"white"}},"Hello Rohit");

// const root=document.getElementById('root');
// root.append(element1);
// root.append(element2);
// root.append(element3);




// Designing a reusable createElement Function

// Custom React(Custom React means creating your own reusable components using React instead of using built-in HTML elements directly.)

// const React={
//      createElement: function(tag,attributes,children){
//     const element=document.createElement(tag);
//     element.textContent=children;
//     for(const key in attributes){
//              if(key==='style'){
//                  Object.assign(element.style, attributes.style);
//              }
//              else{
//              element[key] = attributes[key];
//              }
//     }
//           return element;
//     }
// }

// const element1=React.createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"Hello Coder Army");

// const element2=React.createElement("h2",{className:"element",id:"second",style:{fontSize:"30px",backgroundColor:"green",color:"white"}},"Strike is launched");


// const ReactDOM = {
//     render: function(child, parent){
//         parent.append(child);
//     }
// }
// const root=document.getElementById('root');
// root.append(element1);
// root.append(element2);
// root.append(element3);//now this can be done using render function
// ReactDOM.render(element1,root);
// ReactDOM.render(element2,root);


//  Q)what does this ReactDOM.render do? 
 // Ans)Use ReactDOM.render Taki apka wo element  DOM  ke sath attach hojaye jo phle ham  mnaually kr re the
 // Ans)ReactDOM.render() is used to attach a React element to the actual DOM.It takes the React element and displays it inside a DOM element, which we earlier used to do manually using JavaScript.
    
    // In simple words,
    // ReactDOM.render() connects the React UI with the browser DOM.  
    // Earlier → we used document.createElement() and appendChild()
    // Now → React does this work using ReactDOM.render()



// Original React(The code is coming from react cdn link where whole react code is written)


// const element1=React.createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"Hello Coder Army");

// const element2=React.createElement("h2",{className:"element",id:"second",style:{fontSize:"30px",backgroundColor:"green",color:"white"}},"Strike is launched");

//  const root=document.getElementById('root');
// ReactDOM.render(element1,root);
// ReactDOM.render(element2,root);
// Question:
// Why does only one element get rendered when we use ReactDOM.render() multiple times?

// Answer:
// When we use ReactDOM.render(), React shows the content inside the given root element.
// If we call ReactDOM.render() again on the same root, React replaces the previous content with the new one.

// So, even though both render functions run, only the last one is visible because it overwrites the first one.

// That is why only one element gets rendered.

//  React’s job is only to create JavaScript objects (React elements).
// React does not work directly with the DOM and performs no DOM operations.
// All DOM-related work is handled by ReactDOM.
// React only tells how the UI should look, and the actual element creation and rendering in the DOM is done by ReactDOM.

// Example:This object is created by React (All DOM-related work is handled by ReactDOM.)
// // const reactElement = {
//     type:'h1',
//     props:{
//         className:"element",
//         id:"first",
//         style:{fontSize:"30px",backgroundColor:"orange",color:"white"},
//         children: "Hello Coder Army"
//     }
// }
// React only tells how the UI should look, and the actual element creation and rendering in the DOM is done by ReactDOM.

// Que)“Why is render not inside React, and why is it inside ReactDOM? 
// or Why does React separate UI creation from rendering, and why are different renderers used?”

//Ans)React is used on many platforms such as web browsers, mobile apps, iOS/Android applications, and even for generating PDFs.
// Because of this, React does not directly render the UI.

// React only converts the code into simple JavaScript objects that describe the UI.
// These objects can be understood by all platforms.

// Each platform has its own rendering engine:

// ReactDOM for browsers

// React Native for mobile apps

// Other renderers for different environments

// This separation allows the same React code to be used everywhere, while different engines handle the actual rendering.


// Original React
const React = {
    createElement: function(type,props,children){
   
        return {
            type:type,
                props:{
                ...props,
            children:children
        }
        }
     }
}
// //const element1=React.createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"Hello Coder Army");

// //const element2=React.createElement("h2",{className:"element",id:"second",style:{fontSize:"30px",backgroundColor:"green",color:"white"}},"Strike is launched");
// How is our React element is looking
// const reactElement = {
//     type:'h1',
//     props:{
//         className:"element",
//         id:"first",
//         style:{fontSize:"30px",backgroundColor:"orange",color:"white"},
//         children: "Hello Coder Army"
//     }
// }

// Our own ReactDOM Rendering engine

const ReactDOM = {
    render: function(reactElement,root){
        
        root.innerHTML = '';

       const element =  document.createElement(reactElement.type);
        
      const {props} = reactElement;

      for(const key in props){
          if(key==='style'){
              Object.assign(element.style,props.style);
            }
            else if(key==='children'){
                element.textContent = props[key];
            }
            else{
                element[key] = props[key];
            }
        }
        
        root.append(element);
    }
}

const element1=React.createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"Hello Coder Army");

const element2=React.createElement("h2",{className:"element",id:"second",style:{fontSize:"30px",backgroundColor:"green",color:"white"}},"Strike is launched");

ReactDOM.render(element1,document.getElementById('root'));
ReactDOM.render(element2,document.getElementById('root'));
