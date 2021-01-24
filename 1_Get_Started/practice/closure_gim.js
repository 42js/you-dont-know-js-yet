"use strict";

function range(start, end) {
  function spread(endInput) {
    const array = [];
    for (let i = start; i <= endInput; i++) {
      array.push(i);
    }

    return array;
  }
  if (typeof end === "number") {
    return spread(end);
  }

  return spread;
}

console.log(range(3, 3)); // [3]
console.log(range(3, 8)); // [3, 4, 5, 6, 7, 8]
console.log(range(3, 0)); // []

var start3 = range(3);

console.log(start3(3)); // [3]
console.log(start3(8)); // [3, 4, 5, 6, 7, 8]
console.log(start3(0)); // []
