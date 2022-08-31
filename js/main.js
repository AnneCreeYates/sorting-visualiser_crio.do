//create an array and push 100 numbers
const arrayForSorting = [];

//pushes 100 random numbers to the aarrayForSorting
for (let i = 0; i < 101; i++) {
    arrayForSorting.push(Math.floor(Math.random() * 101));
}


//integers should be the height of bars
const barHeight = arrayForSorting;

//create 100 div elements --at the moment only 1 element is created, which contains a string of 100 numbers
document.body.onload = addElement;

function addElement () {
    //create a loop to make 100 divs
    for (let i = 0; i < arrayForSorting.length; i++) {
    
    //create  a new div element
    const newDiv = document.createElement("div");

    //give it content (most likely in this case it will have to be a loop throufh the array?)
    const newElement = document.createTextNode(arrayForSorting[i]);

    //add the text node to the newly created div
    newDiv.appendChild(newElement);

    //add the new div and its content to DOM
    const currentDiv = document.getElementById("bar-components");

    //line below is supposed to add class name to each div -- doesn't work yet
    newDiv.classList.add("bar-style");

    document.body.insertBefore(newDiv, currentDiv);
    } 
        
}