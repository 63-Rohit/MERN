// Creating Element
const newElement=document.createElement("h2");
console.log(newElement);
newElement.textContent="Strike is coming";
newElement.id="second";

console.log(newElement);
 
// select element
const element=document.getElementById("first");
element.before(newElement);
// element.after(newElement);


const newElement2=document.createElement("h3");
newElement2.textContent="Diwali aa rahi hai";
newElement2.id="third";
// newElement2.className="Diwali";
// class keyword  is reserved in js so thats why we use className instead of class
// newElement2.className+=" Holi";
// Best way so that class name is not overridden
newElement2.classList.add("diwali");
newElement2.classList.add("holi");

newElement2.style.backgroundColor="brown";


element.before(newElement2);
element.after(newElement2);
console.log(newElement2);

// unordered list example
const list1=document.createElement("li");
list1.textContent="Milk";
const list2=document.createElement("li");
list2.textContent="Cake";
const list3=document.createElement("li");
list3.textContent="Halwa";
const unorderedElement=document.getElementById("Listing")
unorderedElement.append(list1);
unorderedElement.append(list2);
unorderedElement.prepend(list3);



//  Easiest  method In real world We have an Unordered list and backend se hamare paas ek data ayga array ki form mai is data ke andar wo bolega jo b iske andar likha gya hai isko aapko unordered list ke andar dalna hai.

const arr=["Egg","Panner","Tofu","Tea"];
for(let food of arr)
{
    const list=document.createElement("li");
    list.textContent=food;
    unorderedElement.append(list);
}
// but this method is not recomennded for ui very bad meythod for ui.if 1000 list then you are changinging ui 1000 times.

const fragment=document.createDocumentFragment();


// now if i want to delete HEllo Coder army
const s1=document.getElementById("first");
// s1.remove();

// Note: whenever you want to display user data  then use textContent not innerHTMl.