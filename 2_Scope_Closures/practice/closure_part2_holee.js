function toggle(...argv) { 
    let index = 0;
    let mod = argv.length;
    return function toggleLogic() {
        console.log(argv[index++%mod]);
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