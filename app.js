let firstNumber = "";
let operator = "";
let secondNumber = "";

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
}

function calculateResult(equals) {
    if (equals === "=") {
        secondNumber = document.getElementById("display").value;
        document.getElementById("display").value = operate(operator, firstNumber, secondNumber);
        firstNumber = document.getElementById("display").value;
        secondNumber = "";
        operator = "";
    } else {
        firstNumber = document.getElementById("display").value;
        operator = equals;
        document.getElementById("display").value = "";
    }
}

function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case "+":
            return (a + b).toFixed(2);
        case "-":
            return (a - b).toFixed(2);
        case "*":
            return (a * b).toFixed(2);
        case "/":
            if (b === 0) {
                return "Error: Division by zero";
            }
            return (a / b).toFixed(2);
        default:
            return "Error";
    }
}
