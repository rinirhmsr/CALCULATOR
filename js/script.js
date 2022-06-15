const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal-sign");
const allClear = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");

let currentNumber = "0";
let prevNumber = "";
let calculation = "";

const inputNumber = function (number) {
    if(currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber = currentNumber + number;
    }
};

const updateScreen = function (number) {
    calculatorScreen.value = number;
};

const inputOperator = function (operator) {

    if (calculation === "") {
        prevNumber = currentNumber;
    };
    calculation = operator;

    currentNumber = "0";
};

const calculate = function () {
    let result = "";
    switch (calculation) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break
        default:
            break;
    }
    currentNumber = result;
    calculation = "";
};

const clear = function () {
    currentNumber = "0";
    prevNumber = "";
    calculation = "";
};

const inputDecimal = function (decimal) {
    if (currentNumber.includes(".")) {
        return;
    }
    currentNumber += decimal;
};

allClear.addEventListener("click", function () {
    clear();
    updateScreen(currentNumber);
});

equal.addEventListener("click", function (e) {
    calculate();
    updateScreen(currentNumber);
});

numbers.forEach((number) => {
    number.addEventListener("click", function (e) {
        inputNumber(e.target.value);
        updateScreen(currentNumber);
    });
});

operators.forEach(function (operator) {
    operator.addEventListener("click", function(e) {
        inputOperator(e.target.value);
    });
});

decimal.addEventListener("click", function (e) {
    inputDecimal(e.target.value);
    updateScreen(currentNumber);
});