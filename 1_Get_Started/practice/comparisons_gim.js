const dayStart = "07:30";
const dayEnd = "17:45";
const HOUR = 60;

function makeArray(string) {
  return string.split(':').map(str => Number(str));
}

function scheduleMeeting(startTime, durationMinutes) {
  const times = [dayStart, dayEnd, startTime];
  const [startArr, endArr, compareArr] = times.map(time => makeArray(time));
  if (compareArr[0] < startArr[0] || compareArr[0] > endArr[0]) {
    return false;
  }
  if ((compareArr[0] === startArr[0] && compareArr[1] < startArr[1]) ||
      (compareArr[0] === endArr[0] && compareArr[1] > endArr[1])) {
    return false;
  }
  compareArr[1] += durationMinutes;
  if (compareArr[1] >= HOUR) {
    compareArr[0] += 1;
    compareArr[1] -= HOUR;
  }
  if (
    compareArr[0] > endArr[0] 
    || (compareArr[0] === endArr[0] && compareArr[1] > endArr[1])
    ) {
    return false;
  }

  return true;
}

console.log(scheduleMeeting("07:15",30));    // false
console.log(scheduleMeeting("7:00",15));     // false
console.log(scheduleMeeting("7:30",30));     // true
console.log(scheduleMeeting("11:30",HOUR));    // true
console.log(scheduleMeeting("17:00",45));    // true
console.log(scheduleMeeting("17:30",30));    // false
console.log(scheduleMeeting("18:00",15));    // false