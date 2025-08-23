

// 1 -- basic functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// 3 -- operate function
function operate(firstNum, operator, secondNum) {
    if (operator == "+") return add(firstNum, secondNum);
    if (operator == "-") return subtract(firstNum, secondNum);
    if (operator == "*") return multiply(firstNum, secondNum);
    if (operator == "/") return divide(firstNum, secondNum);
}

// update display
function updateDisplay(value) {
    if (value == "=") {
        output.textContent = "";
    } else if (output.textContent.length < 30) {
        output.textContent += value;
    }
}


// 2 -- input variables
let firstNumber = 3;
let plus = "+";
let minus = "-";
let times = "*";
let slash = "/";
let secondNumber = 4;

console.log(operate(firstNumber, plus, secondNumber));
console.log(operate(firstNumber, minus, secondNumber));
console.log(operate(firstNumber, times, secondNumber));
console.log(operate(firstNumber, slash, secondNumber));


// get elements
const buttons = document.querySelectorAll("button");
let output = document.querySelector("p");
console.log(output.textContent);

// handle button functionality
buttons.forEach(button => {
    const value = button.textContent;
    button.addEventListener("click", () => {
        console.log(value);
        updateDisplay(value);
    });
});