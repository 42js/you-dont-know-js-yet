function calculator() {
	let strNum = "";
	let leftNum = 0;
	let rightNum = 0;
	let oprt = "";

	return function pressKey(key) {
		if (/\d/.test(key)) {
			strNum += key;
			return key;
		}
		else if (/[+*/-]/.test(key) && oprt == "") {
			leftNum = strNum ? Number(strNum) : leftNum;
			strNum = "";
			oprt = key;
			return key;
		}
		else if (/[+*/-]/.test(key) && oprt != "") {
			leftNum = fourRules(leftNum, oprt, Number(strNum));
			strNum = "";
			oprt = key;
			return key;
		}
		else if (key == "=") {
			leftNum = fourRules(leftNum, oprt, Number(strNum));
			strNum = "";
			oprt = "";
			return leftNum;
		}
	}
}

function fourRules(num1, oprt, num2) {
	if (oprt == "+") return num1 + num2;
	else if (oprt == "-") return num1 - num2;
	else if (oprt == "*") return num1 * num2;
	else if (oprt == "/") return num1 / num2;
	else return "err";
}

var calc = calculator();

function useCalc(calc,keys) {
    return [...keys].reduce(
        function showDisplay(display,key){
            var ret = String( calc(key) );
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
                .replace(/\.0+$/,"");
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
                .replace(/0+$/,"");
        }
    }
    else {
        display = "ERR";
    }
    return display;
}