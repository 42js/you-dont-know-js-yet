function range(start, end) {
  function completeRange(new_end) {
    if (new_end < start) return [];
    return Array.from(Array(new_end - start + 1).keys(), (x) => x + start);
  }
  if (start === undefined || end < start) return [];
  if (end === undefined) {
    return completeRange;
  }

  return completeRange(end);
}

console.log(range(3, 3));
console.log(range(3, 8));
console.log(range(3, 0));

var start3 = range(3);
var start4 = range(4);

console.log(start3(3));
console.log(start3(8));
console.log(start3(0));

console.log(start4(6));
