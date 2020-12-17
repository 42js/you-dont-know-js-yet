function toggle(...par){
	var index = 0;
	return function toggleIn(){
		console.log(par[index]);
		index = (++index)%par.length;
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
