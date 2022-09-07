//create an array and push 100 numbers
const arrayForSorting = [];

//pushes 100 random numbers to the aarrayForSorting
for (let i = 0; i < 101; i++) {
    arrayForSorting.push(Math.floor(Math.random() * 101));
}

//integers should be the height of bars
// const barHeight = arrayForSorting;

//create 100 div elements 
document.body.onload = bars;


//the function creates 100 divs, adds new divs to DOM, adds bar-style class to each div
function bars () {
    //add the new div and its content to DOM
    const currentDiv = document.getElementById("bar-components");

    //create a loop to make 100 divs
    for (let j = 0; j < arrayForSorting.length; j++) {
    
    //create a new div element for each iteration
    const newDiv = document.createElement("div");

    //give each div content
    const newElement = document.createTextNode(arrayForSorting);

    //add the text node to the newly created div
    newDiv.appendChild(newElement);

    //width of the div is to be determined by the array value
    newDiv.style.width = arrayForSorting[j] + '%';

    //line below adds class name to each div
    newDiv.classList.add("bar-style");
    
    //inserts the new divs in front of the bar-component div 
    //--- may need to figure out how to make the dynamic divs go inside the bar-components div
    document.body.insertBefore(newDiv, currentDiv);

    }        
}

