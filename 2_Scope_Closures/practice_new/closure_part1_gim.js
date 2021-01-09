"use strict";

const isPrime = (function () {
  const primes = {};

  return checkPrimes;

  function checkPrimes(v) {
    if (v in primes) {
      return primes[v];
    }

    return (primes[v] = isPrime(v));
  }

  function isPrime(v) {
    if (v <= 3) {
      return v > 1;
    }
    if (v % 2 == 0 || v % 3 == 0) {
      return false;
    }
    var vSqrt = Math.sqrt(v);
    for (let i = 5; i <= vSqrt; i += 6) {
      if (v % i == 0 || v % (i + 2) == 0) {
        return false;
      }
    }

    return true;
  }
})();

const factorize = (function () {
  const factors = {};

  return factorize;

  function factorize(v) {
    if (v in factors) {
      return factors[v];
    }
    if (isPrime(v)) {
      return (factors[v] = [v]);
    }
    let i = Math.floor(Math.sqrt(v));
    while (v % i != 0) {
      i--;
    }

    return (factors[v] = [...factorize(i), ...factorize(v / i)]);
  }
})();
