"use strict"

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
            ){
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
    var nbr = '';
    var total = 0;
    var isEqual = false;
    var operator = '';

    return {
        number(num) {return calc(num)},
        plus() {return calc('+')},
        minus() {return calc('-')},
        mult() {return calc('*')},
        div() {return calc('/')},
        eq() {return calc('=')}
    }
    
    function calc(key) {
        if (isEqual) {
            isEqual = false;
            if (is_number(key)) {
                total = 0;
                operator = '';
            }
        }
        if (is_number(key)) {
            nbr += key;
            return (key);
        }
        if (is_operator(key)) {
            if (operator === '') {
                total = Number(nbr);
                nbr = '';
                return (operator = key);
            }
            total = operate(total, operator, Number(nbr));
            nbr = '';
            return (operator = key);
        }
        if (key === '=') {
            if (operator === '') {
                total = Number(nbr);
            } else {
                total = operate(total, operator, Number(nbr));
                isEqual = true;
                nbr = '';
            }
            return (formatTotal(total));
        }
        return '';
    }

    function is_number(str) {
        if (str === null)
            return (false);
        return (str >= '0' && str <= '9');
    }

    function is_operator(str) {
        return ['+', '-', '/', '%', '*'].includes(str);
    }

    function operate(a, operation, b) {
        var formula = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => a / b
        };
        return (formula[operation](a, b));
    }
}

var calc = calculator();

function useCalc(calc,keys) {
    var keyMappings = {
        "+": "plus",
        "-": "minus",
        "*": "mult",
        "/": "div",
        "=": "eq"
    };

    return [...keys].reduce(
        function showDisplay(display,key){
            var fn = keyMappings[key] || "number";
            var ret = String( calc[fn](key) );
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

console.log(useCalc(calc,"4+3="));    // 4+3=7
console.log(useCalc(calc,"+9="));     // +9=16
console.log(useCalc(calc,"*8="));     // *5=128
console.log(useCalc(calc,"7*2*3="));  // 7*2*3=42
console.log(useCalc(calc,"1/0="));    // 1/0=ERR
console.log(useCalc(calc,"+3="));     // +3=ERR
console.log(useCalc(calc,"51="));     // 51