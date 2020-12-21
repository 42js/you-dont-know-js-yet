function calculator() {
	var saveNum = "";
	var saveIn = "";
	var saveOp = "";
	return function displayCurr(input) {
		if (isNaN(input)) {
			if (saveIn === "")
				saveOp = input;
			else {
				if (saveNum === "ERR")
					saveNum = parseInt(saveNum);
				saveIn = parseInt(saveIn);
				switch (saveOp) {
					case "+":
						var result = saveNum + saveIn;
						break;
					case "-":
						result = saveNum - saveIn;
						break;
					case "*":
						result = saveNum * saveIn;
						break;
					case "/":
						if (saveIn === 0)
							result = "ERR"
						else
							result = saveNum / saveIn;
						break;
					case "=":

				}
			}
		} else {
			if (saveIn === "")
				saveNum = saveNum.concat(input);
			else
				saveIn = saveIn.concat(input);
		}
		return input;
	}
}

var calc = calculator();

calc("4");     // 4
calc("+");     // +
calc("7");     // 7
calc("3");     // 3
calc("-");     // -
calc("2");     // 2
calc("=");     // 75
calc("*");     // *
calc("4");     // 4
calc("=");     // 300
calc("5");     // 5
calc("-");     // -
calc("5");     // 5
calc("=");     // 0

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

useCalc(calc, "4+3=");           // 4+3=7
useCalc(calc, "+9=");            // +9=16
useCalc(calc, "*8=");            // *5=128
useCalc(calc, "7*2*3=");         // 7*2*3=42
useCalc(calc, "1/0=");           // 1/0=ERR
useCalc(calc, "+3=");            // +3=ERR
useCalc(calc, "51=");            // 51
