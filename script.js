// event delegation -> design pattern
//addEventListener applied on common parent instead of child



// script.js

let container = document.getElementById('container');
let outScreen = document.getElementById('output');

let currentInput = '';
let operator = '';
let firstOperand = null;

container.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        let value = e.target.textContent;

        if (value === 'C') {
            currentInput = '';
            firstOperand = null;
            operator = '';
            outScreen.textContent = '';
        } else if (value === '=') {
            if (firstOperand !== null && operator && currentInput) {
                let secondOperand = parseFloat(currentInput);
                let result;

                switch (operator) {
                    case '+':
                        result = firstOperand + secondOperand;
                        break;
                    case '-':
                        result = firstOperand - secondOperand;
                        break;
                    case '*':
                        result = firstOperand * secondOperand;
                        break;
                    case '/':
                        if (secondOperand === 0) {
                            alert("Cannot divide by zero");
                            return;
                        }
                        result = firstOperand / secondOperand;
                        break;
                    default:
                        return;
                }

                outScreen.textContent = result;
                currentInput = '';
                firstOperand = null;
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            // Set the operator and store the first operand
            if (currentInput) {
                firstOperand = parseFloat(currentInput);
                operator = value;
                currentInput = '';
                outScreen.textContent += ` ${operator} `;
            }
        } else {
            // Update the current input
            currentInput += value;
            outScreen.textContent += value;
        }
    }
});