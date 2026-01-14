

// adding events
// const element=document.getElementById("one");
// element.onclick=function click()
// {
//     element.textContent="Button text is now changed uing events";
//     element.style.color="red";
// }

// now using prefreed way of adding events
const element=document.getElementById("one");
element.addEventListener('click',function()
{
    element.textContent="event is added using addEventsListener";
    element.style.backgroundColor="green";
});