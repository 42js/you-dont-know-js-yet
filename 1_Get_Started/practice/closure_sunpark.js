function range(start, end) {
	if (end === undefined) {
		return getRangeEnd;
	}
	return getRangeEnd(end);

	function getRangeEnd(rangeEnd) {
		var result = [];
		for (var step = start; step <= rangeEnd; step++)
			result.push(step);
		console.log(result); // was `return result`
	}
}

range(3, 3);    // [3]
range(3, 8);    // [3,4,5,6,7,8]
range(3, 0);    // []

var start3 = range(3);
var start4 = range(4);

start3(3);     // [3]
start3(8);     // [3,4,5,6,7,8]
start3(0);     // []

start4(6);     // [4,5,6]
