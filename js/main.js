//create an array and push 100 numbers
const arrayForSorting = [];

//pushes 100 random numbers to the aarrayForSorting
for (let i = 0; i < 101; i++) {
    arrayForSorting.push(Math.floor(Math.random() * 101));
}


//integers should be the height of bars
const barHeight = arrayForSorting;
console.log(barHeight);

//create 100 div elements
document.body.onload = addElement;

function addElement () {
    //create  a new div element
    const newDiv = document.createElement("div");

    //give it content (most likely in this case it will have to be a loop throufh the array?)
    const newElement = document.createTextNode(barHeight);

    ////add the text node to the newly created div
    newDiv.appendChild(newElement);

    //add the new div and its content to DOM
    const currentDiv = document.getElementById("bar-components");
    currentDiv.className = "bar-style";
    document.body.insertBefore(newDiv, currentDiv);

    

    //is supposed to add class to the div, but doesn't work
    
}