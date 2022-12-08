
//create an event listener for the new array, so there is no need for reloading the page every time
const newArrButton = document.getElementById("new-arr-btn");

//creates 100 div elements on load
// sdocument.body.onload = bars;

//leaving the arrayForSorting, currentDiv nad the loop causes the bars not to be random after pressing the new array button the second time

//create an array and push 100 numbers
// const arrayForSorting = [];
    
//add the new div and its content to DOM
let currentDiv = document.getElementById("bar-components");

//pushes 100 random numbers to the aarrayForSorting - works here better than up top
// for (let i = 0; i < 101; i++) {
//     arrayForSorting.push(Math.floor(Math.random() * 101));
// }


//the below kinda works, but adds the visualisation on new bars instead of replacing the old one
//also adds identical one instead of random

// newArrButton.addEventListener("click", bars);
newArrButton.addEventListener("click", bars);

//function adding new random bars

function addingBars() {
    //create a loop to make 100 divs - the same loop is in the bar function (does the same) - there the bars are rundom after pressing the second time
    for (let j = 0; j < arrayForSorting.length; j++) {
    
        //create a new div element for each iteration
        const newDiv = document.createElement("div");

        //give each div content -- prints put the numbers from the array one next to the other -- works without it
        // const newElement = document.createTextNode(arrayForSorting[j]);

        //add the text node to the newly created div
        currentDiv.appendChild(newDiv);

        //height of the div is to be determined by the array value
        newDiv.style.height = arrayForSorting[j] + '%';

        //line below adds class name to each div
        newDiv.classList.add("bar-style");

    }
}

function removingBars (){
    // for (let k = -1; k < arrayForSorting.length; k--) {

        // const newDiv = document.getElementsByClassName("bar-style");

        //successfuly removes the entire section, but it seems to be permanent
        currentDiv.remove();

        
        // for (let k = 0; k = currentDiv.length - 1; k--){
        //     currentDiv.remove(newDiv);
            
        // }
        
        // console.log(newDiv);
        // console.log(currentDiv);
        // console.log(arrayForSorting)
        
        //height of the div is to be determined by the array value
        // newDiv.style.height = 0;

        //line below adds class name to each div
        // newDiv.classList.add("bar-style");

       

    // }
    
}


//the function creates 100 divs, adds new divs to DOM, adds bar-style class to each div
function bars () {
    

    // //create an array and push 100 numbers
    const arrayForSorting = [];
    
    //add the new div and its content to DOM
    // const currentDiv = document.getElementById("bar-components");
    
    // //pushes 100 random numbers to the aarrayForSorting - works here better than up top
    for (let i = 0; i < 101; i++) {
        arrayForSorting.push(Math.floor(Math.random() * 101));
        
    }

    for (let j = 0; j < arrayForSorting.length; j++) {
    
        //create a new div element for each iteration
        const newDiv = document.createElement("div");

        //give each div content -- prints put the numbers from the array one next to the other -- works without it
        // const newElement = document.createTextNode(arrayForSorting[j]);

        //add the text node to the newly created div
        currentDiv.appendChild(newDiv);


        const anotherNewDiv = document.createElement("div");

        //height of the div is to be determined by the array value
        newDiv.style.height = arrayForSorting[j] + '%';

        //line below adds class name to each div
        newDiv.classList.add("bar-style");

        

        newDiv.replaceWith(anotherNewDiv);

        
    }

   
    // console.log(currentDiv)
    // currentDiv.remove(document.getElementsByClassName("bar-style"));   
   
    // removingBars();
    // addingBars();
   
};

//initiates the function on load
bars();

