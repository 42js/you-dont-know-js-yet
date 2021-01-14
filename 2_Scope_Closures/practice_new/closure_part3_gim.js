'use strict';

const INPUT_LENGTH = 1;
const INPUT_INVALID_MSG = 'this is invalid input.';
const BASE = 10;

function calculator() {
  const operators = ['+', '-', '*', '/', '='];
  let operator;
  let number = 0;
  let total = 0;

  return calculate;

  function calculate(input) {
    if (!isValidInput(input)) {
      throw new Error(INPUT_INVALID_MSG);
    }
    if (isOperator(input) && operate()) {
      operator = input;
      number = 0;

      return operator === '=' ? formatTotal(total) : input;
    }
    if (operator === '=') {
      operator = null;
      total = 0;
    }
    number = operator === '=' ? Number(input) : number * BASE + Number(input);

    return input;
  }

  function isValidInput(input) {
    if (input.length !== INPUT_LENGTH) {
      return false;
    }
    if (!isNumber(input) && !isOperator(input)) {
      return false;
    }

    return true;
  }

  function isNumber(input) {
    return !isNaN(Number(input));
  }

  function isOperator(input) {
    return operators.includes(input);
  }

  function operate() {
    if (operator === '=') {
      return true;
    }
    if (!operator) {
      total = number;
    } else if (operator === '+') {
      total += number;
    } else if (operator === '-') {
      total -= number;
    } else if (operator === '*') {
      total *= number;
    } else if (operator === '/') {
      total /= number;
    }

    return true;
  }
}
