// Create a h1 element using js
// Creating Elements with Raw DOM
// const element1=document.createElement('h1');
// element1.textContent="Hello Coder army";
// element1.className='element';
// element1.id='first';


// element1.style.fontSize="30px"
// element1.style.backgroundColor="green";
// element1.style.color="white";

// Now i have to create one more element h2 in which content is written Strike is launched with same properties like h1

// const element2=document.createElement('h2');
// element2.textContent="Strike is launched";
// element2.className='element';
// element2.id='second';
// element2.style.fontSize="30px"
// element2.style.backgroundColor="blue";
// element2.style.color="white";

// const root=document.getElementById('root');
// root.append(element1);
// root.append(element2);


// now similiarly i have to create h3 element (Repetitive code issues) so it will  become very time consuming the best way for this is make a function and call that function 


// attributes={
//     className:"element",
//     id:"first,
//     style:{
//      fontSize:"30px",
//      backgroundColor:"orange",
//      color:"white"
//     }
// }

// element ={
//     tag:"h1",
//     textContent:"Hello Coder Army",
//     className:"element",
//     id:"first",
//     style:{
//      fontSize:"30px",
//      backgroundColor:"orange",
//      color:"white"}
// }


// Designing a reusable createElement Function

// Custom React(Custom React means creating your own reusable components using React instead of using built-in HTML elements directly.)
// const React={
    
//     createElement:function(tag,attributes,children)
//     {
//       const element=document.createElement(tag);
//       element.textContent=children;
//       element.className=attributes.className;  //we will use loop and iterate over it
//       for(const key in attributes){
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


const reactElement = {
    type:'h1',
    props:{
        className:"element",
        id:"first",
        style:{fontSize:"30px",backgroundColor:"orange",color:"white"},
        children: "Hello Coder Army"
    }
}



// const ReactDOM = {
//     render: function(child, parent){
//         parent.append(child);
//     }
// }
const element1 = React.createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"red",color:"white"}},"Hello Coder Army");

// Now same if i want to craete  new h2 element
const element2 = React.createElement("h1",{className:"element",id:"second",style:{fontSize:"30px",backgroundColor:"green",color:"white"}},"Strike is launched");


// Now next if i want to create h3 element simple just call the function 

const root=document.getElementById('root');
// root.append(element1);
// root.append(element2);  //this can be done using ReactDOM.render=> 
ReactDOM.render(element1,root);
ReactDOM.render(element2,root);

 // ReactDOM.render(element1,document.getElementById('root'));
 // ReactDOM.render(element2,document.getElementById('root'));
 // Q)what does this ReactDOM.render do? 
 // Ans)Use ReactDOM.render Taki apka wo element  DOM  ke sath attach hojaye jo phle ham  mnaually kr re the
 // Ans)ReactDOM.render() is used to attach a React element to the actual DOM.It takes the React element and displays it inside a DOM element, which we earlier used to do manually using JavaScript.
    
    // In simple words,
    // ReactDOM.render() connects the React UI with the browser DOM.  
    // Earlier → we used document.createElement() and appendChild()
    // Now → React does this work using ReactDOM.render()


// React ka kaam hai sirf is javascript object ya react element ko create karna.Dom ke sath kiska koi kaamnhi hai yhap appko Dom ka koi operation nhi dikhega(This is the work of React DOM).React only tells how your ui should look element creation work is done by React DOM