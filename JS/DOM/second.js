const newpara=document.createElement("p");
newpara.textContent="i am a new paragraph";
console.log(newpara);
newpara.id="first";
newpara.className="second";
document.body.appendChild(newpara);


const heading = document.createElement("h1");
heading.textContent = "I am a new h1 heading";
document.body.appendChild(heading);

console.log(heading);


const newheading=document.createElement("h2");
newheading.textContent="I am a new h2 heading";
document.body.prepend(newheading);
console.log(newheading);