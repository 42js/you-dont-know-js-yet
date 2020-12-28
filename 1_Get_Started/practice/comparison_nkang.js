const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
	var [ , hour, minutes] = startTime.match(/^(\d{1,2}):(\d{2})$/) || [];
	hour = Number(hour);
	minutes = Number(minutes);
	var endMinutes = durationMinutes + minutes;
	if (endMinutes >= 60)
	 {
		var endHour = hour + Math.floor(endMinutes / 60);
		endMinutes = endMinutes % 60;
	 }
	else
	{
		var endHour = hour;
	}
	var endNumber = endHour * 100 + endMinutes;
	var dayStartNum = Number(dayStart.replace(":", ""));
	var dayEndNum = Number(dayEnd.replace(":", ""));
	if (dayStartNum < endNumber && dayEndNum > endNumber)
	{
			return (true);
	}
	return (false);
}

console.log(scheduleMeeting("7:00",15));     // false
console.log(scheduleMeeting("07:15",30));    // false
console.log(scheduleMeeting("7:30",30));     // true
console.log(scheduleMeeting("11:30",60));    // true
console.log(scheduleMeeting("17:00",45));    // true
console.log(scheduleMeeting("17:30",30));    // false
console.log(scheduleMeeting("18:00",15));    // false
