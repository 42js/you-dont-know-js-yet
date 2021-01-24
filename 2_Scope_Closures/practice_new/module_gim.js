'use strict';

const INPUT_LENGTH = 1;
const INPUT_INVALID_MSG = 'this is invalid input.';
const BASE = 10;

function calculator() {
  const operations = {
    '': (num1, num2) => (num1 = num2),
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2,
  };

  let operator = '';
  let totalValue = 0;
  let currentValue = 0;

  return {
    number,
    plus: () => operate('+'),
    minus: () => operate('-'),
    mult: () => operate('*'),
    div: () => operate('/'),
    eq,
  };

  function number(charInput) {
    if (!isValidInput(charInput)) {
      throw new Error(INPUT_INVALID_MSG);
    }
    if (operator === '=') {
      operator = '';
      totalValue = 0;
    }
    currentValue = currentValue * BASE + Number(charInput);

    return charInput;
  }

  function isValidInput(charInput) {
    return charInput && charInput.length === INPUT_LENGTH && !isNaN(charInput);
  }

  function eq() {
    operate('=');

    return formatTotal(totalValue);
  }

  function operate(charInput) {
    if (operator === '=') {
      return (operator = charInput);
    }
    totalValue = operations[operator](totalValue, currentValue);
    currentValue = 0;

    return (operator = charInput);
  }
}
