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
  var keyMappings = {
    "+": "plus",
    "-": "minus",
    "*": "mult",
    "/": "div",
    "=": "eq",
  };

  return [...keys].reduce(function showDisplay(display, key) {
    var fn = keyMappings[key] || "number";
    var ret = String(calc[fn](key));
    return display + (ret != "" && key == "=" ? "=" : "") + ret;
  }, "");
}

function calculator() {
  var totalValue = 0;
  var currentValue = "";
  var currentOp = "=";

  function isNum(key) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(key));
  }

  var run = {
    number,
    eq,
    plus() {
      return operator("+");
    },
    minus() {
      return operator("-");
    },
    mult() {
      return operator("*");
    },
    div() {
      return operator("/");
    },
  };

  return run;

  function number(key) {
    if (isNum(key)) {
      currentValue += key;
      return key;
    }
  }

  function eq() {
    if (currentOp != "=") {
      totalValue = op(totalValue, currentOp, Number(currentValue));
      currentOp = "=";
      currentValue = "";
      return formatTotal(totalValue);
    }
    return "";
  }

  function operator(key) {
    if (currentOp !== "=" && currentValue !== "") {
      eq();
    } else if (currentValue != "") {
      totalValue = Number(currentValue);
    }
    currentOp = key;
    currentValue = "";
    return key;
  }

  function op(totalValue, oper, currentValue) {
    const ops = {
      "+": (total, current) => total + current,
      "-": (total, current) => total - current,
      "*": (total, current) => total * current,
      "/": (total, current) => total / current,
    };

    return ops[oper](totalValue, currentValue);
  }
}

var calc = calculator();

// console.log(typeof calc;

console.log(useCalc(calc, "4+3=")); // 4+3=7
console.log(useCalc(calc, "+9=")); // +9=16
console.log(useCalc(calc, "*8=")); // *5=128
console.log(useCalc(calc, "7*2*3=")); // 7*2*3=42
console.log(useCalc(calc, "1/0=")); // 1/0=ERR
console.log(useCalc(calc, "+3=")); // +3=ERR
console.log(useCalc(calc, "51=")); // 51
