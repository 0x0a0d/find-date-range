# find-date-range

NPM module that help you find the range of day, week, month

# Usage

```javascript
const dateRange = require('find-date-range');
const day = dateRange.day.findDay(Date.now());
console.log(day.start); //Unix Time of day begin at 00:00:00.000Z
console.log(day.end); // Unix time of day end at 23:59:99.999Z
```

# Method

    day.findDay(unix_time)
    week.findWeek(unix_time)
    month.findMonth(unix_time)