function range(start,end) {
	if(end != undefined)
		return makeArray(start,end);
	return function endGetter(endNum){
			return makeArray(start,endNum);
		}

	function makeArray(st,en){
		let array = [];
		for(let i = st;i <= en;i++)
			array.push(i);
		return array;
	}
}

console.log(range(3,3));    // [3]
console.log(range(3,8));    // [3,4,5,6,7,8]
console.log(range(3,0));    // []

var start3 = range(3);
var start4 = range(4);

console.log(start3(3));     // [3]
console.log(start3(8));     // [3,4,5,6,7,8]
console.log(start3(0));     // []

console.log(start4(6));     // [4,5,6]

