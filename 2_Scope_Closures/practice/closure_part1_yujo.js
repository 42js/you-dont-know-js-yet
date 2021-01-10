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

function factorize(v) {
  if (!isPrime(v)) {
    let i = Math.floor(Math.sqrt(v));
    while (v % i != 0) {
      i--;
    }
    return [...factorize(i), ...factorize(v / i)];
  }
  return [v];
}

console.log(isPrime(11)); // true
console.log(isPrime(12)); // false

console.log(factorize(11)); // [ 11 ]
console.log(factorize(12)); // [ 3, 2, 2 ] --> 3*2*2=12
