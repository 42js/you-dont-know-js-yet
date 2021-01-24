"use strict"

function toggle(...options) { 
    let index = 0;
    return function toggleLogic() {
        console.log(options[index++ % options.length]);
    };
}

var hello = toggle("hello");
var onOff = toggle("on","off");
var speed = toggle("slow","medium","fast");

hello(); 
hello(); 

onOff(); 
onOff(); 
onOff(); 

speed(); 
speed(); 
speed(); 
speed(); 