"use strict";

const isPrime = (function () {
  const cache = {};

  return checkCache;

  function checkCache(v) {
    if (v in cache) {
      return cache[v];
    }

    return (cache[v] = isPrime(v));
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
  const cache = {};

  return factorize;

  function factorize(v) {
    if (v in cache) {
      return cache[v];
    }
    if (isPrime(v)) {
      return (cache[v] = [v]);
    }
    let i = Math.floor(Math.sqrt(v));
    while (v % i != 0) {
      i--;
    }

    return (cache[v] = [...factorize(i), ...factorize(v / i)]);
  }
})();
