const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
  var [hour, minute] = startTime.split(':');
  minute = minute * 1 + hour * 60;
  var [startHour, startMinute] = dayStart.split(':');
  startMinute = startMinute * 1 + startHour * 60;
  var [endHour, endMinute] = dayEnd.split(':');
  endMinute = endMinute * 1 + endHour * 60;
  console.log(startMinute <= minute && minute + durationMinutes <= endMinute);
}

scheduleMeeting("7:00", 15);
scheduleMeeting("07:15", 30);
scheduleMeeting("7:30", 30);
scheduleMeeting("11:30", 60);
scheduleMeeting("17:00", 45);
scheduleMeeting("17:30", 30);
scheduleMeeting("18:00", 15);
