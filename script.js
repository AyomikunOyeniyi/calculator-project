function add(x,y) {
   console.log(x + y);
};
function subtract(x,y) {
    console.log(x - y);
};
function divide(x,y) {
    console.log(x / y);
};
function multiply (x,y) {
    console.log(x * y);
};

let firstNumber;
let operator;
let secondNumber;

function operate (firstNumber, operator, secondNumber) {
    operator(firstNumber, secondNumber);
};

let buttonNumber;

const buttons = document.querySelectorAll(".number");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonNumber = button.innerHTML;
        const display = document.querySelector(".display");
        display.textContent += buttonNumber;
    })
});

const addButton = document.querySelector(".addition");
addButton.addEventListener('click', add);

const subtractButton = document.querySelector(".subtraction");
subtractButton.addEventListener('click', subtract);