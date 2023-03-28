
//create an event listener for the new array, so there is no need for reloading the page every time
const newArrButton = document.getElementById("new-arr-btn");

//add the new div and its content to DOM
let parentDiv = document.getElementById("bar-components");

// newArrButton.addEventListener("click", bars);
newArrButton.addEventListener("click", generateBars);

function generateBars(){
    clearBars();
    const arrayForSorting = generateRandomArray(100);
    createBars(arrayForSorting);
}

function clearBars() {
    const childDivs = parentDiv.querySelectorAll('div');
    childDivs.forEach((childDiv) => {
        childDiv.remove();
    });
}

function generateRandomArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 101));
    }
    return array;
}
    
function createBars(array) {
    for (let j = 0; j < array.length; j++) {
    
        //create a new div element for each iteration
        const newDiv = document.createElement("div");

        //add the text node to the newly created div
        parentDiv.appendChild(newDiv);

        //height of the div is to be determined by the array value
        newDiv.style.height = array[j] + '%';

        //line below adds class name to each div
        newDiv.classList.add("bar-style");
    }
};

//initiates the function on load
generateBars();

