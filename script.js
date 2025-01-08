// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let operand1 = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      currentInput = '';
      operand1 = null;
      operator = '';
      display.textContent = '0';
    } else if (value === '=') {
      if (operator && operand1 !== null) {
        const operand2 = parseFloat(currentInput);
        let result = 0;
        switch (operator) {
          case '+': result = operand1 + operand2; break;
          case '-': result = operand1 - operand2; break;
          case '*': result = operand1 * operand2; break;
          case '/': result = operand2 !== 0 ? operand1 / operand2 : 'Error'; break;
        }
        display.textContent = result;
        currentInput = result.toString();
        operand1 = null;
        operator = '';
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      operator = value;
      operand1 = parseFloat(currentInput);
      currentInput = '';
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
