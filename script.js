//functions for basic math operations
let result = '';

//declaring variables for numbers and operators
let firstNumber = '';
let operator = '';
let secondNumber = '';


function add(firstNumber, secondNumber) {
    result = firstNumber + secondNumber;
    display.textContent = result;
};

function subtract(firstNumber, secondNumber) {
    result = firstNumber + secondNumber;
    display.textContent = result;
};

function multiply(firstNumber, secondNumber) {
    result = firstNumber * secondNumber;
    display.textContent = result;
};

function divide(firstNumber, secondNumber) {
    result = firstNumber / secondNumber;
    display.textContent = result;
};






//operate function
function operate() {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (operator === '+') {
        add(firstNumber, secondNumber);
    } else if (operator === '-') {
        subtract(firstNumber, secondNumber);
    } else if(operator === 'x') {
        multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        if (secondNumber === 0) {
            display.textContent = "Error"
        }
        divide(firstNumber, secondNumber);
    };
};


// clear button functionality
const clearButton =  document.querySelector(".clear");

clearButton.addEventListener('click', () => {
    display.textContent = ' ';
})

//functions to display numbers
//first, to call the display
const display = document.querySelector(".display");

//then for the number buttons
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((numberButton) => {
    
    numberButton.addEventListener('click', () => {
        if (operator === '') {
            firstNumber += numberButton.textContent;
            display.textContent = firstNumber;
        } else {
            secondNumber += numberButton.textContent;
            display.textContent = secondNumber;
        };
        
    });

});


//then for the operator buttons
const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((operatorButton) => {

    operatorButton.addEventListener('click', () => {
        operator = operatorButton.textContent;
        display.textContent += " " + operator;
    });
});

// for the equals button
const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener('click', operate);