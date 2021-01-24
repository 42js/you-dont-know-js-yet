function calculator() {
  var isResult = false;
  var saveNum = 0;
  var saveIn = 0;
  var saveOp = "";

  return function displayCurr(input) {
    if (isNaN(input)) {
      if (saveOp === "") {
        if (input === "=") {
          isResult = true;
          return formatTotal(saveNum);
        }
        saveOp = input;
        isResult = false;
      }
      else {
        switch (saveOp) {
          case "+":
            saveNum = saveNum + saveIn;
            break;
          case "-":
            saveNum = saveNum - saveIn;
            break;
          case "*":
            saveNum = saveNum * saveIn;
            break;
          case "/":
            saveNum = saveNum / saveIn;
            break;
          default:
            break;
        }
        saveIn = 0;
        if (input === "=") {
          saveOp = "";
          isResult = true;
          return formatTotal(saveNum);
        }
        saveOp = input;
      }
    } else {
      if (saveOp === "") {
        if (isResult)
          saveNum = 0;
        saveNum = saveNum * 10 + parseInt(input);
        isResult = false;
      }
      else
        saveIn = saveIn * 10 + parseInt(input);
    }
    return input;
  }

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
        display = display
          .toPrecision(maxDigits)
          .replace(/\.0+$/, "");
      }
      // decimal
      else {
        // reserve space for "."
        maxDigits--;
        // reserve space for leading "0"?
        if (
          Math.abs(display) >= 0 &&
          Math.abs(display) < 1
        ) {
          maxDigits--;
        }
        display = display
          .toPrecision(maxDigits)
          .replace(/0+$/, "");
      }
    }
    else {
      display = "ERR";
    }
    return display;
  }
}

var calc = calculator();

console.log(calc("4"));     // 4
console.log(calc("+"));     // +
console.log(calc("7"));     // 7
console.log(calc("3"));     // 3
console.log(calc("-"));     // -
console.log(calc("2"));     // 2
console.log(calc("="));     // 75
console.log(calc("*"));     // *
console.log(calc("4"));     // 4
console.log(calc("="));     // 300
console.log(calc("5"));     // 5
console.log(calc("-"));     // -
console.log(calc("5"));     // 5
console.log(calc("="));     // 0

function useCalc(calc, keys) {
  return [...keys].reduce(
    function showDisplay(display, key) {
      var ret = String(calc(key));
      return (
        display +
        (
          (ret != "" && key == "=") ?
            "=" :
            ""
        ) +
        ret
      );
    },
    ""
  );
}

console.log(useCalc(calc, "4+3="));           // 4+3=7
console.log(useCalc(calc, "+9="));            // +9=16
console.log(useCalc(calc, "*8="));            // *8=128
console.log(useCalc(calc, "7*2*3="));         // 7*2*3=42
console.log(useCalc(calc, "1/0="));           // 1/0=ERR
console.log(useCalc(calc, "+3="));            // +3=ERR
console.log(useCalc(calc, "51="));            // 51
