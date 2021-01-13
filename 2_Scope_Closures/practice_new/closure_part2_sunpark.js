function toggle(...toggles) {
	let nextToggle = -1;
	return function toggleResult() {
		nextToggle = nextToggle + 1;
		if (nextToggle >= toggles.length)
			nextToggle = 0;
		return toggles[nextToggle];
	};
}

var hello = toggle("hello");
var onOff = toggle("on", "off");
var speed = toggle("slow", "medium", "fast");

console.log(hello());      // "hello"
console.log(hello());      // "hello"

console.log(onOff());      //  "on"
console.log(onOff());      //  "off"
console.log(onOff());      //  "on"

console.log(speed());      // "slow"
console.log(speed());      // "medium"
console.log(speed());      // "fast"
console.log(speed());      // "slow"
