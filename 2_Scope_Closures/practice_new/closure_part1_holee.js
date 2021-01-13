const isPrime = (function () {
    const cache = {};

    return (checkPrimes);

    function checkPrimes(v) {
        if (v in cache)
            return cache[v];
        return (cache[v] = isPrime(v));
    }

    function isPrime(v) { 
        if (v <= 3) {
            return v > 1; 
        }
        if (v % 2 === 0 || v % 3 === 0) { 
            return false;
        }

        var vSqrt = Math.sqrt(v);
        for (let i = 5; i <= vSqrt; i += 6) {
            if (v % i === 0 || v % (i + 2) === 0) { 
                return false;
            } 
        }
        return true; 
    }
})();

var factorize = (function (_) {
    var cache = {};
    
    return (factorize_algorithm);

    function factorize_algorithm(v) {
        if (cache[v])
            return [v];
        if (!isPrime(v)) {
            let i = Math.floor(Math.sqrt(v)); 
            while (v % i !== 0) {
                i--; 
            }
            return [ 
                ...factorize_algorithm(i),
                ...factorize_algorithm(v / i) 
            ];
        }
        cache[v] = true;
        return [v];
    }
})();

console.log(isPrime(11));
console.log(isPrime(12));
console.log(factorize(11));
console.log(factorize(12));
console.log(factorize(4327));
console.log(factorize(4327));
console.log(factorize(4327));
console.log(factorize(4327));