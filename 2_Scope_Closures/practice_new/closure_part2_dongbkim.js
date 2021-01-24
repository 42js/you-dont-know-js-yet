function toggle(...words){
	var index = 0;
	return function toggleIn(){
		console.log(words[index]);
		index = (index + 1) % words.length;
	}
};


var hello = toggle("hello");
var onOff = toggle("on","off");
var speed = toggle("slow","medium","fast");

hello();      // "hello"
hello();      // "hello"

onOff();      // "on"
onOff();      // "off"
onOff();      // "on"

speed();      // "slow"
speed();      // "medium"
speed();      // "fast"
speed();      // "slow"
