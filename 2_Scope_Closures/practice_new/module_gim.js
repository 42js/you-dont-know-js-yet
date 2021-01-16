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
  let currentValue = 0;
  let totalValue = 0;

  return {
    number,
    plus,
    minus,
    mult,
    div,
    eq,
  };

  function number(charInput) {
    if (!isValidInput(charInput)) {
      throw new Error(INPUT_INVALID_MSG);
    }
    if (operator === '=') {
      totalValue = 0;
      operator = '';
    }
    currentValue = currentValue * BASE + Number(charInput);

    return charInput;
  }

  function isValidInput(charInput) {
    return charInput && charInput.length === INPUT_LENGTH && !isNaN(charInput);
  }

  function plus() {
    operate();

    return (operator = '+');
  }

  function minus() {
    operate();

    return (operator = '-');
  }

  function mult() {
    operate();

    return (operator = '*');
  }

  function div() {
    operate();

    return (operator = '/');
  }

  function eq() {
    operate();
    operator = '=';

    return formatTotal(totalValue);
  }

  function operate() {
    if (operator === '=') {
      return;
    }
    totalValue = operations[operator](totalValue, currentValue);
    currentValue = 0;
  }
}
