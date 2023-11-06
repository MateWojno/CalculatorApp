let display = document.getElementById('display');
let input = '';

function appendToDisplay(value) {
    input += value;
    display.value = input;
}

function clearDisplay() {
    input = '';
    display.value = '';
}

function calculateResult() {
    try {
        const result = customEval(input);
        display.value = result;
        input = result.toString();
    } catch (error) {
        display.value = 'Error';
        input = '';
    }
}

function backspace() {
    input = input.slice(0, -1);
    display.value = input;
}

function customEval(expression) {
    const tokens = expression.split(/\b/).filter(token => /\S/.test(token));
    return evaluate(tokens);
}

function evaluate(tokens) {
    const operators = ['+', '-', '*', '/'];
    const stack = [];
    const output = [];

    for (const token of tokens) {
        if (!isNaN(token)) {
            output.push(parseFloat(token));
        } else if (operators.includes(token)) {
            while (
                stack.length > 0 &&
                operators.includes(stack[stack.length - 1]) &&
                precedence(token) <= precedence(stack[stack.length - 1])
            ) {
                output.push(stack.pop());
            }
            stack.push(token);
        } else if (token === '(') {
            stack.push(token);
        } else if (token === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                output.push(stack.pop());
            }
            stack.pop(); // Pop the left parenthesis
        }
    }

    while (stack.length > 0) {
        output.push(stack.pop());
    }

    const resultStack = [];
    for (const token of output) {
        if (!isNaN(token)) {
            resultStack.push(token);
        } else if (operators.includes(token)) {
            const b = resultStack.pop();
            const a = resultStack.pop();
            resultStack.push(performOperation(a, b, token));
        }
    }

    return resultStack[0];
}

function precedence(operator) {
    switch (operator) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        default:
            return 0;
    }
}

function performOperation(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                throw new Error('Division by zero');
            }
            return a / b;
    }
}

// Keystroke handler
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (/[0-9+\-*/.=]/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        backspace();
    }
});
