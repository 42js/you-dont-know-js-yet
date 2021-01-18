"use strict";

function formatTotal(display) {
  if (Number.isFinite(display)) {
    // constrain display to max 11 chars
    let maxDigits = 11;
    // reserve space for "e+" notation?
    if (Math.abs(display) > 99999999999) {
      maxDigits -= 6;
    }
    // reserve space for "-"?
    if (display < 0) {
      maxDigits--;
    }

    // whole number?
    if (Number.isInteger(display)) {
      display = display.toPrecision(maxDigits).replace(/\.0+$/, "");
    }
    // decimal
    else {
      // reserve space for "."
      maxDigits--;
      // reserve space for leading "0"?
      if (Math.abs(display) >= 0 && Math.abs(display) < 1) {
        maxDigits--;
      }
      display = display.toPrecision(maxDigits).replace(/0+$/, "");
    }
  } else {
    display = "ERR";
  }
  return display;
}

function useCalc(calc, keys) {
  return [...keys].reduce(function showDisplay(display, key) {
    var ret = String(calc(key));
    return display + (ret != "" && key == "=" ? "=" : "") + ret;
  }, "");
}

function calculator() {
  let totalValue = 0;
  let currentVaule = "";
  let currentOp = "";
  let restart = false;

  const operators = ["+", "-", "*", "/", "%"];

  function isNum(key) {
    return Number(key) ? true : false;
  }

  function op(v1, v2, op) {
    switch (op) {
      case "+":
        return v1 + v2;
      case "-":
        return v1 - v2;
      case "*":
        return v1 * v2;
      case "/":
        return v1 / v2;
      case "%":
        return v1 % v2;
    }
  }

  return function calc(key) {
    if (restart) {
      restart = false;
      if (isNum(key)) {
        totalValue = 0;
        currentOp = "";
      }
    }
    if (isNum(key)) {
      currentVaule += key;
      return key;
    }
    if (operators.includes(key)) {
      currentVaule = Number(currentVaule);
      if (currentOp) {
        totalValue = op(totalValue, currentVaule, currentOp);
        currentVaule = "";
        return (currentOp = key);
      }
      totalValue += currentVaule;
      currentVaule = "";
      return (currentOp = key);
    }
    if (key === "=") {
      currentVaule = Number(currentVaule);
      if (!currentOp) {
        totalValue += currentVaule;
      } else {
        totalValue = op(totalValue, currentVaule, currentOp);
        restart = true;
        currentVaule = "";
      }
      return formatTotal(totalValue);
    }
    return "";
  };
}

var calc = calculator();

console.log(useCalc(calc, "4+3=")); // 4+3=7
console.log(useCalc(calc, "+9=")); // +9=16
console.log(useCalc(calc, "*8=")); // *5=128
console.log(useCalc(calc, "7*2*3=")); // 7*2*3=42
console.log(useCalc(calc, "1/0=")); // 1/0=ERR
console.log(useCalc(calc, "+3=")); // +3=ERR
console.log(useCalc(calc, "51=")); // 51
