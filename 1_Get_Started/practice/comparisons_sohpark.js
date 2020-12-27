function scheduleMeeting(startTime, durationMinutes) {
  const dayStart = "07:30";
  const dayEnd = "17:45";

  const timeRegex = RegExp(/^\d{1,2}:\d\d/, "g");
  if (!timeRegex.test(startTime) || durationMinutes < 0) return false;

  [dayStartHour, dayStartMinute] = dayStart.split(":");
  [dayEndHour, dayEndMinute] = dayEnd.split(":");
  [startHour, startMinute] = startTime.split(":");

  dayStartInNumber = +(dayStartHour + dayStartMinute);
  dayEndInNumber = +(dayEndHour + dayEndMinute);
  startTimeInNumber = +(startHour + startMinute);
  afterMeetingInNumber = `${
    +startHour + parseInt((+startMinute + durationMinutes) / 60)
  }${(+startMinute + (durationMinutes % 60)).toString()}`;
  if (
    dayStartInNumber > startTimeInNumber ||
    dayEndInNumber < startTimeInNumber ||
    afterMeetingInNumber > dayEndInNumber
  )
    return false;
  return true;
}

console.log(scheduleMeeting("7:00", 15));
console.log(scheduleMeeting("07:15", 30));
console.log(scheduleMeeting("7:30", 30));
console.log(scheduleMeeting("11:30", 60));
console.log(scheduleMeeting("17:00", 45));
console.log(scheduleMeeting("17:30", 30));
console.log(scheduleMeeting("18:00", 15));
