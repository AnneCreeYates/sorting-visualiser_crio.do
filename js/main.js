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

        //give each div content -- prints put the numbers from the array one next to the other -- works without it
        // const newElement = document.createTextNode(arrayForSorting[j]);

        //add the text node to the newly created div
        // newDiv.appendChild(newElement);

        currentDiv.appendChild(newDiv);

        //width of the div is to be determined by the array value
        newDiv.style.height = arrayForSorting[j] + '%';


        //line below adds class name to each div --- when added to the currentDiv it work on the general container not the elements
        //adding to newDiv adds the style to the elements
        newDiv.classList.add("bar-style");
        
        //inserts the new divs in front of the bar-component div 
        //--- may need to figure out how to make the dynamic divs go inside the bar-components div
        // document.body.insertBefore(newDiv, currentDiv);


        /*when lines 31 and 34 and 37 are changed to currentDiv a line of numbers appears in a row -- experiment with that */

    }        
}

