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

function calculator() {
	var numKept = null;
	var operKept = "";
	var result = 0;
	var flag = 0;

	return function realCalculator(parameter){
		var toNum = Number(parameter);
		if(Number.isNaN(toNum)) {
			if(numKept !== null) {
				 result = operations(result, numKept, operKept);
				 numKept = null;
			 }
			operKept = parameter;
			if(parameter === "="){
				flag = 1;
				operKept = ""
				return formatTotal(result);
			}
			else
				return operKept;
		} else {
			if(flag && operKept === ""){
				flag = 0;
				result = 0;
			}
			if(typeof numKept === "number"){
				numKept = (numKept * 10) + toNum;
				return toNum;
			}
			else if (operKept === "")
				return result = (result * 10) + toNum;
			else
				return numKept = toNum;
		}
	}

	function operations(num1, num2, operator){
		if(operator === "+") {
			return num1 + num2;
		} else if (operator === "-") {
			return num1 - num2;
		} else if (operator === "*") {
			return num1 * num2;
		} else {
			return num1 / num2;
		}
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


console.log(useCalc(calc,"4+3="));           // 4+3=7
console.log(useCalc(calc,"+9="));            // +9=16
console.log(useCalc(calc,"*8="));            // *5=128
console.log(useCalc(calc,"7*2*3="));         // 7*2*3=42
console.log(useCalc(calc,"1/0="));           // 1/0=ERR
console.log(useCalc(calc,"+3="));            // +3=ERR
console.log(useCalc(calc,"51="));            // 51
