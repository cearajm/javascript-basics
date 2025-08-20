
// initialize
const gridBody = document.querySelector("body");
const btn = document.createElement("button");
const gridArea = document.createElement("div");
let squaresContainer = "";

gridBody.appendChild(btn);
gridBody.appendChild(gridArea);

gridArea.classList = "gridArea";
btn.textContent = "create new grid !";


// create grid
let isInitialGrid = true;
generateGrid(getGridSize());
btn.addEventListener("click", () => {
    generateGrid(getGridSize());
});


// functions
function generateGrid(gridSize) {
    squaresContainer = document.createElement("div")
    squaresContainer.classList = "squaresContainer";
    gridArea.appendChild(squaresContainer);

    if (gridSize == 0) {
        console.log("no action");
        return;
    } else {
        createRows(gridSize);
        createSquares(gridSize);
    }

}

function createRows(gridSize) {
    console.log(gridSize);
    for (i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList = "row"
        squaresContainer.appendChild(row);
    }
}

function createSquares(gridSize) {
    const rows = document.querySelectorAll(".row");
    
    rows.forEach(row => {
        console.log("hello");
        for (i = 0; i < gridSize; i++){
            const square = document.createElement("div")
            square.classList = "square"
            row.appendChild(square);
        }
    })
}

function getGridSize() {
    let gridSize = 0;
    if (isInitialGrid) {
        gridSize = 4;
        isInitialGrid = false;
    } else {
        gridSize = getInput();
        console.log("gridSize: " + gridSize);
    }
    return gridSize;
}

function getInput() {
    let userInput = prompt("Enter number of squares:");
    let int = parseInt(userInput);

    if (Number.isInteger(int) && int <= 10) {
    } else {
        userInput = 0;
    }
    squaresContainer.remove();
    console.log("remove");
    return userInput;
}





