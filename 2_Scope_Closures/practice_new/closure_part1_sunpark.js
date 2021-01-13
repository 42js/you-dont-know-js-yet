const doFactorize = (function insideFactorize() {
	var primeCache = {};
	var factorCache = {};

	function isPrime(v) {
		if (v <= 3)
			return v > 1;
		if (!(v in primeCache)) {
			if (v % 2 == 0 || v % 3 == 0)
				primeCache[v] = false;
			else {
				var vSqrt = Math.sqrt(v);
				for (let i = 5; i <= vSqrt; i += 6)
					if (v % i == 0 || v % (i + 2) == 0)
						primeCache[v] = false;
				if (!(v in primeCache))
					primeCache[v] = true;
			}
		}
		return primeCache[v];
	}

	return function factorize(v) {
		if (!(v in factorCache)) {
			if (!isPrime(v)) {
				let i = Math.floor(Math.sqrt(v));
				while (v % i != 0)
					i--;
				factorCache[v] = [
					...factorize(i),
					...factorize(v / i)
				];
			}
			else
				factorCache[v] = [v];
		}
		return factorCache[v];
	}
})();

console.log(doFactorize(200));
