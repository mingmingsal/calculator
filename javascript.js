const numbers = document.querySelectorAll(".number");
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const operands = document.querySelectorAll(".operator");
let number1 = "";
let number2 = "";
let operator1 = undefined;
let operator2 = undefined;
let value = undefined;
//On number click, add number to display
numbers.forEach(element => {
    element.addEventListener("click", () => {
        setNumbers(element.textContent);
    });
});

//On operator click, store operator value and clear display
operands.forEach(element => {
    element.addEventListener("click", () => {
        if (number1!= ""&& number2==""){
            
            operator1 = element.id;
            console.log (operator1);
        }
        
        if (number2.length >0 ){
            operator2 = element.id;
            operate(operator1,number1,number2);
        }
    });
});
clear.addEventListener("click", () => {
    clearDisplay();
    ClearValues();
});
function setNumbers(number) {
    const value = number;
    if (operator1 == undefined) {
        number1 += value;
        display.textContent = number1;
    }
    else if (operator1 != "equals"){
        number2 += value;
        display.textContent = number2;
    }

}
function ClearValues() {
    number1 = number2 = "";
    value = operator1 = operator2 = undefined;
}
function clearDisplay() {
    console.log("clearing display");
    display.textContent = "0";
}

function operate(operator, value1, value2) {
    value1 = +value1;
    value2 = +value2;
    
    switch (operator) {
        case "subtract":
            value = subtract(value1, value2);
            break;
        case "add":
            value = add(value1, value2);
            break;
        case "multiply":
            value = multiply(value1, value2);
            break;
        case "divide":
            value = divide(value1, value2);
            break;
        default:
    }
    console.log(`${operator}: ${value1} and ${value2}= ${value}`);
    display.textContent = ((Math.round(value)*100) / 100).toString();
    number1 = value;
    number2 = "";
    operator1= operator2;
    operator2 = undefined;
    value = undefined; 

}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    return number1 / number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function add(number1, number2) {
    console.log(number1 + number2);
    return number1 + number2;
}
clearDisplay();