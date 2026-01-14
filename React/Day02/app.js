// create a element using react
// const element = React.createElement('h1',{id:'title'},"Hello Coder Army");
// const element = React.createElement(
//     'h1',
//     { id: 'title' },
//     "Hello Coder Army"
// );

//But this is very complex syntax  complex structure
// const element2 = React.createElement(
//   'div',
//   null,
//   React.createElement('h1', null, "Hello"),
//   React.createElement('h2', null, "hi")
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(element);
// root.render(element2);


//Good syntax from which can make our work very easy as we know we are very familiar with HTML.
/*
WHY WE CAN WRITE HTML-LIKE CODE IN REACT:

We are very familiar with HTML syntax:
 const element=  <h1 id="title">Hello Coder Army</h1> // Developers wanted to write UI using HTML-like syntax, but JavaScript cannot understand this format directly. Because of this problem, JSX was introduced.

// JSX was created because JavaScript cannot understand HTML-like syntax

   JS treats '<' as an operator, not a tag

✅ React uses JSX (JavaScript Syntax Extension)
   JSX looks like HTML but it is NOT HTML

🔁 JSX is converted by Babel into JavaScript:
   <h1 id="title">Hello</h1>
        ↓
   React.createElement('h1', { id: 'title' }, 'Hello')

📌 Browser executes ONLY pure JavaScript
📌 JSX exists only to make UI code readable & familiar (HTML-like)

ONE LINE:
JSX lets us write HTML-like syntax, but internally it becomes JS objects.

//JSX: javscript XML=look like HTML
// Babel is  a javscript compiler
// Babel Work =>
// converts JSX->React.createElement();

Babel converts JSX into normal JavaScript
Example:
<h1>Hello</h1>
⬇️ Babel converts it to:
React.createElement('h1', null, 'Hello');
*/

// JSX: javascript XML: Look like HTML (Babel)
// JSX --> React.createELement() --> React Element(JS Object) --> Real DOM(HTML ELEMENT)
//     babel                    React                        ReactDOM



// const element = <h1 id="title" className="first">Hello Coder Army</h1>;
// //we have use className and it also take styles attributes in object form and it is used in jsx so it is a jsx code not HTML code
// console.log(element);//this can't be understand by js as it is a jsx code so we use babel.

// const element2 = (
//   <div>
//     <h1>Hello</h1>
//     <h2>Hi</h2>
//   </div>
// );

// // React Element
// const element3=(<div>

//    <h1>Hello Coder Army</h1>
//    <h2>kaise ho</h2>
// </div>
// )


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element2);


// React Component(react component is nothing but a function that returns jsx to you)
// React component = function + returns JSX + name starts with Capital


// function App(name){
//    return(
//       <h1>Hello Coder Army{name}</h1>    //Curly Braces allow you to write javascript expressions inside jsx.(Numbers,String,array can be represented but TRUE FALSE NULL Undefined ou cant display )
//    );
// }
// const a=App("Rohit");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(a);
// root.render(App());
// root.render( <h1>Hello Coder Army</h1>);
// root.render(<App />);




// const element=<h1>Hello Coders{10}</h1>

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);


// Props          
//  function App(props){
    
//     return (
//         <h1>Hello Coder Army {props.name} {props.age}</h1>
//     )
// }

// {
//     name:"Rohit",
//     age:30
// }

// React.createElement("h1")
// const element = <App  name="Rohit" age={30}></App>





function Header({name}){

    return (
        <h1>{name} Welcome to Indian Election Commission Website</h1>
    )
}

// const props = {
//     name:"Rohit"
// }

// const {name} = props;

function Main({user}){

    return (
        <>
        <h2>Hi {user.name}</h2>
        <h3>{user.age>18? "Ypur are eligible for vote": "Your are not eligible for vote"}</h3>
        <p>Your city is {user.city}</p>
        </>
        
    )
}

function Footer(){

    return (
        <h3>Thanks for visiting our website</h3>
    )
}

// function Card(){

// }


function App(){

    return (
        <>
       <Header name="Rohit"></Header>
       <Main user={{name:"Rohit",age:30,city:"Kotdwar"}}></Main>
       <Footer />
       </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);