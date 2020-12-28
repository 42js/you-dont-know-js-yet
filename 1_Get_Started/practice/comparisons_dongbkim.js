const dayStart = "07:30";
const dayEnd = "17:45";

function timeToNumber(time){
	let buf = time.split(":");
	return [parseInt(buf[0]), parseInt(buf[1])];
}

const start = timeToNumber(dayStart);
const end = timeToNumber(dayEnd);

function endCompare(time){
	if(time[0] >= end[0]){
		if(time[0] == end[0]){
			if(time[1] > end[1]){
				return false;
			}
		} else {
			return false;
		}
	}
	return true;
}

function scheduleMeeting(startTime,durationMinutes) {
	let time = timeToNumber(startTime);
	if(time[0] <= start[0]){
		if(time[0] == start[0]){
			if(time[1] < start[1]){
				return false;
			}
		} else {
			return false;
		}
	} else {
		if(!endCompare(time)){
			return false;
		}
		time[0] += Math.floor(durationMinutes/60);
		time[1] += durationMinutes%60;
		if(time[1] >= 60){
			time[0]++;
			time[1]= time[1]%60;
		}
		if(!endCompare(time)){
			return false;
		}
	}
	return true;
}

console.log(scheduleMeeting("7:00",15));     // false
console.log(scheduleMeeting("07:15",30));    // false
console.log(scheduleMeeting("7:30",30));     // true
console.log(scheduleMeeting("11:30",60));    // true
console.log(scheduleMeeting("17:00",45));    // true
console.log(scheduleMeeting("17:30",30));    // false
console.log(scheduleMeeting("18:00",15));    // false

