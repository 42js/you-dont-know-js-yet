let isPrime = (function hideTheCache() {
  var cache = new Map();
  function isPrime(v) {
    if (!cache.get(v)) {
      if (v <= 3) {
        cache.set(v, v > 1);
      } else if (v % 2 == 0 || v % 3 == 0) {
        cache.set(v, false);
      } else {
        var vSqrt = Math.sqrt(v);
        for (let i = 5; i <= vSqrt; i += 6) {
          if (v % i == 0 || v % (i + 2) == 0) {
            cache.set(v, false);
          }
        }
      }
    }
    if (cache.get(v) === undefined) {
      cache.set(v, true);
    }
    return cache.get(v);
  }
  return isPrime;
})();

let factorize = (function hideTheCache() {
  var cache = new Map();
  function factorize(v) {
    if (!cache.get(v)) {
      if (!isPrime(v)) {
        let i = Math.floor(Math.sqrt(v));
        while (v % i != 0) {
          i--;
        }
        cache.set(v, [...factorize(i), ...factorize(v / i)]);
        return cache.get(v);
      }
      cache.set(v, [v]);
      return cache.get(v);
    }
    return cache.get(v);
  }

  return factorize;
})();

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(12));

console.log(factorize(10));
console.log(factorize(120));
