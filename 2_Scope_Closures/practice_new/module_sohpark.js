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

  var total = 0;
  var currentValue = "";
  var operator = "";

  function calculate(a, b, op) {
    var operations = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "/": (a, b) => a / b,
      "*": (a, b) => a * b,
    };
    return operations[op](a, b);
  }

  var validators = {
    number: (char) => /\d/.test(char),
    operator: (char) => /[+\-*/]/.test(char),
  };

  function calc(char) {
    if (validators.number(char)) {
      currentValue += char;
      return char;
    } else if (validators.operator(char)) {
      if (operator === "") {
        operator = char;
        currentValue !== "" && total !== null;
        currentValue !== "" ? (total = Number(currentValue)) : null;
        currentValue = "";
      } else {
        total = calculate(total, Number(currentValue), operator);
        operator = char;
        currentValue = "";
      }
      return char;
    } else if (char === "=") {
      if (currentValue !== "") {
        operator !== ""
          ? (total = calculate(total, Number(currentValue), operator))
          : (total = Number(currentValue));
        currentValue = "";
        operator = "";
      }
      return formatTotal(total);
    }
  }

  function number(num) {
    return calc(num);
  }

  function plus() {
    return calc("+");
  }

  function minus() {
    return calc("-");
  }

  function mult() {
    return calc("*");
  }

  function div() {
    return calc("/");
  }

  function eq() {
    return calc("=");
  }

  return {
    number,
    plus,
    minus,
    mult,
    div,
    eq,
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
