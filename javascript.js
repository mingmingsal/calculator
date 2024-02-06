const numbers = document.querySelectorAll(".number");
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const operands = document.querySelectorAll(".operand");
let number1 = undefined;
let number2 = undefined;
let operand = undefined;
let value = undefined;
//On number click, add number to display
numbers.forEach(element => {
    element.addEventListener("click", () => {
        const value = element.textContent;
        display.textContent += value;
    });
});

clear.addEventListener("click", () => {
    clearDisplay();
    
});

function ClearValues(){
    number1 = number2 = value = operand = undefined;
}
function clearDisplay() {
    display.textContent = "";
}

function setValue1(value) {
    number1 = +value;
}
function setValue2() {
    number2 = +value;
}

function setOperand(value) {
    operand = value;
}
function operate(operand,number1,number2){
    switch (value) {
        case "minus":
            operand="-";
            break;
        case "plus":
            operand="+"
            break;
        case "multiply":
            operand="*"
            break;
        case "divide":
            operand="/"
            break;
        default:
    }
}
function multiply(number1,number2){
    return number1 * number2;
}
function divide(number1,number2){
    return number1 / number2;
}