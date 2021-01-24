const isPrime = (function isPrime() {
  const map = { 1: false, 2: true, 3: true };

  function checkPrime(v) {
    if (map[v] === undefined) {
      if (v % 2 == 0 || v % 3 == 0) {
        return (map[v] = false);
      }
      var vSqrt = Math.sqrt(v);
      for (let i = 5; i <= vSqrt; i += 6) {
        if (v % i == 0 || v % (i + 2) == 0) {
          return (map[v] = false);
        }
      }
      return (map[v] = true);
    }
    return map[v];
  }

  return checkPrime;
})();

const factorize = (function factorize() {
  const map = {};

  function checkFactorize(v) {
    if (map[v]) {
      return map[v];
    }
    if (!isPrime(v)) {
      let i = Math.floor(Math.sqrt(v));
      while (v % i != 0) {
        i--;
      }
      return (map[v] = [...checkFactorize(i), ...checkFactorize(v / i)]);
    }
    return (map[v] = [v]);
  }

  return checkFactorize;
})();

console.log(isPrime(11)); // true
console.log(isPrime(12)); // false
console.log(isPrime(4327)); // true

console.log(factorize(11)); // [ 11 ]
console.log(factorize(12)); // [ 3, 2, 2 ] --> 3*2*2=12
console.log(factorize(4328)); // [2, 2, 2, 541]
