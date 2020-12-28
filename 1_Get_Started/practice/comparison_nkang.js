const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
	var [ , hour, minutes] = startTime.match(/^(\d{1,2}):(\d{2})$/) || [];
	if (endMinutes = durationMinutes + minutes >= 60)
	 {
		 endHour = hour + Math.floor(endMinutes / 60);
		 endMinutes = endMinutes % 60;
	 }
	var endNumber = endHour * 100 + endMinutes;
	var dayStartNum = Number(dayStart.replace(":", dayStart);
	var dayEndNum = Number(dayEnd.replace(":", dayEnd);
	if (dayStart < endNumber && dayEnd > endNumber)
	{
			return (true);
	}
	return (false);
}
