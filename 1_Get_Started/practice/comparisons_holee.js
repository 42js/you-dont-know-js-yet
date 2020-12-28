const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
    var startTimeMinute = timeToMinute(startTime);

    console.log(timeToMinute(dayStart) <= startTimeMinute
            && startTimeMinute + durationMinutes <= timeToMinute(dayEnd));
    
    return ;

    function timeToMinute (time) {
        var [hour, minute] = time.split(':');
        return (Number(minute) + Number(hour) * 60);
    }
}

scheduleMeeting("7:00", 15);
scheduleMeeting("07:15", 30);
scheduleMeeting("7:30", 30);
scheduleMeeting("11:30", 60);
scheduleMeeting("17:00", 45);
scheduleMeeting("17:30", 30);
scheduleMeeting("18:00", 15);
