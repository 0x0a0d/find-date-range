module.exports = time => {
    const _time = new Date(time);
    const year = _time.getUTCFullYear();
    const month = _time.getUTCMonth() + 1;
    const date = _time.getUTCDate();
    const hour = _time.getUTCHours();
    const minute = _time.getUTCMinutes();
    const second = _time.getUTCSeconds();
    const millisecond = _time.getUTCMilliseconds();
    return {
        year, month, date, hour, minute, second, millisecond, time: _time.getTime()
    }
}