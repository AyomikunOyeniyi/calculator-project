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
    console.log(x * y)
};

let firstNumber;
let operator;
let secondNumber;

function operate (firstNumber, operator, secondNumber) {
    operator(firstNumber, secondNumber);
};

const buttons = document.querySelectorAll('.number');
buttons.forEach(() => {

});
