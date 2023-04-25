
const newArrButton = document.getElementById("new-arr-btn");
let parentDiv = document.getElementById("bar-components");
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
    const randomIndexes = [];

    for (let i = 0; i < length; i++) {
        array.push(i);
        randomIndexes.push(Math.random());
    }
    return array.sort((a, b) => randomIndexes[a] - randomIndexes[b]).map((value) => value + 1);

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

generateBars();
