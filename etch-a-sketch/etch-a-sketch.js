
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
    let squareSize = 1000/gridSize;
    let marginSize = 1000/gridSize * (10/100);
    squaresContainer.style.setProperty("padding", "" + marginSize + "px");
    rows.forEach(row => {
        console.log("hello");
        row.style.setProperty("max-height", "" + squareSize + "px");
        for (i = 0; i < gridSize; i++){
            const square = document.createElement("div")
            square.classList = "square"
            square.style.setProperty("max-width", "" + squareSize + "px");
            square.style.setProperty("max-height", "" + squareSize + "px");
            // square.style.setProperty("margin", "" + marginSize + "px");
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "pink";

            });
            // square.addEventListener("mouseleave", () => {
            //     square.style.backgroundColor = "rgb(84, 141, 246)";
            // });
            row.appendChild(square);
        }
    })
}

function getGridSize() {
    let gridSize = 0;
    if (isInitialGrid) {
        gridSize = 50;
        isInitialGrid = false;
    } else {
        gridSize = getInput();
        console.log("gridSize: " + gridSize);
    }
    return gridSize;
}

function getInput() {
    let userInput = prompt("Enter a grid length from 1-100:");
    let int = parseInt(userInput);

    if (Number.isInteger(int) && int <= 100) {
    } else {
        userInput = 0;
    }
    squaresContainer.remove();
    console.log("remove");
    return userInput;
}





