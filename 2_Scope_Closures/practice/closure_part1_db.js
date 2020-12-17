var isPrime = (function primeOuter(v){
	var primes = {
		1: false,
		2: true,
		3: true,
	};

	return function isPrime(v) {
	if(v in primes){
		return primes[v];
	}
    if (v % 2 == 0 || v % 3 == 0) {
        return false;
    }
    var vSqrt = Math.sqrt(v);
    for (let i = 5; i <= vSqrt; i += 6) {
        if (v % i == 0 || v % (i + 2) == 0) {
            return (primes[v] = false);
        }
    }
    return (primes[v] = true);
}})();

var factorize = (function factorOuter(v) {
	var factors = {};

	return function factorize(v) {
		if (v in factors){
			return factors[v];
		}
    if (!isPrime(v)) {
        let i = Math.floor(Math.sqrt(v));
        while (v % i != 0) {
            i--;
        }
        return (factors[v] = [
            ...factorize(i),
            ...factorize(v / i)
        ]);
    }
    return (factors[v] = [v]);
}})();

isPrime(11);        // true
isPrime(12);        // false

factorize(11);      // [ 11 ]
factorize(12);      // [ 3, 2, 2 ] --> 3*2*2=12
